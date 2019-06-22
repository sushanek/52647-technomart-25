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

var btnDelivery = document.querySelector(".btn-delivery");
var btnGuarantee = document.querySelector(".btn-guarantee");
var btnCredit = document.querySelector(".btn-credit");
var serviceDelivery = document.querySelector(".service-delivery");
var serviceGuarantee = document.querySelector(".service-guarantee");
var serviceCredit = document.querySelector(".service-credit");

btnDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnDelivery.classList.add("service-item__current");
  btnGuarantee.classList.remove("service-item__current");
  btnCredit.classList.remove("service-item__current");
  serviceDelivery.classList.remove("visually-hidden");
  serviceGuarantee.classList.add("visually-hidden");
  serviceCredit.classList.add("visually-hidden");
});

btnGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnDelivery.classList.remove("service-item__current");
  btnGuarantee.classList.add("service-item__current");
  btnCredit.classList.remove("service-item__current");
  serviceDelivery.classList.add("visually-hidden");
  serviceGuarantee.classList.remove("visually-hidden");
  serviceCredit.classList.add("visually-hidden");
});

btnCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnDelivery.classList.remove("service-item__current");
  btnGuarantee.classList.remove("service-item__current");
  btnCredit.classList.add("service-item__current");
  serviceDelivery.classList.add("visually-hidden");
  serviceGuarantee.classList.add("visually-hidden");
  serviceCredit.classList.remove("visually-hidden");
});


/* var btnSlider = document.querySelector(".promo-slider-nav");
var vistaSlider1 = document.querySelector(".vista-slider-1");
var vistaSlider1 = document.querySelector(".vista-slider-2");


btnSlider.addEventListener("click", function (evt) {
  evt.preventDefault();
  vistaSlider1.classList.toggle("modal-show");
  vistaSlider2.classList.toggle("modal-show");
});
 */

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