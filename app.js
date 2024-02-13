let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    // rock ,paper , scissors 
    const options = ["rock", "paper", "scissors"];
    // for random value genrate function 
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];


}

// draw Game function 
const drawGame = () => {
    console.log("Game is Draw");
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "blue";

    // userScorePara.innerText= userScore;
    // compScorePara.innerText= compScore;
}

// show user winner or lose 
 const showUserWin = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        console.log("You Win !");
        userScore++;
        userScorePara.innerText= userScore;
        // change text in msg 
        msg.innerText = `You Win ${userChoice} beats ${compChoice}`;
        // change background color 
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("You Lose");
        // compScore++;
        // compScorePara.innerText = compScore;
        // // compScorePara.innerText = compScore;
        // msg.innerText = `You Lose ${compChoice} beat ${userChoice}`;
        // msg.style.backgroundColor = "red";
        console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beat ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 }


const playGame = ((userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = getCompChoice();
    console.log("camp choice = ", compChoice);

    if (userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper scissors 
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            // rock scissors  campChoice
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock paper compChoice
            userWin = compChoice === "rock" ? false : true;
        }
        showUserWin(userWin,userChoice,compChoice);
    }
});


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});

