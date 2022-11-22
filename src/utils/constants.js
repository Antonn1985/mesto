const config = {
  url: "https://mesto.nomoreparties.co/v1/cohort-51",
  headers: {
    "Content-Type": "application/json",
    Authorization: "7f566e4f-f93a-41b2-81ab-61db9108a2c8",
  },
};

const validationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  formSelector: ".form",
  inputErrorPassive: ".form__input-error",
};

const buttonEditName = document.querySelector(".profile__edit-button");
const profileAvatar = document.querySelector(".profile__avatar");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const popupName = document.querySelector(".form__input_type_name");
const popupProfession = document.querySelector(".form__input_type_profession");
const cardList = ".elements";
const buttonAdd = document.querySelector(".profile__add-button");
const formElementPhoto = document.querySelector(".form-photo");
const formElementName = document.querySelector(".form-name");
const formElementAvatar = document.querySelector(".form-avatar");
const buttonAvatar = document.querySelector(".profile__photo");
const buttonSaveName = document.querySelector(".form__button_type_name");
const buttonSavePicture = document.querySelector(".form__button_type_picture");
const buttonSaveAvatar = document.querySelector(".form__button_type_avatar");

export {
  config,
  validationConfig,
  buttonEditName,
  profileName,
  profileProfession,
  popupName,
  popupProfession,
  cardList,
  buttonAdd,
  formElementPhoto,
  formElementName,
  profileAvatar,
  buttonAvatar,
  formElementAvatar,
  buttonSaveAvatar,
  buttonSaveName,
  buttonSavePicture,
};
