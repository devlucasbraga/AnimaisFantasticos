import outsideClick from "./outsideclick.js";

export default class tMenuMobile {
  constructor(menuButtom, menuList, events) {
    this.menuButtom = document.querySelector(menuButtom);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    // define touchstart e click como argumentos padrao
    // de events caso o usuario nao define
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault()
    this.menuList.classList.add(this.activeClass);
    this.menuButtom.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButtom.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuButtom.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuList && this.menuButtom) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
