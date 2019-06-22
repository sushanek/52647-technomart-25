var btnModalLetter = document.querySelector(".btn-modal-letter");
var modalLetter = document.querySelector(".modal-letter");
var modalMap = document.querySelector(".modal-map");
var modalLetterClose = modalLetter.querySelector(".btn-close")


btnModalLetter.addEventListener("click", function (evt) {
  evt.preventDefault;
  console.log("1");
  modalLetter.classList.remove("hide");
});

modalLetterClose.addEventListener("click", function () {
  modalLetter.classList.add("hide");
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode == 27) {
    modalLetter.classList.add("hide");
    modalMap.classList.add("hide");
  }
})