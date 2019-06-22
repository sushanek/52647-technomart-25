var btnModalLetter = document.querySelector(".btn-modal-letter");
var modalLetter = document.querySelector(".modal-letter");
var btnLetterClose = modalLetter.querySelector(".btn-close")

var btnModalMap = document.querySelector(".btn-modal-map");
var modalMap = document.querySelector(".modal-map");
var btnMapClose = modalMap.querySelector(".btn-close")

var btnToBasket = document.querySelector(".to-basket");
var modalCart = document.querySelector(".modal-basket")

btnToBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("hide");
});

//Окно обратной связи
btnModalLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLetter.classList.remove("hide");
});

btnLetterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLetter.classList.add("hide");
});

//Окно карты
btnModalMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("hide");
});

btnMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("hide");
});


//Закртие модалок по ESK
document.addEventListener('keydown', function(evt) {
  evt.preventDefault();
  if (evt.keyCode == 27) {
    modalLetter.classList.add("hide");
    modalMap.classList.add("hide");
  }
})