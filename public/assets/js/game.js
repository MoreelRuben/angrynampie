window.addEventListener('DOMContentLoaded', init)


function init(){
    let counter = 25;
    let tiles = document.querySelectorAll('.game-tile');

    tiles.forEach(el => el.addEventListener("click", clickTile))
}

function clickTile(e){
    e.preventDefault;
    let id = e.id
    let tile = document.querySelector('#' + id);
    tile.removeEventListener;
    tile.classList.add("used")
    const randomNumber = Math.floor(Math.random() * (counter - 1 + 1)) + 1;
    if(randomNumber == counter){
        endGame()
    }
    counter--
}

function endGame(){
    window.addEventListener("click", toGameSelector);
    document.querySelector("#endscreen").computedStyleMap.display  = "block";

}


function toGameSelector(e){
    e.preventDefault;
    window.location.href = "index.html";

}