let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
const options = ["rock","paper","scissor"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "GAME WAS DRAW , PLAY AGAIN !";
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won!");
        msg.innerText = "YOU WON !";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lost!");
        msg.innerText = "YOU LOST  !";
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
console.log("user choice = " , userChoice);
const compChoice = genCompChoice();
console.log("computer choice = " , compChoice);
if(userChoice === compChoice){
drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(
        userChoice === "paper"){
userWin = compChoice === "scissors" ? false : true;
        }else{
           userWin = compChoice  === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
}
;
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
           const userChoice =  choice.getAttribute("id")
        console.log("choice was clicked" , userChoice)
        playGame(userChoice)
    });
});