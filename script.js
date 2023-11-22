function getComputerChoice(){
    min = Math.ceil(1);
    max= Math.floor(3);

    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (randomNumber === 1){
        return "Rock";
    } else if (randomNumber === 2){
        return "Scissors";
    } else {
        return "Paper";
    }
}

function playerSelection(){
    let promptPlayer = prompt("Rock, Paper, or Scissors?");
    let playerChoice = promptPlayer.toLowerCase();

    return playerChoice;
}


