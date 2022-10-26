export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._renderedItems = items;
  }

  addItem(element, order = false) {
    if (order) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }

  renderItems(array) {
    array.forEach((item) => {
      this._renderer(item);
    });
  }
}
