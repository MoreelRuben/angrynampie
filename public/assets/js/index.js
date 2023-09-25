window.addEventListener('DOMContentLoaded', init)


function init(){
    const slider = document.getElementById("slider");
    const body = document.body;
    const modes = document.querySelectorAll('.game-mode');
    const selector = document.querySelector('.game-selector')
    const darkSelector = document.querySelector('.dark-game-selector')

    slider.addEventListener("input", function () {
        const sliderValue = slider.value;
        if (sliderValue === "0") {
            body.classList.remove("dark-mode");
            selector.style.display= "block";
            darkSelector.style.display = "none";
        } else {
            body.classList.add("dark-mode");
            selector.style.display= "none";
            darkSelector.style.display = "block";
        }
    });

    

    modes.forEach(el => el.addEventListener("click", function(event){
        const parentId = el.id;
        window.location.href = "https://angrynampie.tk/game?type=" + parentId;
    }))
}
