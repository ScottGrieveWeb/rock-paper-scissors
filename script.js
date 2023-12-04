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

const resultContainer = document.querySelector("#container");
let resultText = document.createElement("h1");
resultContainer.appendChild(resultText);

function playRound(playerAnswer, computerSelection) {


    resultText.innerHTML = "";

    if (playerAnswer == "rock") {
        switch(computerSelection){
            case "rock":
                resultText.innerHTML = "You draw! Rock ties with Rock.";
                result = "draw";
                break;
            case "paper":
                resultText.innerHTML = "You lose! Paper beats Rock.";
                result = "lose";
                break;
            case "scissors":
                resultText.innerHTML = "You win! Rock beats Scissors.";
                result = "win";
                break;
        }
    } else if (playerAnswer == "paper") {
        switch(computerSelection){
            case "rock":
                resultText.innerHTML = "You win! Paper beats Rock.";
                result = "win";
                break;
            case "paper":
                resultText.innerHTML = "You draw! Paper ties with Paper.";
                result = "draw";
                break;
            case "scissors":
                resultText.innerHTML = "You lose! Paper loses to Scissors.";
                result = "lose";
                break;
        }
    } else if (playerAnswer == "scissors") {
        switch(computerSelection){
            case "rock":
                resultText.innerHTML = "You lose! Scissors loses to Rock.";
                result = "lose";
                break;
            case "paper":
                resultText.innerHTML = "You win! Scissors beat Paper.";
                result = "win";
                break;
            case "scissors":
                resultText.innerHTML = "You draw! Scissors ties with Scissors.";
                result = "draw";
                break;
        }
    } else {
        console.log("That is an invalid choice, please refresh and start the game again!");
    }
}


let scoreTracker = 0;
let userScore = 0;
let compScore = 0;


const scoreDiv = document.getElementById("score");

let userScoreDisplay = document.createElement("h3");
userScoreDisplay.innerHTML = `You: ${userScore}`;
scoreDiv.append(userScoreDisplay);

let compScoreDisplay = document.createElement("h3");
compScoreDisplay.innerHTML = `Computer: ${compScore}`;
scoreDiv.append(compScoreDisplay);


const rockBtn = document.getElementById("rock");


rockBtn.addEventListener('click', rockFunc);

function rockFunc(){
    const computerSelection = getComputerChoice();

   playRound("rock", computerSelection);
   
   scoreTracker++;

   if (result === "win"){
    userScore++;
    userScoreDisplay.innerHTML = `You: ${userScore}`;
   } else if (result === "lose") {
    compScore++;
    compScoreDisplay.innerHTML = `Computer: ${compScore}`;
   }

   if (scoreTracker === 5){
    if (userScore > compScore){
        if(!alert(`You win! You beat the computer ${userScore} to ${compScore}`)){window.location.reload();}
    } else if (userScore < compScore){
        if(!alert(`You lose! The computer beat you ${compScore} to ${userScore}`)){window.location.reload();}
    } else {
        if(!alert(`It's a draw! Your ${userScore} ties with the computer's ${compScore}`)){window.location.reload();}
    }

}

}


const paperBtn = document.getElementById("paper");



paperBtn.addEventListener('click', paperFunc);

function paperFunc(){
    const computerSelection = getComputerChoice();

   playRound("paper", computerSelection);

   scoreTracker++;

   if (result === "win"){
    userScore++;
    userScoreDisplay.innerHTML = `You: ${userScore}`;
   } else if (result === "lose") {
    compScore++;
    compScoreDisplay.innerHTML = `Computer: ${compScore}`;
   }

   if (scoreTracker === 5){
    if (userScore > compScore){
        if(!alert(`You win! You beat the computer ${userScore} to ${compScore}`)){window.location.reload();}
    } else if (userScore < compScore){
        if(!alert(`You lose! The computer beat you ${compScore} to ${userScore}`)){window.location.reload();}
    } else {
        if(!alert(`It's a draw! Your ${userScore} ties with the computer's ${compScore}`)){window.location.reload();}
    }

}
}


const scissorsBtn = document.getElementById("scissors");


scissorsBtn.addEventListener('click', scissorsFunc);

function scissorsFunc(){
    const computerSelection = getComputerChoice();

   playRound("scissors", computerSelection);

   scoreTracker++;

   if (result === "win"){
    userScore++;
    userScoreDisplay.innerHTML = `You: ${userScore}`;
   } else if (result === "lose") {
    compScore++;
   }

   if (scoreTracker === 5){
    if (userScore > compScore){
        if(!alert(`You win! You beat the computer ${userScore} to ${compScore}`)){window.location.reload();}
    } else if (userScore < compScore){
        if(!alert(`You lose! The computer beat you ${compScore} to ${userScore}`)){window.location.reload();}
    } else {
        if(!alert(`It's a draw! Your ${userScore} ties with the computer's ${compScore}`)){window.location.reload();}
    }

}
}



