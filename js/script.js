const container = document.querySelector("#container")
const gridDiv = document.createElement('div');
const div = document.querySelector("div.divWhite")
const reset = document.querySelector("#gres")
gridSize = 256
container.classList.add("gridStart")
allDiv = document.getElementsByClassName("divWhole");

function makeDiv() {
    let gridDiv = document.createElement('div');
        gridDiv.setAttribute("id", "etch" + i)
        gridDiv.classList.add("divWhole")
        container.appendChild(gridDiv);
}

function divFactory() {
    for (i = 0; i < (gridSize*gridSize); i++) {
        makeDiv() 
        divW = document.getElementsByClassName("divWhole")
        divW[i].classList.add("divWhite")
        divW[i].addEventListener("mouseover", function(){
            r = event.target;
            r.classList.remove("divWhite");
            r.classList.add("divBlack");
        })
    }
}
        

 





reset.addEventListener("click", function() {
    container.classList.remove("gridStart");
    container.innerHTML = "";
    gridSize = prompt("Enter a size for your drawing pad", "16");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    divFactory()
})

divFactory()
