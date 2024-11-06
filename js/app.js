const punishments = document.getElementById("pun1")
const upunishments = document.getElementById("pun2")
const mainText = document.getElementById("mainText")
const buttonDiv = document.getElementById("buttondiv")
const restartButton = document.getElementById("restartButton")

console.log(punishments, upunishments, mainText)

const punList = ["No Knife", "Wet Socks", "1 Hand", "Drink Salt Water", "Tape Fingers", "No Thumb", "10 Minutes Left", "Random Oven Heat", "No Spatula", "Mix the Spices"]
const upunList = ["Served Cold", "Cut into Pieces", "Blended Food"]

var num;
var pun;
var uPun;

console.log("a")

function randNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function runPun() {
    num = randNum(punList.length - 1, 0);
    pun = punList[num];
    mainText.style.display = 'flex';
    mainText.innerHTML = "Your punishment is: " + pun;
    buttonDiv.style.display = "none";
    restartButton.style.display = "flex";
}

function runUPun() {
    num = randNum(upunList.length - 1, 0);
    uPun = upunList[num];
    mainText.style.display = 'flex';
    mainText.innerHTML = "The ULTRA Punishment is: " + uPun;
    buttonDiv.style.display = "none";
    restartButton.style.display = "flex";
}

function back() {
    mainText.style.display = 'none';
    buttonDiv.style.display = 'flex';
    restartButton.style.display = 'none';
}