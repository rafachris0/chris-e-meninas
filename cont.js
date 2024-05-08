const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');



for(let i = 0; i<botoes.length; i++) { //se 
console.log(i);
botoes[i].onclick = function(){
for (let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove('ativo');
    textos[j].classList.remove('ativa');
}
    botoes[i].classList.add('ativo');
    textos[i].classList.add('ativa');
    }
}

const contadores= document.querySelectorAll('.contador');
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date ('2024-04-30T00:00'); 
let tempoObjetivo2 = new Date ('2024-05-30T00:00'); 
let tempoObjetivo3 = new Date ('2024-06-30T00:00'); 
let tempoObjetivo4 = new Date ('2024-12-13T00:00'); 

let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

for(let i = 0;i< contadores.length; i++){
    contadores[i].textContent = CalculaTempo(tempos[i]);
}

function CalculaTempo(tempoObjetivo) {
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;

return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";

}