module.exports = clozeCard;

var cards = [];

var inquirer = require("inquirer");

var cardCount = 0;

function clozeCard (text, cloze){
	this.text = cloze + text;
	this.cloze = cloze;
	this.partial = text;

}
//Sentence Completion
clozeCard.prototype.full = function(){
	clozeAnswer = this.cloze;
	clozeText = this.partial;

	clozeText = clozeText.replace("...", clozeAnswer);



	console.log(clozeText);


}

var georgeWash = new clozeCard("...is the first president of the U.S", "George Washington");

var johnAdams = new clozeCard("...is the second president of the U.S", "John Adams");

cards.push(georgeWash);
cards.push(johnAdams);
// console.log(cards);

var studyCards = function(){
	if (cardCount < cards.length){
		inquirer.prompt([
		{
			name: "partial",
			message: cards[cardCount].partial
		}

			]).then(function(response){
			if (response.partial === cards[cardCount].cloze){
				console.log("Correct");
				cardCount++;
				studyCards();
			}
			else {
				console.log("Incorrect");
				console.log(cards[cardCount].text);
				cardCount++;
				studyCards();
			}
		});
	}
}
studyCards();