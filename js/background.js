const images = [
    "bg2.png",
    "bg3.png",
    "bg4.png",
    "bg5.png",
    "bg6.png",
    "bg7.png",
    "bg8.png",
    "bg9.png",
    "bg10.png",
    "bg11.png",
    "bg12.png",
    "bg13.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
