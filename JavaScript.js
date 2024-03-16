let resultSaved = 0;
let pointsUser = 0;
let pointsComputer = 0;
let iteration = 0;
const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", function () {
    let boolean = playGame("scissors", getComputerChoice());
    getPoints(boolean);
    iteration++;
    checkIteration();
});

const rock = document.querySelector("#Rock");
rock.addEventListener("click", function () {
    let boolean = playGame("rock", getComputerChoice());
    getPoints(boolean);
    iteration++;
    checkIteration();
});

const paper = document.querySelector("#Paper");
paper.addEventListener("click", function () {
    let boolean = playGame("paper", getComputerChoice());
    getPoints(boolean);
    iteration++;
    checkIteration();
});
function playGame(userPick) {
    let computer;
    let result = 0;
    computer = getComputerChoice();
    console.log("Computer: " + computer);
    console.log("User: " + userPick);
    result = playRound(userPick, computer);
    if (result === 1) {
        resultSaved++;
        return false;
    } else if (result === -1) {
        resultSaved--;
        return true;
    } else {
        return null;
    }
}

function getComputerChoice() {
    let numberComputer = Math.floor(Math.random(3) * 3);
    console.log("Valor generat:" + numberComputer);
    switch (numberComputer) {
        case 0:
            return numberComputer = "rock";
        case 1:
            return numberComputer = "paper";
        case 2:
            return numberComputer = "scissors";
    }
}

function playRound(userPick, computerPick) {
    const resultMessage = document.getElementById("resultMessage");
    if (userPick === "rock" && computerPick === "scissors") {
        resultMessage.textContent = "You won!";
        return 1;
    } else if (userPick === "paper" && computerPick === "rock") {
        resultMessage.textContent = "You won!";
        return 1;
    } else if (userPick === "scissors" && computerPick === "paper") {
        resultMessage.textContent = "You won!";
        return 1;
    } else if (userPick === computerPick) {
        resultMessage.textContent = "You tied!";
        return 0;
    } else {
        resultMessage.textContent = "You lost!";
        return -1;
    }
}

function getPoints(boolean) {
    if (boolean === true) {
        pointsComputer++;
    } else if (boolean === false) {
        pointsUser++;
    }
    displayScore(pointsUser, pointsComputer);
}
function displayScore(user, computer) {
    const result = document.querySelector("#result");
    result.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "User " + user + " - " + computer + " Computer";
    result.appendChild(h2);
}
function checkIteration() {
    if (iteration === 5) {
        reset();
    } else {
        testResult(result);
    }
}
function testResult(result) {
    if (result > 0) {
        console.log("Congrats you won the game!")
    } else if (result < 0) {
        console.log("Unfortunately you lost the game :(")
    } else {
        console.log("That was close, but ended on a tie")
    }
}
function reset() {
    pointsUser = 0;
    pointsComputer = 0;
    result = 0;
    iteration = 0;
}