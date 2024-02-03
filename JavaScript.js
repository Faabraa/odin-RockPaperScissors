function getComputerChoice() {
    let numberComputer = Math.floor(Math.random(3) * 3);
    switch (numberComputer) {
        case 0:
            numberComputer = "rock";
            break;
        case 1:
            numberComputer = "paper";
            break;
        case 2:
            numberComputer = "scissors";
            break;
    }
    return numberComputer;
}
function getUserSelection() {
    let stringUser;
    while (true) {
        stringUser = prompt("What do you take? rock/paper/scissors");
        if (stringUser === "rock" || stringUser === "paper" || stringUser === "scissors") {
            break;
        } else {
            alert("Introduce an available option!");
        }
    }
    let lowerNumberUser = stringUser.toLowerCase();
    return lowerNumberUser;
}
function playRound(userPick, computerPick) {
    if (userPick === "rock" && computerPick === "scissors") {
        console.log("You won!");
        return 1;
    } else if (userPick === "paper" && computerPick === "rock") {
        console.log("You won!");
        return 1;
    } else if (userPick === "scissors" && computerPick === "paper") {
        console.log("You won");
        return 1;
    } else if (userPick === computerPick) {
        console.log("You tied");
        return 0;
    } else {
        console.log("You lost");
        return -1;
    }
}
function playGame() {
    let computer;
    let user;
    let result = 0;
    let resultSaved = 0;
    for (let i = 0; i < 5; i++) {
        computer = getComputerChoice();
        user = getUserSelection();
        console.log("Computer: " + computer);
        console.log("User: " + user);
        result = playRound(user, computer);
        if (result === 1)   {
            resultSaved++;
        } else if (result === -1)   {
            resultSaved--;
        }
    }
    testResult(resultSaved)
}
function testResult (Result)  {
    if(Result > 0)  {
        console.log("Congrats you won the game!")
    } else if (Result < 0)  {
        console.log("Unfortunately you lost the game :(")
    } else {
        console.log("That was close, but ended on a tie")
    }
}
playGame();