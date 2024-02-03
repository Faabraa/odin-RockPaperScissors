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
let computer = getComputerChoice();
let user = getUserSelection();
console.log("Computer: "+computer);
console.log("User: " + user);
let result = playRound(user, computer);
function playRound(userPick, computerPick)    {
    if (userPick === "rock" && computerPick === "scissors") {
        console.log("You won!");
    } else if (userPick === "paper" && computerPick === "rock") {
        console.log("You won!");
    } else if (userPick === "scissors" && computerPick === "paper") {
        console.log("You won");
    } else if (userPick === computerPick)   {
        console.log("You tied");
    } else {
        console.log("You lost");
    }
}