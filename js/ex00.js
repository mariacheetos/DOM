/**Exemplo 01 - getElementById */
var elemento = document.getElementById("titulo")
alert(elemento)
console.log(elemento)

/*Exemplo 02 - innerHTML */
function mudarTitulo() {
    var elemento = document.getElementById("titulo")
    elemento.innerHTML = "Manipulando o título via JS"
    var elemento02 = document.getElementById("titulo02")
    elemento02.innerHTML = "Maria Luísa chata"
}
/*Exemplo 03 - mudar estilo */
function mudarEstilo() {
    var elemento
    elemento = document.getElementById("titulo")
    elemento.style.color = "blue"
    elemento.style.backgroundColor = "pink"
    elemento.style.fontSize = "70px"
}
/*Exemplo 04 - classList.add  localiza o elemento desejado e insere uma classe HTML*/
function destacar() {
    var elemento = document.getElementById("titulo02")
    elemento.classList.add("destaque")
}

function remover() {
    var elemento = document.getElementById("titulo02")
    elemento.classList.remove("destaque")
}

function alternar() {
    var elemento = document.getElementById("titulo02")
    elemento.classList.toggle("destaque")
}

function adicionarTexto() {
    /*Cria um elemento p no HTML como a seguir: <p> Novo paragrafo criado com JS*/
    var novo = document.createElement("p")
    novo.innerText = "Novo parágrafo criado com JS"
    novo.id = "paragrafo"

    /*Depois de criar o elemento vamos colocar o elemento p na div container */
    var container = document.getElementById("container")
    container.appendChild(novo)
}

function removerTexto() {
    var paragrafo = document.getElementById("paragrafo")
    //teste para remover se somente tiver paragrafo
    if (paragrafo) {
        paragrafo.remove();
    }
    else {
        alert("Não há texto para remover")
    }
}

function removerTudo() {
    var container = document.getElementById("container")
    if (container) {
        container.remove();
    }
    else {
        alert("Não há texto para remover")
    }
}

function colorir() {
    var itens = document.querySelectorAll("p")
    for (var i = 0; i < itens.length; i++) {
        itens[i].style.color = "green"
    }
}