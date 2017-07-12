
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = [0];
var cardTwo = [1];
var cardThree = [2];
var cardFour = [3];

//Now we'll want to add this second card to the cardsInPlay array.
cardsInPlay.push('cardOne', 'cardTwo');
cardsInPlay;


console.log("User flipped queen");
console.log ("User flipped king");

//Now we'll want to add logic that checks for equality between the two cards in the cardsInPlay array.
//If values are equal, execute an alert with the message "You found a match!"
//If values are not equal, execute an alert with the message "Sorry, try again."

if (cardsInPlay.length === 2) {
alert("You found a match!");
if (cardsInPlay[0] = cardsInPlay[1]) {
alert("Sorry, try again");
}
}


