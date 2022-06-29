// Variaveis {
const controle = document.querySelectorAll("[data-controle]");

const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
// }

// Eventos {

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        autalizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle, evento.target.parentNode);
    });
});

// }

// Funções {
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

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

function autalizaEstatisticas(peca, operacao, controle) {
    const contador = controle.querySelector("[data-contador]");

    if (operacao === "-" && contador.value >= 1) {
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })

    } if (operacao === "+") {
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }
}

// }