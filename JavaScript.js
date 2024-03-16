let user = 0;
let computer = 0;
let iteration = 0;
//Scissors button
const scissors = document.querySelector("#Scissors");
//Detects button click
scissors.addEventListener("click", function () {
    let boolean = playGame("scissors",);
    getPoints(boolean);
    iteration++;
    checkIteration(computer, user, iteration);
});
//Rock button
const rock = document.querySelector("#Rock");
rock.addEventListener("click", function () {
    let boolean = playGame("rock",);
    getPoints(boolean);
    iteration++;
    checkIteration(computer, user, iteration);
});
//Paper button
const paper = document.querySelector("#Paper");
paper.addEventListener("click", function () {
    let boolean = playGame("paper",);
    getPoints(boolean);
    iteration++;
    checkIteration(computer, user, iteration);
});
/**
 * Plays the game
 * @param {String} userPick 
 * @returns {Boolean} Win / Lose
 */
function playGame(userPick) {
    let computer;
    let result = 0;
    computer = getComputerChoice();
    result = playRound(userPick, computer);
    if (result === 1) {
        return false;
    } else if (result === -1) {
        return true;
    } else {
        return null;
    }
}
/**
 * Generates a random number that will be assigned
 * to one of the options
 * @returns {String} Computer pick
 */
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random(3) * 3);
    console.log("Valor generat:" + computerChoice);
    switch (computerChoice) {
        case 0:
            return computerChoice = "rock";
        case 1:
            return computerChoice = "paper";
        case 2:
            return computerChoice = "scissors";
    }
}
/**
 * Compares both picks and returns the winner
 * @param {int} userPick 
 * @param {int} computerPick 
 * @returns {int} Winner, 1 - win, -1 - lose, 0 - tie
 */
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
/**
 * Gives the point to the winner
 * @param {boolean} boolean true - lose, false - win, null - tie
 */
function getPoints(boolean) {
    if (boolean === true) {
        computer++;
    } else if (boolean === false) {
        user++;
    }
    displayScore(user, computer);
}
/**
 * Displays the user & computer score on the web
 * @param {int} user User rounds won
 * @param {int} computer Computer rounds won
 */
function displayScore(user, computer) {
    const result = document.querySelector("#currentScore");
    //Resets the output so it doesn't stack
    result.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "User " + user + " - " + computer + " Computer";
    result.appendChild(h2);
}
/**
 * Checks on which round are we on and 
 * @param {int} computer Computer rounds won
 * @param {int} user User rounds won
 * @param {int} iteration Round we are on
 */
function checkIteration(computer, user, iteration) {
    if (iteration === 5) {
        testResult(computer, user, iteration);
        reset();
    } else {
        //Resets the outpud after an ended game
        testResult(computer, user, iteration);
    }
}
/**
 * Outputs an informative message when the game ends (5 rounds played)
 * @param {int} computer Computer rounds won
 * @param {int} user User rounds won
 */
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
        //Resets the output after an ended game
        finalMessage.textContent = "";
    }
}
/**
 * Resets a game so it can be replayed
 */
function reset() {
    user = 0;
    computer = 0;
    result = 0;
    iteration = 0;
}