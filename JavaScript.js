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
function playGame(userPick) {
    let computer;
    let result = 0;
    let pointsUser = 0;
    let pointsComputer = 0;
    for (let i = 0; i < 5; i++) {
        computer = getComputerChoice();
        console.log("Computer: " + computer);
        console.log("User: " + userPick);
        result = playRound(userPick, computer);
        if (result === 1) {
            pointsUser++;
        } else if (result === -1) {
            pointsComputer++;
        }
        displayScore(pointsUser, pointsComputer);
    }
    testResult(resultSaved)
}
function testResult(Result) {
    if (Result > 0) {
        console.log("Congrats you won the game!")
    } else if (Result < 0) {
        console.log("Unfortunately you lost the game :(")
    } else {
        console.log("That was close, but ended on a tie")
    }
}
function displayScore(user, computer)  {
    const result = document.querySelector("#result");
    result.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "User " + user + " - " + computer + " Computer";
    result.appendChild(h2);
}
const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", function () {
    playGame("scissors");
});

const rock = document.querySelector("#Rock");
rock.addEventListener("click", function () {
    playGame("rock");
});
const paper = document.querySelector("#Paper");
paper.addEventListener("click", function () {
    playGame("paper");
});