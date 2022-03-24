window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})

var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var deck = [];
var playerHand = document.querySelector('#player-hand');
var dealerHand = document.querySelector('#dealer-hand');
var deal = document.querySelector('#deal-button');
var hit = document.querySelector('#hit-button');
var stand = document.querySelector('#stand-button');
var playAgain = document.querySelector('#again-button');
var names = document.querySelectorAll('.player-name2');
var initialPlayerHand = document.createElement('img');
var initialDealerHand = document.createElement('img');
var dealerHandList = [];
var playerHandList = [];
var playerPoints = 0;
var dealerPoints = 0;
var playerScore = 0;
var dealerScore = 0;
var cardAmount = 52;


function buildDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 1; j < 14; j++) {
      var card = {};
      card.rank = j
      card.suit = suits[i]
      card.img = `images/${j}_of_${suits[i]}.png`
      deck.push(card)
    }
  }
}


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}


function dealDeck(){
  let playerCard1 = deck.pop();
  let playerCard2 = deck.pop();
  playerHandList.push(playerCard1);
  playerHandList.push(playerCard2);

  let dealerCard1 = deck.pop();
  let dealerCard2 = deck.pop();
  dealerHandList.push(dealerCard1);
  dealerHandList.push(dealerCard2);

  for(i=0 ; i < playerHandList.length ; i++){
    let initialPlayerHand = document.createElement('img');
    initialPlayerHand.src = playerHandList[i].img;
    playerHand.appendChild(initialPlayerHand);
  }

  for(i=0 ; i < dealerHandList.length ; i++){
    let initialDealerHand = document.createElement('img');
    initialDealerHand.src = dealerHandList[i].img;
    dealerHand.appendChild(initialDealerHand);
  }

  cardAmount -= 4;
  cardsLeft.innerHTML = cardAmount

}

buildDeck();
shuffleArray(deck);


deal.addEventListener('click', ()=>{
let message = document.querySelector('.message');
message.textContent = "";
hit.setAttribute('class', '');
stand.setAttribute('class', '');
names[0].setAttribute('class', 'player-name2');
names[1].setAttribute('class', 'player-name2');

dealDeck();

deal.setAttribute('class', 'none');

})





stand.addEventListener('click', ()=>{
  let message = document.querySelector('.message');

  while (dealerPoints < 18 || dealerPoints <= playerPoints) {
    hitDealer();
    calculateDealerPoints();
  }
  
  if (dealerPoints < playerPoints && dealerPoints < 22) {
    message.textContent = "You Win!";
    playerScore++
  } else if (dealerPoints > playerPoints && dealerPoints < 22) {
    message.textContent = "Dealer Wins!";
    dealerScore++
  } else if (dealerPoints === 21 && playerPoints === 21) {
    message.textContent = "Draw!";
  }
  dealDeck();
  

})