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
