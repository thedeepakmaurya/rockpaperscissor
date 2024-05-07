let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');

const genCompChoices = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}


const drawGame = () => {
    console.log("game was draw.")
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#2274A5"
}



const showWinner = (userWin) => {
    if (userWin) {
        console.log("you win")
        msg.innerText = "You win!"
        msg.style.backgroundColor = "green"
    } else {
        console.log("you lose")
        msg.innerText = "You lose!"
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);
    const compChoice = genCompChoices();
    console.log("Comp choice: ", compChoice)

    if (userChoice === compChoice) {
        //Draw the game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {

            userWin = compChoice === "scissors" ? false : true;
        } else {
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});