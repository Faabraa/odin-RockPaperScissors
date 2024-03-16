let user = 0;
let computer = 0;
let iteration = 0;
const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", function () {
    let boolean = playGame("scissors",);
    getPoints(boolean);
    iteration++;
    checkIteration(computer, user);
});

const rock = document.querySelector("#Rock");
rock.addEventListener("click", function () {
    let boolean = playGame("rock",);
    getPoints(boolean);
    iteration++;
    checkIteration(computer, user);
});

const paper = document.querySelector("#Paper");
paper.addEventListener("click", function () {
    let boolean = playGame("paper",);
    getPoints(boolean);
    iteration++;
    checkIteration(computer, user);
});
function playGame(userPick) {
    let computer;
    let result = 0;
    computer = getComputerChoice();
    console.log("Computer: " + computer);
    console.log("User: " + userPick);
    result = playRound(userPick, computer);
    if (result === 1) {
        return false;
    } else if (result === -1) {
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
    if (userPick === "rock" && computerPick === "scissors") {
        return 1;
    } else if (userPick === "paper" && computerPick === "rock") {
        return 1;
    } else if (userPick === "scissors" && computerPick === "paper") {
        return 1;
    } else if (userPick === computerPick) {
        return 0;
    } else {
        return -1;
    }
}

function getPoints(boolean) {
    if (boolean === true) {
        computer++;
    } else if (boolean === false) {
        user++;
    }
    displayScore(user, computer);
}
function displayScore(user, computer) {
    const result = document.querySelector("#currentScore");
    result.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "User " + user + " - " + computer + " Computer";
    result.appendChild(h2);
}
function checkIteration(computer, user) {
    if (iteration === 5) {
        testResult(computer, user, iteration);
        reset();
    } else {
        testResult(computer, user, iteration);
    }
}
function testResult(computer, user) {
    const finalMessage = document.getElementById("finalMessage");
    if (iteration === 5) {
        if (computer < user) {
            finalMessage.textContent = "Congrats you won the game!";
        } else if (computer > user) {
            finalMessage.textContent = "Unfortunately, you lost the game :(";
        } else if (computer === user) {
            finalMessage.textContent = "That was close, but ended in a tie";
        }
    } else {
        finalMessage.textContent = "";
    }
}
function reset() {
    user = 0;
    computer = 0;
    result = 0;
    iteration = 0;
}