/* seleccionamos los elementos de HTML */
const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const gameOver = document.querySelector(".gameOver");
const musicStarGame = new Audio("./musica/musicaStart.mp3");
const shootGame = new Audio("./musica/scifi002.mp3");

//Función que ejecuta el juego
const startGame = () => {
  //Creamos las variables con los valores iniciales del juego
  let result = 0; //0 puntos
  let hitPosition; //Posición donde está el topo
  let currentTime = 15; //Tiempo máximo de juego en segundos
  let timerId = null;

  /* Creamos el topo */
  const mole = document.createElement("div");
  mole.innerHTML = `
    <img class="mole" src="./images/aliens/01.svg" >
`;

// Ponemos el topo en un agujero y guardamos la posición
  const randomSquare = () => {
    let randomSquare = squares[Math.floor(Math.random() * 9)]; // Seleccionamos el proximo agujero donde va a salir el topo
    console.log(randomSquare)
    randomSquare.appendChild(mole); //Ponemos al topo en ese agujero
    console.log(`estoy en ${randomSquare.id}`); // Comprobamos en qué cuadrado estamos
    hitPosition = randomSquare.id; // Guardamos externamente en qué posición está el topo
  }

  // Función para calcular el tiempo en el que salen los topos
  const getRandom = (min, max) => {
    return (max - min) + min;
  }
  // console.log(getRandom(500, 1000))

  /* Creamos la función para que el topo se mueva a los segundos que queremos */
  function moveMole() {
    timerId = setInterval(randomSquare, getRandom(500, 1000)); //En este caso cada 1 segundo (1000)
  }
  //Movemos los topos por el tablero
  moveMole();

  //Escuchamos si el usuario hace click en algún agujero que para ello realizamos un recorrido por todos los agujeros
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      //Si el usuario ha dado click en el agujero donde está el top
      if (square.hasChildNodes()){
        if (square.id == hitPosition) {
          square.firstChild.innerHTML = `
          <img class="mole" src="./images/aliens/08.svg" >
      `;
          if (result >= 5) {
            square.firstChild.innerHTML = `
          <img class="mole" src="./images/aliens/04.svg" >
      `;
          }
          shootGame.play();
          result++; //Sumamos un punto
          score.textContent = result;
          hitPosition = null; //Cambiamos la posición del topo (por eso le damos el valor de null para que no pise)
          square.removeChild(mole); //Eliminamos al topo de ese agujero
        }
      }
    });
  });
  

  /* Realizamos la cuenta atrás del contador del juego*/
  function countDown() {
    currentTime--; //Elimina 1 unidad
    timeLeft.textContent = currentTime;
    if (currentTime == 1) {
      clearInterval(timerId);
    }
    /* Hacemos que cuando el contador llegue a 0 se muestre el cartel de game over */
    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      /* Añadimos etiquetas para que indique la puntuación final del juego */
      gameOver.innerHTML = `
        <div class="orden--gameOver">
        <h2>GAME OVER</h2>
        <h5 class="caja">Final score: ${result}</h5>
        </div>
        `;
    }
    
  }

  // Invocamos la función de cuenta atrás haciendo que decrezca segundo a segundo
  let countDownTimerId = setInterval(countDown, 1000);
};

//Al hacer click en start, se ejecuta el juego
document.getElementById("btn-start").addEventListener("click", () => {
  startGame();
  musicStarGame.play();
  setTimeout(() => {
    musicStarGame.pause();
  }, 15000);
});

