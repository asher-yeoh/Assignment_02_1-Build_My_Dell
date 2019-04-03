//Click Check Out button to go to index.html.
const buttonCheckout = document.querySelector("#button-checkout");

buttonCheckout.addEventListener("click", checkoutButtonFunction => {
    window.open("./index.html","_self")
  });

//Click to scroll to view Display specs.
const buttonDisplay = document.querySelector("#button-display");

buttonDisplay.addEventListener("click", displayButtonFunction => {
    var displayView = document.getElementById("display-view");
    displayView.scrollIntoView({behavior: "smooth", block: "center"});
  });

//Click to scroll to view Processor specs.
const buttonProcessor = document.querySelector("#button-processor");

buttonProcessor.addEventListener("click", processorButtonFunction => {
    var processorView = document.getElementById("processor-view");
    processorView.scrollIntoView({behavior: "smooth", block: "center"});
  });

//Click to scroll to view Graphic Card specs.
const buttonGraphicCard = document.querySelector("#button-graphic-card");

buttonGraphicCard.addEventListener("click", graphicCardButtonFunction => {
    var graphicCardView = document.getElementById("graphic-card-view");
    graphicCardView.scrollIntoView({behavior: "smooth", block: "center"});
  });

//Click to scroll to view RAM specs.
const buttonRam = document.querySelector("#button-ram");

buttonRam.addEventListener("click", ramButtonFunction => {
    var ramView = document.getElementById("ram-view");
    ramView.scrollIntoView({behavior: "smooth", block: "center"});
  });

//Click to scroll to view Storage specs.
const buttonStorage = document.querySelector("#button-storage");

buttonStorage.addEventListener("click", storageButtonFunction => {
    var storageView = document.getElementById("storage-view");
    storageView.scrollIntoView({behavior: "smooth", block: "center"});
  });

//Get selected Display option and display on the footer navigation bar.
function getDisplayFunction() {
    var i;
    var getValue = document.getElementsByName("display-options");

    for (i = 0; i < getValue.length; i++) {
        
        if (getValue[i].checked) {
            var x = getValue[i].value;
            document.getElementById("button-display").innerHTML = x;

            //Exporting the variable to index.html.
            localStorage.setItem("passDisplay", x);
        }
    }
}

//Get selected Processor option and display on the footer navigation bar.
function getProcessorFunction() {
    var i;
    var getValue = document.getElementsByName("processor-options");

    for (i = 0; i < getValue.length; i++) {
        
        if (getValue[i].checked) {
            var x = getValue[i].value;
            document.getElementById("button-processor").innerHTML = x;

            //Exporting the variable to index.html.
            localStorage.setItem("passProcessor", x);
        }
    }
}

//Get selected Display option and display on the footer navigation bar.
function getGraphicCardFunction() {
    var i;
    var getValue = document.getElementsByName("graphic-card-options");

    for (i = 0; i < getValue.length; i++) {
        
        if (getValue[i].checked) {
            var x = getValue[i].value;
            document.getElementById("button-graphic-card").innerHTML = x;

            //Exporting the variable to index.html.
            localStorage.setItem("passGraphicCard", x);
        }
    }
}

//Get selected Display option and display on the footer navigation bar.
function getRamFunction() {
    var i;
    var getValue = document.getElementsByName("ram-options");

    for (i = 0; i < getValue.length; i++) {
        
        if (getValue[i].checked) {
            var x = getValue[i].value;
            document.getElementById("button-ram").innerHTML = x;

            //Exporting the variable to index.html.
            localStorage.setItem("passRam", x);
        }
    }
}

//Get selected Display option and display on the footer navigation bar.
function getStorageFunction() {
    var i;
    var getValue = document.getElementsByName("storage-options");

    for (i = 0; i < getValue.length; i++) {
        
        if (getValue[i].checked) {
            var x = getValue[i].value;
            document.getElementById("button-storage").innerHTML = x;

            //Exporting the variable to index.html.
            localStorage.setItem("passStorage", x);
        }
    }
}

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