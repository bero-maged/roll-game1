

const roll =document.querySelector('.btn--roll')
const hold =document.querySelector('.btn--hold')
const btnnew =document.querySelector('.btn--new')

let secondscore=document.querySelector('#score--1')
let firstscore=document.querySelector('#score--0')

let diceimg =document.querySelector('.dice')

let player1 =document.querySelector('.player--0')
let player2 =document.querySelector('.player--1')

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');




 
let scores, currentscore, activeplayer, playing;

const init=function(){
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  diceimg.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;
  firstscore.textContent=0;
  secondscore.textContent=0;

  currentscore=0;
  activeplayer=0;
  scores = [0, 0];
  playing = true;

  player1.classList.add('player--active')
  player2.classList.remove('player--active')

}
init()
const switchplayer = function(){ document.getElementById(`current--${activeplayer}`).textContent=0
currentscore=0
activeplayer=activeplayer===0?1:0;
document.getElementById(`current--${activeplayer}`).textContent=currentscore
player1.classList.toggle('player--active')
player2.classList.toggle('player--active')}

roll.addEventListener('click',function (){
  if (playing){
randomnumber=Math.trunc(Math.random()*6)+1
diceimg.src=`dice-${randomnumber
}.png`

if(randomnumber!== 1) {
    currentscore += randomnumber
 document.getElementById(`current--${activeplayer}`).textContent=currentscore

}
else{
  switchplayer()

}}
})

hold.addEventListener('click', function () {
    if (playing) {
      // 1. Add current score to active player's score
      scores[activeplayer] += currentscore;
      // scores[1] = scores[1] + currentScore
  
      document.getElementById(`score--${activeplayer}`).textContent =
        scores[activeplayer];
  
      // 2. Check if player's score is >= 100
      if (scores[activeplayer] >= 20) {
        // Finish the game
        playing = false;
        diceimg.classList.add('hidden');
  
        document
          .querySelector(`.player--${activeplayer}`)
          .classList.add('player--winner');
         document.querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active')}
      

else{switchplayer()}
      }
      })
      btnnew.addEventListener('click',init)