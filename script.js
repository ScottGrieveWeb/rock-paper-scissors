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
                alert("You draw! Rock ties with Rock.");
                break;
            case "paper":
                alert("You lose! Paper beats Rock.");
                break;
            case "scissors":
                alert("You win! Rock beats Scissors.");
                break;
        }
    } else if (playerAnswer == "paper") {
        switch(computerSelection){
            case "rock":
                alert("You win! Paper beats Rock.");
                break;
            case "paper":
                alert("You draw! Paper ties with Paper.");
                break;
            case "scissors":
                alert("You lose! Paper loses to Scissors.");
                break;
        }
    } else if (playerAnswer == "scissors") {
        switch(computerSelection){
            case "rock":
                alert("You lose! Scissors loses to Rock.");
                break;
            case "paper":
                alert("You win! Scissors beat Paper.");
                break;
            case "scissors":
                alert("You draw! Scissors ties with Scissors.");
                break;
        }
    }
}

// const playerAnswer = playerSelection();
// const computerSelection = getComputerChoice();
// console.log(playerAnswer);
// console.log(computerSelection);
// console.log(playRound(playerAnswer, computerSelection));

