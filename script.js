
const holes = document.querySelectorAll(".hole"); 
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#timeLeft")
const scoreBoard = document.getElementsByClassName("score");

/* let lastHole;

let isFinished = false; */

// let score = 0;
let result = 0


const timeForHansTopo = () => {
    //Esta función creará el tiempo randomizado para que los Hans Topo salgan de los hoyos aleatoriamente
    //Usando el método Math.random()
}

const randomHole = () => {
    holes.forEach(hole => {
        hole.classList.remove("mole") //se remueven los topos
    })
   let randomPosition = holes[Math.floor(Math.random()*6)] //recorre aleatoriamente y multiplicar el numero de ollos y redondea, porque multiplica.
   randomPosition.classList.add("mole")
}
randomHole();

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