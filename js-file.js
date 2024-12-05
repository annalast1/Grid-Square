let size = prompt("Choose the size of grid (Max : 100)")
let body = document.getElementById("body");

function createCols() {
// Create 16 divs and append to container div - making 16 cols
    for (let cols = 0; cols < size; cols++) {
        let col = document.createElement("section");
        body.appendChild(col);
        col.setAttribute("id", "col" + cols);
    }
        
}
createCols();

function createPixel() {
    let x = 0;
    while (x < size) {
        for (let i = 0; i < size; i++) {
            let pixel = document.createElement("div");
            let col = document.getElementById("col" + i);
            col.appendChild(pixel);
            pixel.setAttribute("class", "row" + x);
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = 'black'
            })
        }
        x++;
    }

}
createPixel();