const container = document.querySelector("#container")

function makeDiv() {
    let gridDiv = document.createElement('div');
        gridDiv.classList.add('divBlack');
        container.appendChild(gridDiv);

}

makeDiv()