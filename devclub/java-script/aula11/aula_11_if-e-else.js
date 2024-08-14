/* Controlador de Fluxo
    - IF(Se) -> Faça ISSO
    - ELSE (Se não)

   Operadores de comparação
    > maior que
    < menor que
    == igual que

*/

const notaDoAluno = 7
const notaDeCorte = 5


if (notaDoAluno >= notaDeCorte) {
    // O QUE SERÁ EXECUTADO, SE O IF FOR VERDADEIRO
    console.log("Parabéns, você passou de ano")
} else {
    // SE O IF FOR FALSO, ELE ENTRA AQUI
    console.log("Você foi reprovado")
}