var nomeUsuario = '';
var texto = document.querySelector('span');


while(nomeUsuario == '') {
    nomeUsuario = prompt('qual é seu nome?');
}
texto.textContent = nomeUsuario;
