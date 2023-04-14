function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var newdate = new Date()
var hora = newdate.getHours()
msg.innerHTML = `São exatamente, ${hora} Horas`
if (hora >= 6 && hora < 12){
    img.src = 'manha.png'
    document.body.style.background = '#fe8859'
    msg.innerHTML += '<br>Bom dia!'

} else if (hora >= 12 && hora <18){
    img.src = 'tarde.png'
    document.body.style.background = '#cd4d02'
    msg.innerHTML += '<br>Boa tarde!'

} else if (hora >=18 && hora <24){
    img.src = 'noite.png'
    document.body.style.background = '#0d1023'
    msg.innerHTML += '<br>Boa noite!'

} else {
    img.src = 'manha.png'
    msg.innerHTML += '<br>Boa madrugada!'
}
}