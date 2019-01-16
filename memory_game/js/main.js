// Creates an array that stores all card objects
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage:"images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage:"images/king-of-diamonds.png"
},

];

// Creates an array that stores the cards in play
var cardsInPlay = [];

/* Function that checks if two cards match and if two cards
 are played */ 
var checkForMatch = function () {
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("YOU HAVE FOUND A MATCH!!");
		}
		else {
			alert("Sorry, try again!")};
		};
	};
	// function that mimics a user picking a card
	var flipCard = function (){
		var cardId = this.getAttribute("data-id");
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		cardsInPlay.push(cards[cardId].rank);
		this.setAttribute('src', cards[cardId].cardImage);
		checkForMatch();
	};

	// creates the board 
	var createBoard = function(){
		var boardGame = document.getElementById("game-board");
		for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement("img");
			cardElement.setAttribute("src", "images/back.png");
			cardElement.setAttribute("data-id", i);
			cardElement.addEventListener("click", flipCard); 
			boardGame.appendChild(cardElement); 
		}
	};

	createBoard();






