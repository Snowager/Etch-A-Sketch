const container = document.querySelector("#container")
const gridDiv = document.createElement('div');
const div = document.querySelector("div.divWhite")

function makeDiv() {
    let gridDiv = document.createElement('div');
        gridDiv.classList.add('divWhite');
        gridDiv.setAttribute("id", "etch" + i)
        container.appendChild(gridDiv);
}

function divFactory() {
    for (i = 0; i <= 255; i++) {
        makeDiv() 
    }    
}


 
divFactory()

function changeColor() {
    for (i = 0; i <= 255; i++) {
        divW = document.getElementsByClassName("divWhite")
        divW[i].addEventListener("mouseover", function(){
            r = event.target;
            r.classList.remove("divWhite");
            r.classList.add("divBlack");
        })
    }
}

changeColor()