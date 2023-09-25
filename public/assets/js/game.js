window.addEventListener('DOMContentLoaded', init)


function init(){
    let tiles = document.querySelectorAll('.game-tile');

    tiles.forEach(el => el.addEventListener("click", clickTile))
}

function clickTile(e){
    e.preventDefault;
    let id = e.id
    let tile = document.querySelector('#' + id);
    tile.removeEventListener;
    tile.classList.add("used")
}