function showSurprise() {

    let name =
        document.getElementById("name").value;

    document.getElementById("message").innerHTML =
        `🎉 Happy Birthday ${name}! 🎂`;

    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * window.innerWidth + "px";

        confetti.style.backgroundColor =
            ["red", "blue", "yellow", "green", "purple", "orange"][
                Math.floor(Math.random() * 6)
            ];

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}