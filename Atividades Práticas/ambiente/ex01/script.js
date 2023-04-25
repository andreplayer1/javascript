 let result = document.getElementById('res')
 function contador() {
     let inicio = Number(document.querySelector('input#inicio').value);
     let fim = Number(document.querySelector('input#fim').value);
     let passo = Number(document.querySelector('input#passo').value);

    for (let i = inicio ; i <= fim ; i += passo){
        result.innerHTML += `Contando ${i}<br>`
        console.log()
    }
}