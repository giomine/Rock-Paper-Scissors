// modal button
var button = document.querySelector("#myBtn");
var modal = document.querySelector("#myModal");
var close = document.querySelector(".close");

button.addEventListener("click", function(){
  modal.style.display = "block";
});

close.addEventListener("click", function(){
  modal.style.display = "none";
});

// our choices
var rock = document.querySelector(".two");
var paper = document.querySelector(".one");
var scissors = document.querySelector(".three");
var home = document.querySelector(".game-block");
var fightOne = document.querySelector(".fight-block-one");
var fightTwo = document.querySelector(".fight-block-two");
var fightThree = document.querySelector(".fight-block-three");
var opponentFromPaper = document.querySelectorAll(".opponent-fight-img")[0];
var opponentFromRock = document.querySelectorAll(".opponent-fight-img")[1];
var opponentFromScissors = document.querySelectorAll(".opponent-fight-img")[2];
var opponentFromPaperBorder = document.querySelectorAll(".opponent-circle")[0];
var opponentFromRockBorder = document.querySelectorAll(".opponent-circle")[1];
var opponentFromScissorsBorder = document.querySelectorAll(".opponent-circle")[2];
var nextButton = document.querySelector(".next-btn");
var winner = document.querySelector(".winner");

rock.addEventListener("click", function(){
  home.style.display = "none";
  fightTwo.style.display = "block";
  nextButton.style.display = "block";
  var randomChoice = "paper";
  var random = Math.floor(Math.random() * 3);
  if (random == 0) {
    randomChoice = "paper";
  } else if (random == 1) {
    randomChoice = "rock";
  } else {
    randomChoice = "scissors";
  } console.log(randomChoice);

  if(randomChoice == "paper") {
    opponentFromRock.setAttribute("src", "images/icon-paper.svg");
    opponentFromRockBorder.classList.add("paper-border");
    winner.innerText = "YOU LOSE";
  } else if (randomChoice == "rock"){
    opponentFromRock.setAttribute("src", "images/icon-rock.svg");
    opponentFromRockBorder.classList.add("rock-border");
    winner.innerText = "DRAW";
  } else if (randomChoice == "scissors") {
    opponentFromRock.setAttribute("src", "images/icon-scissors.svg");
    opponentFromRockBorder.classList.add("scissors-border");
    winner.innerText = "YOU WIN";
  } else {
    alert("error");
  }
});

paper.addEventListener("click", function(){
  home.style.display = "none";
  fightOne.style.display = "block";
  nextButton.style.display = "block";
  var randomChoice = "paper";
  var random = Math.floor(Math.random() * 3);
  if (random == 0) {
    randomChoice = "paper";
  } else if (random == 1) {
    randomChoice = "rock";
  } else {
    randomChoice = "scissors";
  } console.log(randomChoice);

  if(randomChoice == "paper") {
    opponentFromPaper.setAttribute("src", "images/icon-paper.svg");
    opponentFromPaperBorder.classList.add("paper-border");
    winner.innerText = "DRAW";
  } else if (randomChoice == "rock"){
    opponentFromPaper.setAttribute("src", "images/icon-rock.svg");
    opponentFromPaperBorder.classList.add("rock-border");
    winner.innerText = "YOU WIN";
} else if (randomChoice == "scissors") {
    opponentFromPaper.setAttribute("src", "images/icon-scissors.svg");
    opponentFromPaperBorder.classList.add("scissors-border");
    winner.innerText = "YOU LOSE";
  } else {
    alert("error");
  }
});

scissors.addEventListener("click", function(){
  home.style.display = "none";
  fightThree.style.display = "block";
  nextButton.style.display = "block";
  //animate(scissors);                                      //also put animate function in rock and paper
  var randomChoice = "paper";
  var random = Math.floor(Math.random() * 3);
  if (random == 0) {
    randomChoice = "paper";
  } else if (random == 1) {
    randomChoice = "rock";
  } else {
    randomChoice = "scissors";
  } console.log(randomChoice);

  if(randomChoice == "paper") {
    opponentFromScissors.setAttribute("src", "images/icon-paper.svg");
    opponentFromScissorsBorder.classList.add("paper-border");
    winner.innerText = "YOU WIN";
  } else if (randomChoice == "rock"){
    opponentFromScissors.setAttribute("src", "images/icon-rock.svg");
    opponentFromScissorsBorder.classList.add("rock-border");
    winner.innerText = "YOU LOSE";
  } else if (randomChoice == "scissors") {
    opponentFromScissors.setAttribute("src", "images/icon-scissors.svg");
    opponentFromScissorsBorder.classList.add("scissors-border");
    winner.innerText = "DRAW";
  } else {
    alert("error");
  }
});

// results button
nextButton.addEventListener("click", function(){      // all of these will go into animate()
  document.querySelector(".end").style.display = "block";
  document.querySelectorAll(".you")[0].classList.add("lastlefttext");
  document.querySelectorAll(".them")[0].classList.add("lastrighttext");
  document.querySelectorAll(".you")[1].classList.add("lastlefttext");
  document.querySelectorAll(".them")[1].classList.add("lastrighttext");
  document.querySelectorAll(".you")[2].classList.add("lastlefttext");
  document.querySelectorAll(".them")[2].classList.add("lastrighttext");
  document.querySelectorAll(".fight-circle-paper")[0].classList.add("lastleft");
  document.querySelectorAll(".opponent-circle")[0].classList.add("lastright");
  document.querySelectorAll(".fight-circle-scissors")[0].classList.add("lastleft");
  document.querySelectorAll(".opponent-circle")[1].classList.add("lastright");
  document.querySelectorAll(".fight-circle-rock")[0].classList.add("lastleft");
  document.querySelectorAll(".opponent-circle")[2].classList.add("lastright");
});

// function animate(choice){              // pass in result
//   var pos = 0;
//   var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       choice.style.top = pos + "px";
//       choice.style.left = pos + "px";
//     }
//   }
//}
