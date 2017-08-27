var inquirer = require("inquirer");

var cards = [];

cardCount = 0;

module.exports = basicCard;

function basicCard(front, back){
	this.front = front;
	this.back = back;
	this.readFront = function(){
		console.log(this.front);
	}
	this.readBack = function(){
		console.log(this.back);
	}
}

var georgeWash = new basicCard("Who is the first president of the United States?", "George Washington");

var johnAdams = new basicCard("Who is the second president of the United States?", "John Adams");

cards.push(georgeWash);
cards.push(johnAdams);

var studyCards = function(){
	if (cardCount < cards.length){
		inquirer.prompt([
		{
			name: "card",
			message: cards[cardCount].front + " Press 'Enter' to Flip Card."
		}	


			]).then(function(response){
			console.log(cards[cardCount].back);
		cardCount++;
		studyCards();
	});
	}
}
studyCards();