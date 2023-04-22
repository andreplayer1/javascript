/*
 let num = [5,8,2,4,9,3]

 num.sort()
 num.push(1)
 console.log(num)
 console.log(`O vetor tem ${num.length} posições` )
 console.log(`O primeiro valor do vetor é ${num[0]}`)

 for(let pos = 0;pos < num.length;pos++) {
     console.log(num[pos])
 }

let valores = [8,1,7,4,2,9]
valores.sort()

console.log(valores)

                            COMO NÃO FAZER!

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

//FORMA CORRETA COM LOOP
                            USANDO O FOR

for (pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} é ${valores[pos]}`)
}

                            USANDO O FOR IN

                            COMO SE LER
                PARA CADA POSIÇÃO   EM  ARRAY
                            FOR(    IN    ){

                            }
for(let pos in valores){
    console.log(`A posição ${pos} é ${valores[pos]}`)
}
*/

let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições` )
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}