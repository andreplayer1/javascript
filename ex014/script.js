function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var newdate = new Date()
var hora = newdate.getHours()
msg.innerHTML = `São exatamente, ${hora} Horas`
if (hora >= 6 && hora < 12){
    img.src = 'manha.png' 

} else if (hora >= 12 && hora <18){
    img.src = 'tarde.png'

} else if (hora >=18 && hora <24){
    img.src = 'noite.png'

} else {
    img.src = 'manha.png'
}
}