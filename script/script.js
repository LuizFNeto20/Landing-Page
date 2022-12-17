let dias = document.querySelector('#dias');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');

const data = "01 jan 2023"

function countDown() {
    const evento = new Date(data);

    const hoje = new Date();

    const segTotal = (evento - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dias.innerHTML = formatTempo(finalDias);
    horas.innerHTML = formatTempo(finalHoras);
    minutos.innerHTML = formatTempo(finalMinutos);
    segundos.innerHTML = formatTempo(finalSegundos);
}

function formatTempo (a) {
    return a < 10 && a >= 0 ? `0${a}` : a;
}

setInterval(countDown, 1000);