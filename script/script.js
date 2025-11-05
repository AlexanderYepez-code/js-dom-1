const titleElem = document.querySelector(".title-main");



let imgLamp = document.querySelector("img");
imgLamp.src = "./img/white_lamp.png";
console.log(imgLamp);

const brtLight = document.querySelector(".btn");

console.log(titleElem, brtLight);


brtLight.addEventListener("click", function() {
    const isOff = brtLight.classList.contains("bg-red")
    
    if(isOff === true){
       brtLight.classList.remove("bg-red") ;
       imgLamp.src = "./img/white_lamp.png";
       brtLight.innerText = "Accendimi"
    }else {
        brtLight.classList.add("bg-red")
    imgLamp.src = "./img/yellow_lamp.png";
    brtLight.innerText = "Spegnimi"
    titleElem.innerText = "Spegni la luce"

    }
});