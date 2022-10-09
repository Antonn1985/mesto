import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  initialCards,
  validationConfig,
  buttonEdit,
  profileName,
  profileProfession,
  popupName,
  popupProfession,
  cardList,
  buttonAdd,
  formElementPhoto,
  formElementName
} from "../utils/constants.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const formValidName = new FormValidator(
  validationConfig,
  formElementName
);
formValidName.enableValidation();

const formValidPhoto = new FormValidator(
  validationConfig,
  formElementPhoto
);
formValidPhoto.enableValidation();

const imagePopup = new PopupWithImage(".image-popup");
imagePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popup-photo", handlePhotoFormSubmit);
addCardPopup.setEventListeners();

const editNamePopup = new PopupWithForm(".popup-name", submitEditProfileForm);
editNamePopup.setEventListeners();

const userInfo = new UserInfo({
  userNameSelector: profileName,
  userDescriptionSelector: profileProfession,
});

const cardSection = new Section(
  {
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  cardList
);

function handleCardClick(data) {
  imagePopup.open(data);
}

function submitEditProfileForm() {
  userInfo.setUserInfo(popupName, popupProfession);
}

function createCard(item) {
  const card = new Card({ data: item, handleCardClick }, ".elements__template");
  const cardElement = card.generateCard();
  return cardElement;
}

function handlePhotoFormSubmit(formValues) {
  cardSection.addItem(createCard(formValues));
}

initialCards.reverse();

buttonEdit.addEventListener("click", function () {
  editNamePopup.open();
  const currentUserInfo = userInfo.getUserInfo();
  popupName.value = currentUserInfo.userName;
  popupProfession.value = currentUserInfo.userJob;
  formValidName.removeValidationErrors();
});

buttonAdd.addEventListener("click", function () {
  formValidPhoto.removeValidationErrors();
  formValidPhoto.disableSubmitButton();
  formElementPhoto.reset();
  addCardPopup.open();
});

cardSection.renderItems(initialCards);


