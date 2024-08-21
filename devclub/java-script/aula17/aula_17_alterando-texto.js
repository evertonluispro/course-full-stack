/*
Alterando e Acessando textos

textContent -> Pega todo o conteúdo
innerText -> Pega APENAS o texto
innerHTML -> Permite adicionar HTML e texto
*/

const element = document.querySelector(".paragraph-js")

element.textContent = "Novo texto"
console.log(element.textContent) // SÓ HTML
console.log(element.innerText) // LEVA EM CONTA O CSS
console.log(element.innerHTML) // TRÁS TUDO