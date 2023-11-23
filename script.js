function getComputerChoice(){
    min = Math.ceil(1);
    max= Math.floor(3);

    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (randomNumber === 1){
        return "rock";
    } else if (randomNumber === 2){
        return "scissors";
    } else {
        return "paper";
    }
}

function playerSelection(){
    let promptPlayer = prompt("Rock, Paper, or Scissors?");
    let playerChoice = promptPlayer.toLowerCase();

    return playerChoice;
}

function playRound(playerAnswer, computerSelection) {
    if (playerAnswer == "rock") {
        switch(computerSelection){
            case "rock":
                console.log("You draw! Rock ties with Rock.");
                result = "draw";
                break;
            case "paper":
                console.log("You lose! Paper beats Rock.");
                result = "lose";
                break;
            case "scissors":
                console.log("You win! Rock beats Scissors.");
                result = "win";
                break;
        }
    } else if (playerAnswer == "paper") {
        switch(computerSelection){
            case "rock":
                console.log("You win! Paper beats Rock.");
                result = "win";
                break;
            case "paper":
                console.log("You draw! Paper ties with Paper.");
                result = "draw";
                break;
            case "scissors":
                console.log("You lose! Paper loses to Scissors.");
                result = "lose";
                break;
        }
    } else if (playerAnswer == "scissors") {
        switch(computerSelection){
            case "rock":
                console.log("You lose! Scissors loses to Rock.");
                result = "lose";
                break;
            case "paper":
                console.log("You win! Scissors beat Paper.");
                result = "win";
                break;
            case "scissors":
                console.log("You draw! Scissors ties with Scissors.");
                result = "draw";
                break;
        }
    } else {
        console.log("That is an invalid choice, please refresh and start the game again!");
    }
}

// const playerAnswer = playerSelection();
// const computerSelection = getComputerChoice();
// console.log(playerAnswer);
// console.log(computerSelection);
// console.log(playRound(playerAnswer, computerSelection));

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerAnswer = playerSelection();
        const computerSelection = getComputerChoice();

        let currentRound = playRound(playerAnswer, computerSelection);

         console.log(currentRound);
        //  console.log(result);

        if (result === "win"){
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        }

        // console.log(playerScore);
        // console.log(computerScore);

    }
}

console.log(game());


