let rock;
let paper;
let scissors;
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
console.log(getComputerChoice());
console.log(getUserSelection());