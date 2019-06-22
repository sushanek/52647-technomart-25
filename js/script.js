var btnModalLetter = document.querySelector(".btn-modal-letter");
var modalLetter = document.querySelector(".modal-letter");
var btnLetterClose = modalLetter.querySelector(".btn-close");
var modalLetterForm = modalLetter.querySelector(".modal-letter-form");
var inpName = modalLetter.querySelector("[name=name]");
var inpEmail = modalLetter.querySelector("[name=email]");
var inpMessage = modalLetter.querySelector("[name=message]");

var btnModalMap = document.querySelector(".btn-modal-map");
var modalMap = document.querySelector(".modal-map");
var btnMapClose = modalMap.querySelector(".btn-close");

var btnSlider = document.querySelector(".slider-left");
var vistaSlider = document.querySelector(".vista-slider");
/* var btnToBasket = document.querySelectorAll(".to-basket");
var modalCart = document.querySelector(".modal-basket");
 */

btnSlider.addEventListener("click", function (evt) {
  evt.preventDefault();
  vistaSlider.classList.toggle("vista-slider-1");
  vistaSlider.classList.toggle("vista-slider-2");
});


//Окно обратной связи
btnModalLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLetter.classList.add("modal-show");
  inpName.focus();
  if (localStorage.getItem("name")) {
    inpName.value = localStorage.getItem("name");
    inpEmail.value = localStorage.getItem("email");
    inpMessage.focus();
  }
});

modalLetterForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  localStorage.setItem("name", inpName.value);
  localStorage.setItem("email", inpEmail.value);
});

btnLetterClose.addEventListener("click", function (evt) {
  modalLetter.classList.remove("modal-show");
});


//Окно карты
var btnModalMap = document.querySelector(".btn-modal-map");
var modalMap = document.querySelector(".modal-map");
var btnMapClose = modalMap.querySelector(".btn-close");

btnModalMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

btnMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");;
});



//Закртие модалок по ESC
window.addEventListener('keydown', function(evt) {
  modal = document.querySelectorAll(".modal");
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalLetter.classList.remove("modal-show");
    modalMap.classList.remove("modal-show");
    modalCart.classList.remove("modal-show");
  }
})