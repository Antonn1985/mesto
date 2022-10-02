export default class UserInfo {
    constructor({userNameSelector, userDescriptionSelector}) {
        this._userNameSelector = userNameSelector
        this._userDescriptionSelector = userDescriptionSelector
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.userName = this._userNameSelector.textContent
        this._userInfo.userJob = this._userDescriptionSelector.textContent
        return this._userInfo
    }

    setUserInfo (popupName, popupJob) {
        this._userNameSelector.textContent = popupName.value
        this._userDescriptionSelector.textContent = popupJob.value
    }
}