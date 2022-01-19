//Array de elementos con la clase hole
const holes = document.querySelectorAll(".hole"); 
//Array de elementos con la clase mole
const moles = document.querySelectorAll(".mole");

const scoreBoard = document.getElementsByClassName("score");

let lastHole;

let isFinished = false;

let score = 0;

const timeForHansTopo = () => {
    //Esta función creará el tiempo randomizado para que los Hans Topo salgan de los hoyos aleatoriamente
    //Usando el método Math.random()
}

const randomHole = () => {
    //Esta función servirá para conseguir que el tiempo de los topos sea diferente para cada agujero con respecto al anterior
}

const timeOutside = () => {
    //Esta función determina el tiempo que los topos deben estar asomados
}

const startGame = () => {
    scoreBoard.textContent = 0;
    isFinished = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 15000) 
//muestra topos aleatoriamente durante 15 segundos
}

const wack = () => {
    //Esta función sumará un punto al marcador y quitará la clase "up" del elemento clickado para ocultar al topo
}


//Con un bucle for each asignamos la función "wack" al evento "click" en cada topo
moles.forEach(mole => mole.addEventListener('click', wack));