var nomeUsuario = ''; //que o usuario mude
var texto = document.querySelector('span');


while(nomeUsuario == '') {//|| nomeUsuario == null
    nomeUsuario = prompt('qual é seu nome?');
}

if(nomeUsuario == null){  //mesmo que cancelem vai aparecer 'gi'
texto.textContent = 'gi';
}else{
    texto.textContent = nomeUsuario;


}
