// Variaveis {
const controle = document.querySelectorAll(".controle-ajuste");
// }

// Eventos {

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    });
});

// }

// Funções {
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-" && peca.value >= 1) {
        peca.value = parseInt(peca.value) - 1;

        if (peca.value === "0") {
            peca.value = "00";
        }
    }

    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    }

}

// }