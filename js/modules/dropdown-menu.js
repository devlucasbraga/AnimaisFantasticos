import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);


    // define touchstart e click como argumentos padrao
    // de events caso o usuario nao define
    if (events === undefined) {
      this.event = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeClass = "active";
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // ativa o dropDownmenu e adiciona 
  // a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.event, () => {
      element.classList.remove("active");
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.event.forEach((userevent) => {
        menu.addEventListener(userevent, this.activeDropDownMenu);
      });
    });
  }

  initFuncionamento() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
