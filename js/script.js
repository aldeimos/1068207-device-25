// Объявили переменную и записи в нее результат метода querySelector 
var link = document.querySelector(".contact-us");
var popup = document.querySelector(".modal-contacts");
var close = popup.querySelector(".modal-close");

var mapLink = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var form = popup.querySelector(".contacts-form");
var login = popup.querySelector(".contacts-form__name");
var email = popup.querySelector(".contacts-form__email");
var comment = popup.querySelector(".contacts-form__comment");

var isStorageSupport = true;
var storageName = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

// Для переменной link добавили событие "click". В функции описывается временная переменная evt (в ней записан объект события).
link.addEventListener("click", function (evt) {
  evt.preventDefault(); // Используем метод для отмены дефолтного состояния элемента
  popup.classList.add("modal-show");
  if (storageName) {
    name.value = storageName;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault(); // 
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (name.value == "" || email.value == "" || comment.value == "") {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
