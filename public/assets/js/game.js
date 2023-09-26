window.addEventListener('DOMContentLoaded', init)


function init(){
    let counter = 25;
    const typeParam = getParamByName("type")
    let tiles = document.querySelectorAll('.game-tile');
    tiles.forEach(el => {
        el.firstChild.src = "assets/images/" + typeParam + ".png";
        el.addEventListener("click", clickTile);
    }
    )
}

function clickTile(e){
    e.preventDefault;
    let id = e.target.id
    console.log(id)
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
    document.querySelector("#endscreen").style.display  = "block";

}


function toGameSelector(e){
    e.preventDefault;
    window.location.href = "index.html";

}

function getParamByName(name){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name)
}