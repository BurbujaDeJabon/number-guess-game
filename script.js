const compGuess = Math.floor(Math.random() * 100) + 1;
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

function guessingGame() {
    const userGuess = parseInt(document.getElementById("user-guess").value);

    if (userGuess > compGuess) {
        feedback.innerHTML = "too high";
    } else if (userGuess < compGuess) {
        feedback.innerHTML = '<p>too low</p>';
    } else {
        feedback.innerHTML = 'YOU GOT IT'
    }
};

submitBtn.addEventListener("click", guessingGame);