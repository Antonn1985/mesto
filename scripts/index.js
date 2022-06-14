const editButton = document.querySelector('.profile__edit-button')
const popupUser = document.querySelector('.popup__name')
const closePopupUser = document.querySelector('.popup__close-name')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.popup__input_type_name')
const popupProfession = document.querySelector('.popup__input_type_profession')
const formElementUser = document.querySelector('.popup__form-name')


editButton.addEventListener('click', function () {
  popupUser.classList.add('popup_opened')
  popupName.value = profileName.textContent
  popupProfession.value = profileProfession.textContent
})


closePopupUser.addEventListener('click', function () {
  popupUser.classList.remove('popup_opened')
})

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileProfession.textContent = popupProfession.value
  profileName.textContent = popupName.value
  popupUser.classList.remove('popup_opened')
}
formElementUser.addEventListener('submit', formSubmitHandler);




const placeForplaces = document.querySelector('.elements');
const templateForPlaces = document.querySelector('.elements__template');
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];

initialCards.reverse();

const addButton = document.querySelector('.profile__add-button')
const popupPhoto = document.querySelector('.popup__photo')
const closePopupPhoto = document.querySelector('.popup__close-photo')
const formElementPhoto = document.querySelector('.popup__form-photo')
const popupPictureName = formElementPhoto.querySelector('.popup__input_type_picture-name')
const popupPictureLink = formElementPhoto.querySelector('.popup__input_type_picture-link')
const imagePopup = document.querySelector('.image-popup')
const imageClose = document.querySelector('.image-popup__close')
const imageCaption = document.querySelector('.image-popup__caption')
const imagePicture = document.querySelector('.image-popup__picture')


function addCardsbegin(item) {
  const cardsElement = templateForPlaces.content.cloneNode(true);
  cardsElement.querySelector('.elements__title').textContent = item.name;
  cardsElement.querySelector('.elements__image').src = item.link;
  cardsElement.querySelector('.elements__like-heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-heart_active')
  });
  
  cardsElement.querySelector('.elements__image').addEventListener('click', function () {
    imagePopup.classList.add('popup_opened');
    imageCaption.textContent = item.name;
    imagePicture.src = item.link;
  });

  cardsElement.querySelector('.elements__trash').addEventListener('click', function (evt) {
    const removeElement = evt.currentTarget.parentElement.parentElement;
    removeElement.remove();
  });

  placeForplaces.prepend(cardsElement);
};

imageClose.addEventListener('click', function () {
  imagePopup.classList.remove('popup_opened');
})

addButton.addEventListener('click', function () {
  popupPhoto.classList.add('popup_opened');
})

closePopupPhoto.addEventListener('click', function () {
  popupPhoto.classList.remove('popup_opened');
  formElementPhoto.reset();
})

function photoFormSubmitHandler(evt) {
  evt.preventDefault();
  const item = {};
  item.name = popupPictureName.value;
  item.link = popupPictureLink.value;
  addCardsbegin(item);
  formElementPhoto.reset();
  popupPhoto.classList.remove('popup_opened');
}

initialCards.forEach(addCardsbegin);
formElementPhoto.addEventListener('submit', photoFormSubmitHandler);
