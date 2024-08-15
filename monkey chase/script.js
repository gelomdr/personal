document.addEventListener("DOMContentLoaded", () => {
    var emoji = String.fromCodePoint(0x1F600);
    alert("Catch the monkey!\nClick OK when ready! " + emoji);
});

const button = document.getElementById("babyMonkey");
let lastX = 0, lastY = 0;
let timerElement = document.getElementById("timer");
let timeLeft = 30;
let timerInterval;

function moveButton() {
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);

    button.style.transform = `translate(${x}px, ${y}px)`;
    lastX = x;
    lastY = y;

    console.log(`Button dimensions: ${button.clientWidth}x${button.clientHeight}`);
    console.log(`Viewport dimensions: ${window.innerWidth}x${window.innerHeight}`);
    console.log(`New position: x=${x}, y=${y}`);
};

button.addEventListener("mouseenter", moveButton);
button.addEventListener("mouseleave", () => {
    button.style.transform = `translate(${lastX}px, ${lastY}px)`;
});

function handleButtonClick() {
    clearInterval(timerInterval);
    var emoji1 = String.fromCodePoint(0x1F605)
    var emoji2 = String.fromCodePoint(0x1F61D);
    alert("Okay! You got me! " + emoji1 +"\nYou won\'t catch me again " + emoji2 );
    restartTimer();
};

document.addEventListener("DOMContentLoaded", () => {
    button.style.position = "fixed";
    startTimer();
});

function startTimer() {
    timeLeft = 30;
    timerElement.textContent = `Time left: ${timeLeft}s`;
                
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            var emoji3 = String.fromCodePoint(0x1F92A);
            clearInterval(timerInterval);
            alert("Time's up! Try again! "+ emoji3);
            button.removeEventListener("mouseenter", moveButton);
            restartTimer();
        }
    }, 1000);
}
function restartTimer() {
    button.addEventListener("mouseenter", moveButton);
    startTimer();
}