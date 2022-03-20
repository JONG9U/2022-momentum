const clockBox = document.querySelector(".clock-box")
const h2 = document.querySelector("#clock")
const images = ["성지.1.jpg", "성지.2.jpg","성지.3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImage}`; 


clockBox.insertBefore(bgImage,h2);
