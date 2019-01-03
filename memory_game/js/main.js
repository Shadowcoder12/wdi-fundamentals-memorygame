var cardsInPlay = [];
var cards = ["queen","queen", "king", "king"];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("YOU HAVE FOUND A MATCH!!");
	}
	else {
		alert("Sorry, try again!")};
};


console.log("User flipped " + cardOne);

console.log("User flipped " + cardTwo);
