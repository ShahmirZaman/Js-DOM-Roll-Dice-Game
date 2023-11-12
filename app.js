const startButton = document.querySelector("#btn-start");
const startContainer = document.querySelector(".start-container");
const pNameInput1 = document.querySelector("#pname1");
const pNameInput2 = document.querySelector("#pname2");

const container = document.querySelector(".container");
const playerName1 = document.getElementById("playername1");
const playerName2 = document.getElementById("playername2");
const totalScoreP1 = document.querySelector("#totalscorep1");
const totalScoreP2 = document.querySelector("#totalscorep2");

const scoreP1 = document.getElementById("scorep1");
const scoreP2 = document.getElementById("scorep2");

const restartGameBtn = document.querySelector("#new-game-btn");
const rollDiceBtn = document.querySelector("#roll-dice-btn");
const holdBtn = document.querySelector("#hold-btn");

let diceImage = document.querySelector("#dice-img");

let pName1;
let pName2;
startButton.addEventListener("click", () => {
    pName1 = pNameInput1.value;
    pName2 = pNameInput2.value;
    startContainer.style.display = "none";
    container.style.display = "flex";
    playerName1.textContent = pName1;
    playerName2.textContent = pName2;
})
    let playerTurnDiv1 = document.querySelector(".playerturn1");
    let playerTurnH2 = document.querySelector('.turn-text1');
    let playerTurnDiv2 = document.querySelector(".playerturn2");
    let player2TurnH2 = document.querySelector('.turn-text2');
function player1TurnDiv() {
    playerTurnDiv1.style.display = "block";
    playerTurnDiv2.style.display = "none";
    playerTurnH2.textContent = `${pName1} Turn`;
    console.log(playerTurnH2.textContent);
}
function player2TurnDiv() {
    playerTurnDiv2.style.display = "block";
    playerTurnDiv1.style.display = "none";
    player2TurnH2.textContent = `${pName2} Turn`;
    console.log(player2TurnH2.textContent);
}
let player1Turn = true;
let player2Turn = false;

let currentScore1 = 0;
scoreP1.textContent = currentScore1;

let currentScore2 = 0;
scoreP2.textContent = currentScore2;

let totalScore1 = 0;
totalScoreP1.textContent = totalScore1;

let totalScore2 = 0;
totalScoreP2.textContent = totalScore2;

rollDiceBtn.addEventListener("click",rollDiceHandler);

function rollDiceHandler() {
    let rollDiceNumber = Math.ceil(Math.random() * 6);
    diceImage.style.display = "block";
    diceImage.src = `./Assets/Dice-${rollDiceNumber}.png`;
    if(player1Turn) {
        if(rollDiceNumber !== 1) {
            currentScore1 += rollDiceNumber;
            scoreP1.textContent = currentScore1;
            player1TurnDiv();
        }
        else {
            currentScore1 = 0;
            scoreP1.textContent = currentScore1;
            totalScore1 = 0;
            totalScoreP1.textContent = totalScore1;
            player1Turn = false;
            player2TurnDiv();
            player2Turn = true;
        }
    } else {
        if(rollDiceNumber !== 1) {
            currentScore2 += rollDiceNumber;
            scoreP2.textContent = currentScore2;
            player2TurnDiv();
        }
        else {
            currentScore2 = 0;
            scoreP2.textContent = currentScore2;
            totalScore2 = 0;
            totalScoreP2.textContent = totalScore2;
            player1Turn = true;
            player1TurnDiv();
            player2Turn = false;
        }
    }
}
let playerWon1 = document.querySelector(".playerwon1");
let playerWon2 = document.querySelector(".playerwon2");

holdBtn.addEventListener("click",holdHandler);

function holdHandler() {
    if(player1Turn) {
        totalScore1 = currentScore1;
        totalScoreP1.textContent = totalScore1;
        player2TurnDiv();
        if(totalScore1 >= 50) {
            playerWon1.style.display = "block";
            playerWon1.textContent = `${pName1} Won!`;
            playerTurnDiv1.style.display = "none";
            playerTurnDiv2.style.display = "none";
        }
        player1Turn = false;
        player2Turn = true;
    } else {
        totalScore2 = currentScore2;
        totalScoreP2.textContent = currentScore2;
        player1TurnDiv();
        if(totalScore2 >= 50) {
            alert("Player2 won!!!!!!!");
            playerWon2.style.display = "block";
            playerWon2.textContent = `${pName2} Won!`;
            playerTurnDiv1.style.display = "none";
            playerTurnDiv2.style.display = "none";
        }
        player2Turn = false;
        player1Turn = true;
    }
}
restartGameBtn.addEventListener("click",restartGameHandler);
function restartGameHandler() {
    currentScore1 = currentScore2 = 0;
    totalScore1 = totalScore2 = 0;
    scoreP1.textContent = scoreP2.textContent = currentScore1;
    totalScoreP1.textContent = totalScoreP2.textContent = totalScore2;
    player1Turn = true;
    player2Turn = false;
    diceImage.style.display = "none";
    startContainer.style.display = "block";
    container.style.display = "none";
    pNameInput1.value = "";
    pNameInput2.value = "";
    playerWon1.style.display = "none";
    playerWon2.style.display = "none";
}
