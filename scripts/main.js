window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})
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