const titleElem = document.querySelector(".title-main");



let imgLamp = document.querySelector("img");
imgLamp.src = "./img/white_lamp.png";
console.log(imgLamp);
const containerElem = document.querySelector(".container")

const brtLight = document.querySelector(".btn");

console.log(titleElem, brtLight);

let isOff = false;
brtLight.addEventListener("click", function () {
    if (isOff === true) {
        brtLight.classList.remove("bg-red");
        containerElem.classList.add("opacity")
        imgLamp.src = "./img/white_lamp.png";
        brtLight.innerText = "Accendimi"
        titleElem.innerText = "Accendi la luce che vedi meglio"

    } else {
        brtLight.classList.add("bg-red")
        imgLamp.src = "./img/yellow_lamp.png";
        containerElem.classList.remove("opacity")
        brtLight.innerText = "Spegnimi"
        titleElem.innerText = "Spegni la luce che le bolette le pago io!!!"

    }
    isOff = !isOff
});