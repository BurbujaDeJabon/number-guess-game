const compGuess = Math.floor(Math.random() * 100) + 1;
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

function guessingGame() {
    const userGuess = parseInt(document.getElementById("user-guess").value);

    if (userGuess > compGuess) {
        feedback.innerHTML = "too high";
        feedback.style.backgroundColor = 'rgba(310, 0, 0, 0.6)';
    } else if (userGuess < compGuess) {
        feedback.innerHTML = '<p>too low</p>';
        feedback.style.backgroundColor = 'rgba(0, 310, 0, 0.5)';
    } else {
        feedback.innerHTML = 'YOU GOT IT'
    }
};

submitBtn.addEventListener("click", guessingGame);