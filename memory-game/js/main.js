let cards = [
{		
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
}	
}
function flipCard(cardID){
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
}
	console.log("Suit: " + cards[cardID].suit);
	console.log("Image filename: " + cards[cardID].cardImage);
}
flipCard(0);
flipCard(2);
