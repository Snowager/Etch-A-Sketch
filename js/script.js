const container = document.querySelector("#container")
const gridDiv = document.createElement('div');
const div = document.querySelector("div.divWhite")
const reset = document.querySelector("#gres")
const blackres = document.querySelector('#blackres')
const drawres = document.querySelector('#drawres')
const colorres = document.querySelector('#colorres')
gridSize = 256
container.classList.add("gridStart")
allDiv = document.getElementsByClassName("divWhole");

function makeDiv() {
    let gridDiv = document.createElement('div');
        gridDiv.setAttribute("id", "etch")
        gridDiv.classList.add("divWhole")
        container.appendChild(gridDiv);
}

function randomColor() {
    colorChoice = "#"
    variableChoice = "0123456789ABCDEF".split('') 
    for (f =0; f < 6; f++) {
        colorChoice += variableChoice[Math.floor(Math.random()*16)];
    }
    return colorChoice
}

function colorDiv() {
    for (i = 0; i < (gridSize*gridSize); i++) {
        makeDiv() 
        allDiv[i].classList.add("divWhite")
        allDiv[i].addEventListener("mouseover", function(){
            r = event.target;
            r.classList.remove("divWhite");
            r.style.background = randomColor();
        })
    }
} 


function blackDiv() {
    for (i = 0; i < (gridSize*gridSize); i++) {
        makeDiv() 
        allDiv[i].classList.add("divWhite")
        allDiv[i].addEventListener("mouseover", function(){
            r = event.target;
            r.classList.remove("divWhite");
            r.classList.add("divBlack");
        })
    }
}

function drawDiv() {
    for (i = 0; i < (gridSize*gridSize); i++) {
        makeDiv() 
        allDiv[i].style.background = "rgb(0, 0, 0)";
        allDiv[i].style.opacity = 0;
        allDiv[i].addEventListener("mouseover", function(){
            r = event.target;
            r.style.opacity -= -0.1 
        })
    }
}

        
blackres.addEventListener("click", function() {
    container.classList.remove("gridStart");
    container.innerHTML = "";
    gridSize = prompt("Enter a size for your drawing pad", "16");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    blackDiv() 
})
 
colorres.addEventListener("click", function() {
    container.classList.remove("gridStart");
    container.innerHTML = "";
    gridSize = prompt("Enter a size for your drawing pad", "16");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    colorDiv()
})

drawres.addEventListener("click", function() {
    container.classList.remove("gridStart");
    container.innerHTML = "";
    gridSize = prompt("Enter a size for your drawing pad", "16");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    drawDiv()
})


 





reset.addEventListener("click", function() {
    container.classList.remove("gridStart");
    container.innerHTML = "";
})




