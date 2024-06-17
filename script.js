let activePlayer, currentScore, accumScore, playing;

const sectionPlayer0 = document.querySelector('.section-0');
const sectionPlayer1 = document.querySelector('.section-1');

const btnNewGame = document.querySelector('.newGame');
const btnRollDice = document.querySelector('.rollDice');
const btnHold = document.querySelector('.holdResult');
const imageOfDice = document.querySelector('.imageDice');

const accumScoreEl0 = document.querySelector('.accumScore--0');
const accumScoreEl1 = document.querySelector('.accumScore--1');
const currentScoreEl0 = document.querySelector('.currentScore--0');
const currentScoreEl1 = document.querySelector('.currentScore--1');


const initiate = function (){

  playing = true
  activePlayer = Math.trunc(Math.random()*2);
  currentScore = [0, 0];
  accumScore = [0, 0];

  if (activePlayer === 0) {
    sectionPlayer0.classList.add('active');
    sectionPlayer1.classList.remove('active');
    } else {
      sectionPlayer0.classList.remove('active');
      sectionPlayer1.classList.add('active');
  }
  
  document.getElementById(`accumScore--0`).textContent = 0;
  document.getElementById(`accumScore--1`).textContent = 0;
  document.getElementById(`currentScore--0`).textContent = 0;
  document.getElementById(`currentScore--1`).textContent = 0;

  document.getElementById('headerPlayer--0').textContent = "Player 1";
  document.getElementById('headerPlayer--1').textContent = "Player 2";

  imageOfDice.classList.add('hidden');

};


initiate();

btnRollDice.addEventListener('click', function(){
  
if (playing) {
  
  const dice = Math.trunc(Math.random()*6) + 1;
  imageOfDice.classList.remove('hidden');
  imageOfDice.src = `dice${dice}.png`;
  
  if (dice != 1) {
    currentScore[activePlayer] += dice;
    document.getElementById(`currentScore--${activePlayer}`).textContent = currentScore[activePlayer];
    console.log(`curr score of player ${activePlayer}: ${currentScore[activePlayer]}`);
  } else {
    currentScore[activePlayer] = 0;
    document.getElementById(`currentScore--${activePlayer}`).textContent = currentScore[activePlayer];
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    sectionPlayer0.classList.toggle('active');
    sectionPlayer1.classList.toggle('active');
    }
  }
});

btnHold.addEventListener('click', function(){

  if (playing) {

    
    accumScore[activePlayer] += currentScore[activePlayer];
    currentScore[activePlayer] = 0;
    
    document.getElementById(`currentScore--${activePlayer}`).textContent = currentScore[activePlayer];
    document.getElementById(`accumScore--${activePlayer}`).textContent = accumScore[activePlayer];
    
    if(accumScore[activePlayer] >= 100) {
      
      playing = false;
      imageOfDice.classList.add('hidden');      
      document.getElementById(`headerPlayer--${activePlayer}`).textContent = `winner!`
      
    } else {
      
      activePlayer = activePlayer === 0 ? 1 : 0 ;
      sectionPlayer0.classList.toggle('active');
      sectionPlayer1.classList.toggle('active');
    }
  }    
});

btnNewGame.addEventListener('click', function(){
  initiate();
});