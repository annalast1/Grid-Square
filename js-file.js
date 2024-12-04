let body = document.getElementById("body");

function createCols() {
// Create 16 divs and append to container div - making 16 cols
    for (let cols = 0; cols < 16; cols++) {
        let col = document.createElement("section");
        body.appendChild(col);
        col.setAttribute("id", "col" + cols);
    }
        
}
createCols();

function createPixel() {
    let x = 0;
    while (x < 16) {
        for (let i = 0; i < 16; i++) {
            let pixel = document.createElement("div");
            let col = document.getElementById("col" + i);
            col.appendChild(pixel);
            pixel.setAttribute("class", "row" + x);
        }
        x++;
    }

}
createPixel();