let container = document.getElementById("container");

function createDivs() {
// Create 16 divs and append to container div
for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute("id", "div" + i);
}
}
createDivs();