
const color = document.getElementById("exampleColorInput");
console.log(color);
const btnColor = document.getElementById("btnColor");
const colorElegido = document.querySelector(".colorElegido");
const cardColor= document.querySelector(".card");

btnColor.addEventListener("click", () =>{
    console.log(color.value);
    colorElegido.textContent = color.value;
    cardColor.style.backgroundColor = color.value;
});

