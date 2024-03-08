var nomeUsuario = '';
var texto = document.querySelector('span');


while(nomeUsuario == '') {//|| nomeUsuario == null
    nomeUsuario = prompt('qual é seu nome?');
}

if(nomeUsuario == null){
texto.textContent = 'gi';
}else{
    texto.textContent = nomeUsuario;


}
