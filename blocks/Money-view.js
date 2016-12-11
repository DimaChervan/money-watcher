(function (g) {
  const global = g;
  class MoneyView {
    constructor({ el }) {
      this.el = el;

      this.initEvents();
    }

    static deleteItem(item) {
      item.parentNode.removeChild(item);
    }

    static onClick(event) {
      const target = event.target;
      const action = target.dataset.action;

      if (!action) return false;
      MoneyView[action](target.parentNode);
      return true;
    }

    initEvents() {
      this.el.addEventListener('click', MoneyView.onClick.bind(this));
    }
  }

  global.MoneyView = MoneyView;
}(this));
