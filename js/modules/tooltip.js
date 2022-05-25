export default function initToolTip() {
  const toolTipe = document.querySelectorAll("[data-tooltip]");

  // objeto que faz com que o tooltip mova junto com o mouse
  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20}px`;
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  // objeto criado para remove a tooltip quando passar o mouse outra vez
  const onMouseLeave = {
    // metodo que faz com que o objeto faça referencia com a função em cima
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  function onMouseOver() {
    const toolTipBox = criarToolTipBox(this);
    this.addEventListener("mousemove", onMouseMove);

    onMouseMove.toolTipBox = toolTipBox;
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;

    this.addEventListener("mouseleave", onMouseLeave);
  }

  toolTipe.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
