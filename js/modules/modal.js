export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal=abrir]");
  const botaoFechar = document.querySelector("[data-modal=fechar]");
  const containerModal = document.querySelector("[data-modal=container]");

  function toggleModal(event) {
    event.preventDefault(); // previnir que meu evento nao saia da pagina
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    //  verifica se o clique foi fora do modal e fecha se nao ele permanece
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
