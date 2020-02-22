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

let score = 0;

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	alert("You found a match!");
 	score++;
 	document.getElementsByTagName('h3')[0].textContent = "TOTAL SCORE: " + score;
	} else {
  	alert("Sorry, try again.");
}	
}
function flipCard(){
	cardsInPlay.push(cards[this.getAttribute('data-id')].rank);
	this.setAttribute('src', cards[this.getAttribute('data-id')].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
}
}

function resetBoard(){
	for (let i=0; i<4; i++){
		console.log(document.getElementsByTagName('img')[i]);
		document.getElementsByTagName('img')[i].setAttribute('src', "images/back.png");

	}
	cardsInPlay=[];
}

function createBoard(){
	for (let i=0; i<cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	document.getElementsByTagName('button')[0].addEventListener('click', resetBoard);
}

createBoard();
