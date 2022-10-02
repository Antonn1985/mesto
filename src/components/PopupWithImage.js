import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }
    open(data) {
        this._popup.querySelector('.image-popup__caption').textContent = data.name;
        this._popup.querySelector('.image-popup__picture').src = data.link;
        this._popup.querySelector('.image-popup__picture').alt = data.name;
        super.open();
    }

}