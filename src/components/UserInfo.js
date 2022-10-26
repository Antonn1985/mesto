export default class UserInfo {
  constructor({
    userNameSelector,
    userDescriptionSelector,
    userAvatarSelector,
  }) {
    this._userNameSelector = userNameSelector;
    this._userDescriptionSelector = userDescriptionSelector;
    this._userAvatarSelector = userAvatarSelector;
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo.userName = this._userNameSelector.textContent;
    this._userInfo.userJob = this._userDescriptionSelector.textContent;
    return this._userInfo;
  }

  setUserName(data) {
    this._userNameSelector.textContent = data.name;
    this._userDescriptionSelector.textContent = data.about;
  }

  setUserInfo(data) {
    this._userAvatarSelector.src = data.avatar;
    this._id = data.id;
  }

  getId() {
    return this._id;
  }
}
