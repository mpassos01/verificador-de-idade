function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique a data e tente novamente!');
    }
    else { 
        var fsex = document.getElementsByName('radsex');
        var idade = ano - fAno.value;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) { 
            genero = 'Homem';
            if(idade >=0 && idade < 5) {
                //criança
                img.setAttribute('src', 'imagens/homem-bb.png');
            } else if(idade >=5 && idade <12) {
                //Jovem
                img.setAttribute('src', 'imagens/menino.png');
            } else if (idade < 21) {
                //adulto
                img.setAttribute('src', 'imagens/homem-jovem.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png');
            }
            else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png');
            }

        } else if (fsex[1].checked){
            genero = 'Mulher';
            if(idade >=0 && idade < 5) {
                //criança
                img.setAttribute('src', 'imagens/mulher-bb.png');
            } else if(idade >=5 && idade <12) {
                //Jovem
                img.setAttribute('src', 'imagens/menina.png');
            } else if (idade < 21) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-jovem.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png');
            }
            else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png');
            }
        }

        img.style.textAlign = 'Center';
        res.style.textAlign = 'Center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.\n`;
        res.appendChild(img);
    }

}