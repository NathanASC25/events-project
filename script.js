let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorLessButton = document.getElementById("colorless");
let hideButton = document.getElementById("hide");
let colorDisplay = document.getElementById("color-display");

aquaButton.onclick = function(){
    colorDisplay.style.backgroundColor = "aqua";
    colorDisplay.innerHTML = "aqua";
}

tealButton.onclick = function(){
    colorDisplay.style.backgroundColor = "teal";
    colorDisplay.innerHTML = "teal";
}

pinkButton.onclick = function(){
    colorDisplay.style.backgroundColor = "pink";
    colorDisplay.innerHTML = "pink";
}

purpleButton.onclick = function(){
    colorDisplay.style.backgroundColor = "purple";
    colorDisplay.innerHTML = "purple";
}

colorLessButton.onclick = function(){
    colorDisplay.style.backgroundColor = "white";
    colorDisplay.innerHTML = "colorless";
}

hideButton.onclick = function(){
    if (hideButton.innerHTML == "hide"){
        hideButton.innerHTML = "show";
        colorDisplay.style.display = "none"
    }
    else{
        hideButton.innerHTML = "hide";
        colorDisplay.style.display = "flex";
    }
}