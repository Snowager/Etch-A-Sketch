const container = document.querySelector("#container")
const gridDiv = document.createElement('div');
const div = document.querySelector("div.divWhite")
gridSize = prompt("Enter a size for your drawing pad", "16")
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

function makeDiv() {
    let gridDiv = document.createElement('div');
        gridDiv.classList.add('divWhite');
        gridDiv.setAttribute("id", "etch" + i)
        container.appendChild(gridDiv);
}

function divFactory() {
    for (i = 0; i < (gridSize*gridSize); i++) {
        makeDiv() 
    }    
}


 
divFactory()

function changeColor() {
    for (i = 0; i < (gridSize*gridSize); i++) {
        divW = document.getElementsByClassName("divWhite")
        divW[i].addEventListener("mouseover", function(){
            r = event.target;
            r.classList.remove("divWhite");
            r.classList.add("divBlack");
        })
    }
}

changeColor()