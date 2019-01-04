var cards = ["queen","queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("YOU HAVE FOUND A MATCH!!");
		}
		else {
			alert("Sorry, try again!")};
		};
	};
	var flipCard = function (cardId){
		console.log("User flipped " + cards[cardId]);
		cardsInPlay.push(cards[cardId]);
		checkForMatch();
	};






