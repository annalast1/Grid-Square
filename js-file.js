let size = prompt("Choose the size of grid (Max : 100)");
let body = document.getElementById("body");
let clear = document.getElementById("clear");
let resize = document.getElementById("resize");

function createGrid() {
    createCols();
    createPixel();
}

createGrid();

function createCols() {
// Create  x divs and append to container div - making x cols
     
    for (let cols = 0; cols < size; cols++) {
        let col = document.createElement("section");
        body.appendChild(col);
        col.setAttribute("id", "col" + cols);
        col.setAttribute("class", "column")
    }        
}


function createPixel() {
    let x = 0;
    while (x < size) {
        for (let i = 0; i < size; i++) {
            let pixel = document.createElement("div");
            let col = document.getElementById("col" + i);
            col.appendChild(pixel);
            pixel.setAttribute("class", "row");
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = randomColor();
            })
        }
        x++;
    }
}

function randomColor() {
    let hex = Math.floor(Math.random() * 16777217).toString(16);
    let hexCode = '#' + hex;
    return hexCode
}

let row = document.querySelectorAll(".row");

clear.addEventListener("click", () => {
    let row = document.querySelectorAll(".row");
    row.forEach(function(item) {
        item.style.backgroundColor = "white";
    })   
});

resize.addEventListener("click", () =>  {
    let col = document.querySelectorAll(".column");
    let pixel = document.querySelectorAll(".row");
    pixel.forEach(function(item) {
        item.remove(pixel);
    })
    col.forEach(function(item) {
        item.remove(col);
    })
        size = prompt("Choose the size of grid (Max : 100)");
        createGrid(size);
   
})




