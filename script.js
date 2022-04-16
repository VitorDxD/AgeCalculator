function verificar(){
var data= new Date()
var ano = data.getFullYear()
var fAno = document.getElementById('textano')
var res= document.querySelector('div#res')
if(fAno.value.length == 0 || fAno.value>ano) {
    window.alert('[ERRO] Corrija os dados e tente novamente.')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = "Homem"
        if (idade >= 0 && idade <12) {
            //criança
            img.setAttribute('src', 'child2.png')
        } else if (idade<21) {
            //jovem
            img.setAttribute('src', 'teen2.png')
        } else if (idade<50) {
            //adulto
            img.setAttribute('src', 'adult2.png')
        } else {
            //idoso
            img.setAttribute('src', 'old2.png')
        }
    } else if (fsex[1].checked) {
        genero = "Mulher"
        if (idade >= 0 && idade <12) {
            //criança
            img.setAttribute('src', 'child1.png')
        } else if (idade<21) {
            //jovem
            img.setAttribute('src', 'teen1.png')
        } else if (idade<50) {
            //adulto
            img.setAttribute('src','adult1.png')
        } else {
            //idoso
            img.setAttribute('src', 'old1.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Resultado: ${genero} com ${idade} anos.`
    res.appendChild(img)
 }

}