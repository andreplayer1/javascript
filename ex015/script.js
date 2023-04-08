function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
    }if (fsex[0].checked){
    genero = `Masculino`
    }else if(fsex[1].checked){
        genero = `Feminino`
    }
    res.innerHTML = `Idade ${idade}<br>Genero, ${genero}`
}