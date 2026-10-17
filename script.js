// variable for screen
var screen = document.getElementById("screen");

// function to add value
function addToScreen(value){
    screen.value += value;
}

// clear all
function clearScreen(){
    screen.value = "";
}

// delete one char
function del(){
    screen.value = screen.value.slice(0, -1);
}

// calculate result
function calculate(){
    try{
        // eval use kiya hai calculation ke liye
        var result = eval(screen.value);
        screen.value = result;
    }
    catch{
        screen.value = "Error";
    }
}