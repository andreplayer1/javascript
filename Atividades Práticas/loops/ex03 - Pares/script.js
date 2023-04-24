//Crie um programa que solicite ao usuário para digitar um número e imprima todos os números pares de 0 até esse número utilizando um loop while.

let num = prompt('Digite um número: ');
let res = document.getElementById('res');
function pares() {
    let i = 0;
    let par
    while (i <= num) {
        par = i
        if (par % 2 == 0) {
            res.innerHTML += `Esse número é Par ${par}<br>`
        } else {
            res.innerHTML += `Esse número é Ímpar ${par}<br>`
        } 
        i++
    }
}