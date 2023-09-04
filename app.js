
const color = document.getElementById("exampleColorInput");
console.log(color);
let btnColor = document.getElementById("btnColor");
let colorElegido = document.querySelector(".colorElegido");
let cardColor= document.querySelector(".card");

btnColor.addEventListener("click", () =>{
    console.log(color.value);
    colorElegido.textContent = color.value;
    cardColor.style.backgroundColor = color.value;
});

