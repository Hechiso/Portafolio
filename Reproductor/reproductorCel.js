const audioPlayer = document.getElementById('audioPlayer');
const barra = document.getElementById('barra');
const tiempoActual = document.getElementById('tiempo-actual');
const duracionTotal = document.getElementById('duracion-total');

audioPlayer.addEventListener('loadedmetadata', function() {
    const duracionEnSegundos = Math.floor(audioPlayer.duration);
    duracionTotal.textContent = formatTime(duracionEnSegundos);
    barra.max = duracionEnSegundos;
});

audioPlayer.addEventListener('timeupdate', function() {
    const tiempo = Math.floor(audioPlayer.currentTime);
    barra.value = tiempo;
    tiempoActual.textContent = formatTime(tiempo);
});

function formatTime(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
}

