const redDot = document.querySelector("#laserPoint");


redDot.style.top = `${50}%`;
redDot.style.left = `${50}%`;

function Action() {
    const NewHeight = Math.floor(Math.random() * window.innerHeight);
    const NewWidth = Math.floor(Math.random() * window.innerWidth);

    redDot.style.top = `${NewHeight - 20}px`;
    redDot.style.left = `${NewWidth - 20}px`;

}


redDot.addEventListener("mouseover", () => {
    Action();
});


document.querySelector("#reset").addEventListener("click", () => {
    Action();
});

setTimeout(() => {
    document.querySelector(".temporary").textContent = "Try catching...";

    setTimeout(() => {
        document.querySelector(".temporary").textContent = "Did you catch it? Is it disappointing?";

        setTimeout(() => {
            document.querySelector(".temporary").textContent = "This is how you torment your cat by not giving it the pleasure of a hunt.";

            setTimeout(() => {
            
                document.querySelector(".temporary").textContent = "Enjoy the dissatisfaction...";
            
            }, 3000);

        }, 3000);

    }, 3000);

}, 8000);