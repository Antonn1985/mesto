import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaption = this._popup.querySelector(".image-popup__caption");
    this._popupPicture = this._popup.querySelector(".image-popup__picture");
  }

  open(data) {
    this._popupCaption.textContent = data.name;
    this._popupPicture.src = data.link;
    this._popupPicture.alt = data.name;
    super.open();
  }
}
