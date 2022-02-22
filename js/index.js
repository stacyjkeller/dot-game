// Stacy Keller - Dot Game - February 2022

// Declare global variables
const scoreBox = document.getElementById('score-box');
const toggleButton = document.getElementById('toggle-button');
const speedControl = document.getElementById('speed-control');
const speedOutput = document.getElementById('speed-output');
const gameBoard = document.getElementById('board');
const startScore = 0;
let score = 0;
let isPlaying = false;
let interval;

// Randomizer
const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

// Initialize Game
const init = () => {
  setScore(startScore);
  setSpeed();
  toggleButton.addEventListener('click', toggleGame);
  speedControl.addEventListener('input', setSpeed);
}

window.onload = function() {
  init();
};

// Score
const setScore = (value) => {
  score += value;
  scoreBox.innerHTML = score;
};

const getScore = (size) => {
  return 11 - (size * 0.1);
}

// Speed
const setSpeed = () => {
  speedOutput.innerHTML = 'speed ' + getSpeed();
};

const getSpeed = () => {
  return parseInt(speedControl.value, 10);
};

// Toggle Game State
const toggleGame = () => {
  if (!isPlaying) {
    isPlaying = true;
    toggleButton.innerHTML = 'Pause';
    toggleButton.classList.add('pause');
    // every second, make and animate a new dot
    interval = setInterval(function() {
      makeDot();
      animateDots();
    }, 1000);
    console.log('playing');
  } else {
    isPlaying = false;
    toggleButton.innerHTML = 'Play';
    toggleButton.classList.remove('pause');
    stopDotsAnimation();
    clearInterval(interval);
    console.log('paused');
  }
}

// Dots
// Make the dot
const makeDot = () => {
  const dropLength = getRandomNumber(10, gameBoard.offsetWidth - 100);
  const dotSize = getRandomNumber(10, 100);
  const dotPoints = getScore(dotSize);
  const animationSpeed = 600 / getSpeed() * 1000;
  const dotStyles = 'width:' + dotSize + 'px; height:' + dotSize + 'px; left:' + dropLength + 'px; animation-duration:' + animationSpeed + 'ms;';
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.setAttribute('style', dotStyles);
  dot.setAttribute('data-points', dotPoints);
  dot.setAttribute('data-size', dotSize);
  dot.addEventListener('click', clickDot);
  gameBoard.append(dot);
};

// Animate the dots
const animateDots = () => {
  const dots = document.getElementsByClassName('dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.add('falling');
    dots[i].style.pointerEvents = 'auto';
    let posY = parseInt(dots[i].offsetTop, 10);
    if (posY > gameBoard.offsetHeight) {
      removeDot(dots[i]);
    }
  }
};

// Stop dots animation
const stopDotsAnimation = () => {
  const dots = document.getElementsByClassName('dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('falling');
    dots[i].style.pointerEvents = 'none';
  }
};

// Remove dot from DOM
const removeDot = (dot) => {
  dot.parentNode.removeChild(dot);
}

// Dot gets clicked
function clickDot() {
  let fallingDot = this;
  fallingDot.classList.add('clicked');
  dotPoints = parseInt(fallingDot.getAttribute('data-points'), 10);

  if (isPlaying) {
    setTimeout(function() {
      setScore(dotPoints);
      console.log('points: ', dotPoints);
      removeDot(fallingDot);
    }, 200);
  }
}


