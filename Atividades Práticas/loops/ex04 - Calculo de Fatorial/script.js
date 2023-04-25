//Crie um programa que solicite ao usuário para digitar um número e calcule o fatorial desse número usando um loop do while.

let num = prompt('Digite um número: ')
let res = document.getElementById('resp')

function calcularFatorial() {
    let fat = 1
    let i = num

    
    do {
        if (num == 0 || num == 1){
            res.innerHTML = 0

        } else{
        res.innerHTML = fat *= i
        i--
        }
    } while (i > 0);
}