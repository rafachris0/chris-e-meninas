var nomeUsuario = '';
var texto = document.querySelector('span');


while(nomeUsuario == ''|| nomeUsuario == null) {
    nomeUsuario = prompt('qual é seu nome?');
}
texto.textContent = nomeUsuario;
