const container = document.querySelector(".container");



const btn = document.querySelector(".reset");
btn.addEventListener("click", () => {
    let number = prompt("Enter the number of squares per side for the new grid (max 100)");
    number = Math.min(number, 100); // Limit the number to 100
    createGrid(number);
})
function createGrid(number) {
    container.innerHTML = ''; // Remove existing grid
    for (let index = 0; index < number * number; index++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    const divs = document.querySelectorAll(".square");
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b =Math.floor(Math.random()*256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });
}

const divs = document.querySelectorAll(".square");
divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.classList.add("squareHovered");
    });
});
const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    const divs = document.querySelectorAll(".square");
    divs.forEach((div) => {
        div.style.backgroundColor='rgb(197, 127, 255)';
    });
})

createGrid(16);

