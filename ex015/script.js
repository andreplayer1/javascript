function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
    }if (fsex[0].checked){
    genero = `Homem`
    if (idade > 0 && idade <= 2){
        //bebe
        img.setAttribute('src', 'imagens/bebe-menino.jpg')
    } else if (idade <= 12) {
        //criança
        img.setAttribute('src', 'imagens/criançam.webp')
    } else if (idade <= 18) {
        //adolescente
        img.setAttribute('src', 'imagens/adolescente-menino.jpg')
    } else if (idade <= 35) {
        //adulto
        img.setAttribute('src', 'imagens/adultom.webp')
    } else if (idade <= 50) {
        //adulto 2
        img.setAttribute('src', 'imagens/meiaidadem.jpg')
    } else { 
        //idoso
        img.setAttribute('src', 'imagens/idoso.jpeg')
    }
    }else if(fsex[1].checked){
        genero = `Mulher`
        if (idade > 0 && idade <= 2){
            //bebe
            img.setAttribute('src', 'imagens/bebe-menina.webp')
        } else if (idade <= 12) {
            //criança
            img.setAttribute('src', 'imagens/criançaf.webp')
        } else if (idade <= 18) {
            //adolescente
            img.setAttribute('src', 'imagens/adolescente-menina.jpeg')
        } else if (idade <= 35) {
            //adulto
            img.setAttribute('src', 'imagens/adultaf.webp')
        } else if (idade <= 50) {
            //adulto 2
            img.setAttribute('src', 'imagens/meiaidadef.jpg')
        } else { 
            //idoso
            img.setAttribute('src', 'imagens/idosa.jpg')
        }
    }
    res.innerHTML = `${genero}, de ${idade} anos`
    res.appendChild(img)
}