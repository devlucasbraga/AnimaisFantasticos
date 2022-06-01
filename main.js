(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var o,i,a,s,r,c,l,u,d,h,v=function(){function e(n,o){t(this,e),this.linksInternos=document.querySelectorAll(n),void 0===this.options?this.options={behavior:"smooth",block:"start"}:this.options=o,this.scrollToSection=this.scrollToSection.bind(this)}return n(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),f=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return n(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),m=function(){function e(n,o){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(o),this.activeClass="ativo"}return n(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),g=function(){function e(n,o,i){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(o),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}return n(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"cliqueForaModal",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvent",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvent(),this}}]),e}(),b=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return n(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX+-240,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function y(t,e,n){var o=document.documentElement,i="data-outside";function a(s){t.contains(s.target)||(t.removeAttribute(i),e.forEach((function(t){o.removeEventListener(t,a)})),n())}t.hasAttribute(i)||(e.forEach((function(t){setTimeout((function(){o.addEventListener(t,a)}))})),t.setAttribute(i,""))}new v('[data-menu="suave"] a[href^="#"]').init(),new f('[data-anime="accordion"] dt').init(),new m('[data-tab="menu"] li','[data-tab="content"] section').init(),new g("[data-modal=abrir]","[data-modal=fechar]","[data-modal=container]").init(),new b("[data-tooltip]").init(),function(){var t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){function t(t){var e=this;t.preventDefault(),this.classList.add("active"),y(this,["touchstart","click"],(function(){e.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touchstart","click"].forEach((function(n){e.addEventListener(n,t)}))}))}(),function(){var t=document.querySelector('[data-menu="buttom"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function o(){e.classList.add("active"),t.classList.add("active"),y(e,n,(function(){e.classList.remove("active"),t.classList.remove("active")}))}t&&n.forEach((function(e){t.addEventListener(e,o)}))}(),i=document.querySelector(".numeros"),(o=new MutationObserver((function(t){t[0].target.classList.contains("ativo")&&(o.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),o=0,i=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())})))}))).observe(i,{attributes:!0}),s=(a=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),r=a.dataset.horario.split(",").map(Number),l=(c=new Date).getDay(),u=c.getHours(),d=-1!==s.indexOf(l),h=u>=r[0]&&u<r[1],d&&h&&a.classList.add("aberto")})();