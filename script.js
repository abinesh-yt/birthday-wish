function showSurprise() {

    let name =
        document.getElementById("name").value;

    document.getElementById("message").innerHTML =
        `🎉 Happy Birthday ${name}! 🎂`;

    createConfetti();
}

let count = 3;

let timer = setInterval(() => {
    document.getElementById("countdown").innerHTML =
        "🎉 Surprise in " + count;

    count--;

    if(count < 0){
        clearInterval(timer);

        document.getElementById("countdown").innerHTML =
            "🎂 Happy Birthday!";
    }
},1000);

function createConfetti() {
    for(let i=0; i<20; i++) {
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
    }, 3000);
    }

document.body.style.background =
"radial-gradient(circle, #001133, #000814)";
}