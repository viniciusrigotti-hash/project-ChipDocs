// Script principal

//Declarações
const header = document.querySelector(".header");

// Header animado
let ultimaPosicao = window.scrollY;

window.addEventListener("scroll", () => {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual > ultimaPosicao) {
        header.style.transform = "translateY(-100%)";
    }
    else {
        header.style.transform = "translateY(0)";
    }

    ultimaPosicao = posicaoAtual;
});