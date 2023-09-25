window.addEventListener('DOMContentLoaded', init)


function init(){
    const slider = document.getElementById("slider");
    const body = document.body;

    slider.addEventListener("input", function () {
        const sliderValue = slider.value;
        if (sliderValue === "0") {
            body.classList.remove("dark-mode");
        } else {
            body.classList.add("dark-mode");
        }
    });

    const modes = document.querySelectorAll('.game-mode');

    modes.forEach(el => el.addEventListener("click", setupGame))
}

function setupGame(e){
    e.preventDefault;
    let id = e.target.id
    window.location.href = "https://angrynampie.tk/game?type=" + id;
}