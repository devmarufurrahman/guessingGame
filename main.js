"use strick";

//element selector
const playAgain = document.querySelector(".playAgain");
const correctAns = document.querySelector(".correctAns");
const inputNumber = document.querySelector(".inputNumber");
const check = document.querySelector(".check");
const guessingText = document.querySelector(".guessingText");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");

// special variable
let SECRET_NUMBER = Math.trunc(Math.random() * 50 + 1);
console.log(SECRET_NUMBER);
let SCORE = 20;
let HIGH_SCORE = 0;

// guessing text fn
function displayGuessingText(text) {
	guessingText.textContent = text;
}

//check the number
check.addEventListener("click", function (e) {
	let numberInput = Number(inputNumber.value);
	inputNumber.value = "";
	// when there is no input
	if (!numberInput) displayGuessingText("Input a valid number");
	// when player wins
	else if (numberInput === SECRET_NUMBER) {
		displayGuessingText("You are win😊");
		correctAns.textContent = SECRET_NUMBER;
		console.log(SECRET_NUMBER);

		// when high score
		if (SCORE > HIGH_SCORE) {
			HIGH_SCORE = SCORE;
			highScore.textContent = HIGH_SCORE;
		}
	}

	// when player loss
	else if (numberInput !== SECRET_NUMBER) {
		if (SCORE > 1) {
			displayGuessingText(numberInput > SECRET_NUMBER ? "Too High" : "Too Low");
			SCORE--;
			score.textContent = SCORE;
		} else {
			displayGuessingText("Game Over!!");
			score.textContent = 0;
		}
	}
});

//play again
playAgain.addEventListener("click", function () {
	SCORE = 20;
	score.textContent = SCORE;
	let SECRET_NUMBER = Math.trunc(Math.random() * 50 + 1);
	displayGuessingText("Start guessing....");
	correctAns.textContent = "?";
	inputNumber.value = "";
});
