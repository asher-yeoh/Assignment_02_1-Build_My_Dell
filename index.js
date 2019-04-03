//Importing the selected parts imported from customize.html.
var passDisplay = localStorage.getItem("passDisplay");
var passProcessor = localStorage.getItem("passProcessor");
var passGraphicCard = localStorage.getItem("passGraphicCard");
var passRam = localStorage.getItem("passRam");
var passStorage = localStorage.getItem("passStorage");

//Display the selected parts on the footer navigation bar.
document.getElementById("button-display").innerHTML = passDisplay;
document.getElementById("button-processor").innerHTML = passProcessor;
document.getElementById("button-graphic-card").innerHTML = passGraphicCard;
document.getElementById("button-ram").innerHTML = passRam;
document.getElementById("button-storage").innerHTML = passStorage;

const buttonCustomize = document.querySelector("#button-customize");

buttonCustomize.addEventListener("click", customizeButtonFunction => {
    window.open("./customize.html","_self");
  });