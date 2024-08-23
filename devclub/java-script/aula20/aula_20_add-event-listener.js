const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiValor() {
    console.log("Troquei de valor")
}

select.addEventListener("change", troqueiValor)