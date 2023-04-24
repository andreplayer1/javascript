//Crie um programa que imprima os números de 1 a 10 utilizando um loop while.

function contador() {
    let num = 0
    let res =''
    while (num <= 10){
        res = num
        num ++
        document.getElementById('res').innerHTML += `Número ${res}<br>`
    }
}