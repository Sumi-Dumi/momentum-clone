const images = [
    "url('img/0.jpeg')", 
    "url('img/1.jpeg')", 
    "url('img/2.jpeg')"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const selectedImage = document.querySelector(".bgImg");



selectedImage.style.backgroundImage = chosenImage;