//Crie um programa que peça ao usuário para digitar um número e imprima todos os números de 0 até esse número utilizando um loop for.

entrada = prompt('Digite um número: ');
let res = '';
function contador(){
for(let i = 0 ; i <= entrada ; i++) {
    res = i;
    document.getElementById('res'). innerHTML += `Contagem ${res}<br>`
}
}