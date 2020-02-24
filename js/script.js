const container = document.querySelector("#container")

function makeDiv() {
    let gridDiv = document.createElement('div');
        gridDiv.classList.add('divBlack');
        container.appendChild(gridDiv);
}

function divFactory() {
    for (i = 0; i <= 255; i++) {
        makeDiv() 
    }
}

divFactory()
