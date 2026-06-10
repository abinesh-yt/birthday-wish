let alreadyOpened = false;

function showSurprise() {

    if (alreadyOpened) return;

    alreadyOpened = true;

    let name =
        document.getElementById("name").value;

    if (name.trim() === "") {

        name = "My Friend";
    }

    let count = 3;

    document.getElementById("countdown").innerHTML =
        "🎉 Surprise in 3";

    let timer = setInterval(() => {

        count--;

        if (count > 0) {

            document.getElementById("countdown").innerHTML =
                "🎉 Surprise in " + count;
        }

        else {

            clearInterval(timer);

            document.getElementById("countdown").innerHTML =
                "";

            document.getElementById("message").innerHTML =
                `🎉 Happy Birthday ${name}! 🎂`;

            createConfetti();

            document.getElementById("surpriseBtn").innerHTML =
                "🎉 Celebration Started";

            document.getElementById("surpriseBtn").disabled =
                true;
        }

    }, 1000);
}

function createConfetti() {

    for (let i = 0; i < 25; i++) {

        let confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * window.innerWidth + "px";

        confetti.style.backgroundColor =
            ["red", "blue", "yellow", "green", "purple", "orange"]
            [Math.floor(Math.random() * 6)];

        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 3000);
    }
}

/* ENTER KEY SUPPORT */

document.addEventListener("keydown",
    function (event) {

        if (event.key === "Enter") {

            showSurprise();
        }
    });