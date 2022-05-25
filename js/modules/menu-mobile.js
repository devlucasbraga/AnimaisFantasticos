import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButtom = document.querySelector('[data-menu="buttom"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("active");
    menuButtom.classList.add("active");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButtom.classList.remove("active");
    });
  }

  if (menuButtom) {
    eventos.forEach((evento) => {
      menuButtom.addEventListener(evento, openMenu);
    });
  }
}
