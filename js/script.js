import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import AnimaNumeros from "./modules/anima-numeros.js";
import initFuncionamento from "./modules/funcionamento.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  "[data-modal=abrir]",
  "[data-modal=fechar]",
  "[data-modal=container]",
);
modal.init();

const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
animaNumeros.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDownMenu = new DropdownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="buttom"]', '[data-menu="list"]');
menuMobile.init();


initFuncionamento();
