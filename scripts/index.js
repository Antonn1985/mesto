import FormValidator from './FormValidator.js';
import Card from './Card.js';

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

const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
  formSelector: '.form',
  formPhoto: '.form-photo',
  inputErrorPassive: '.form__input-error'
}

const buttonEdit = document.querySelector('.profile__edit-button')
const popupUser = document.querySelector('.popup-name')
const popupUserClose = document.querySelector('.popup__close-name')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.form__input_type_name')
const popupProfession = document.querySelector('.form__input_type_profession')
const formElementUser = document.querySelector('.form-name')
const cardList = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__add-button')
const popupPhoto = document.querySelector('.popup-photo')
const popupPhotoClose = document.querySelector('.popup__close-photo')
const formElementPhoto = document.querySelector('.form-photo')
const popupPictureName = formElementPhoto.querySelector('.form__input_type_picture-name')
const popupPictureLink = formElementPhoto.querySelector('.form__input_type_picture-link')
const imagePopup = document.querySelector('.image-popup')
const imageClose = document.querySelector('.image-popup__close')
const imageCaption = document.querySelector('.image-popup__caption')
const imagePicture = document.querySelector('.image-popup__picture')
const popupPictureButton = document.querySelector('.form__button_type_picture')

const allPopups = Array.from(document.querySelectorAll('.popup'));

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escPopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escPopup);
}

function escPopup(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    currentPopup.classList.remove('popup_opened')
  }
}

function clickOutside(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const currentPopup = document.querySelector('.popup_opened');
    currentPopup.classList.remove('popup_opened')
  }
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileProfession.textContent = popupProfession.value
  profileName.textContent = popupName.value
  closePopup(popupUser)
}

function photoFormSubmitHandler(evt) {
  const cardInfo = {
    name: popupPictureName.value,
    link: popupPictureLink.value,
    alt: popupPictureName.value
  }
  const newCard = new Card(cardInfo.name, cardInfo.link, '.elements__template');
  const cardElement = newCard.generateCard()
  cardList.prepend(cardElement)
  evt.preventDefault();
  closePopup(popupPhoto);
  popupPictureButton.setAttribute("disabled", false)
  popupPictureButton.classList.add('form__button_disabled');
}

buttonEdit.addEventListener('click', function () {
  openPopup(popupUser)
  popupName.value = profileName.textContent
  popupProfession.value = profileProfession.textContent;
  const eventInput = new Event("input");
  popupName.dispatchEvent(eventInput);
  popupProfession.dispatchEvent(eventInput);
})

popupUserClose.addEventListener('click', function () {
  closePopup(popupUser)
})

formElementUser.addEventListener('submit', submitEditProfileForm);

imageClose.addEventListener('click', function () {
  closePopup(imagePopup);
})

buttonAdd.addEventListener('click', function () {
  popupPictureButton.setAttribute("disabled", false)
  popupPictureButton.classList.add('form__button_disabled');
  const inputError = Array.from(formElementPhoto.querySelectorAll('.form__input'));
  inputError.forEach(input => { input.classList.remove('form__input_type_error'); })
  const textError = Array.from(formElementPhoto.querySelectorAll('.form__input-error'));
  textError.forEach(text => { text.classList.remove('form__input-error_active'); })
  formElementPhoto.reset();
  openPopup(popupPhoto);
})

popupPhotoClose.addEventListener('click', function () {
  closePopup(popupPhoto);
})

formElementPhoto.addEventListener('submit', photoFormSubmitHandler);

allPopups.forEach(function () {
  addEventListener('click', function (evt) {
    clickOutside(evt)
  })
})

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.elements__template')
  const cardElement = card.generateCard();
  cardList.prepend(cardElement)
})

const formValidName = new FormValidator(validationConfig, '.form-name');
formValidName.enableValidation();
const formValidPhoto = new FormValidator(validationConfig, '.form-photo');
formValidPhoto.enableValidation();

export { validationConfig };
export { imageCaption, imagePicture, openPopup, imagePopup }

