/* Корзина */
var basketCountSpan = document.querySelector(".basket-count");
var favoritesCountSpan = document.querySelector(".favorites-count");
var aBasket = document.querySelector(".basket");
var aFavorites = document.querySelector(".favorites");

var basketCount = Number(localStorage.getItem("basketCount"));

var favoritesCount = Number(localStorage.getItem("favoritesCount"));
favoritesCountSpan
var btnToBasket = document.querySelectorAll(".to-basket");
var btnToFavorites = document.querySelectorAll(".to-favorites");
var modalBasket = document.querySelector(".modal-basket");

if (basketCount > 0) {
  basketCountSpan.textContent = basketCount;
  aBasket.classList.add("active");
} else {
  aBasket.classList.remove("active");
  basketCountSpan.textContent = "0";
}

if (favoritesCount > 0) {
  aFavorites.classList.add("active");
  favoritesCountSpan.textContent = favoritesCount;
} else {
  aFavorites.classList.remove("active");
  favoritesCountSpan.textContent = "0";
}



var addCheck = function (basket, favorites) {
  basket.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal-show");
    basketCount++;
    basketCountSpan.textContent = basketCount;
    localStorage.setItem("basketCount", basketCount);
    aBasket.classList.add("active");
  });

  favorites.addEventListener("click", function (evt) {
    evt.preventDefault();
    favoritesCount++;
    favoritesCountSpan.textContent = favoritesCount;
    localStorage.setItem("favoritesCount", favoritesCount);
    aFavorites.classList.add("active");
  });

};

for (var i = 0; i < btnToBasket.length; i++) {
  addCheck(btnToBasket[i], btnToFavorites[i]);
}







if (document.querySelector(".btn-modal-letter")) {
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

  /* Слайдер доставка */

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



}



//Авторизация

btnLogin = document.querySelector(".btn-login");
btnUser = document.querySelector(".btn-user-logout");
userEnter = document.querySelector(".user-enter");
userProfile = document.querySelector(".user-profile");

if (localStorage.getItem("login") === "1") {
  userEnter.classList.add("hide");
  userProfile.classList.remove("hide");
}

btnLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  userEnter.classList.add("hide");
  userProfile.classList.remove("hide");
  localStorage.setItem("login", "1");
});

btnUser.addEventListener("click", function (evt) {
  evt.preventDefault();
  userEnter.classList.remove("hide");
  userProfile.classList.add("hide");
  localStorage.setItem("login", "0");
});





//Закртие модалок

btnClose = modalBasket.querySelector(".btn-close");
btnContinue = modalBasket.querySelector(".btn-continue");
modal = document.querySelector(".modal");

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalLetter) {
      modalLetter.classList.remove("modal-show");
    }
    if (modalMap) {
      modalMap.classList.remove("modal-show");
    }
    modalBasket.classList.remove("modal-show");
  }
});



btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
});

btnContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
});