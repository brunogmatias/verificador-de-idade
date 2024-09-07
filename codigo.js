function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var txtp = document.getElementById('txtp')
    var img = document.createElement('img')
        img.setAttribute('id','foto')
    
    
        
    if(fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 18){
                //criança
                img.setAttribute('src','imagens/h.crianca.png')
            }else if(idade > 18 && idade < 25){
                //jovem
                img.setAttribute('src','imagens/j.homem.png')
            }else if(idade > 25 && idade < 50){
                //adulto
                img.setAttribute('src','imagens/homem40.png')
            }else if(idade > 50 && idade < 110){
                //idoso
                img.setAttribute('src','imagens/idoso.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 18){
                //criança
                img.setAttribute('src','imagens/m.crianca.png')
            }else if(idade > 18 && idade < 25){
                //jovem
                img.setAttribute('src','imagens/j.mulher.png')
            }else if(idade > 25 && idade < 50){
                //adulto
                img.setAttribute('src','imagens/mulher40.png')
            }else if(idade > 50 && idade < 110){
                //idoso
                img.setAttribute('src','imagens/idosa.png')
            }
        }       
}
    
    if(Number(fano.value) == 0 || Number(fano.value) == ano){
        window.alert('Error: adicone o ano de nascimento!')
    }else{
    txtp.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
    res.appendChild(img)
}
}