

function addNumber(numberToAdd){
    var valueCalc = document.getElementById("displayCalc").value;

    if (valueCalc == 0) {
        valueCalc = numberToAdd;
    }else{
        valueCalc = valueCalc + numberToAdd
    }
    
    document.getElementById("displayCalc").value = valueCalc;
}

var cache = 0;
var lastCalc = '';

function sum(){
    cache = cache + parseFloat(document.getElementById("displayCalc").value); 
    console.log(cache);
    lastCalc = '+';
    document.getElementById("displayCalc").value = 0;
}

function result(){
    if(lastCalc == '+'){
        cache = cache  + parseFloat(document.getElementById("displayCalc").value); 
    }
    document.getElementById("displayCalc").value = cache;
}

function saveInCash(value){
   var i = parseFloat(value);
}

function erase(){
    cache = 0
    document.getElementById("displayCalc").value = 0;
}

function eraseLast(){
    // var display = document.getElementById("displayCalc").value
    if(display().length == 1){
        setDisplay("0");
    }else if(display() != 0){
        setDisplay(display().substr(1,(display().length - 1)));
    }
}

function display(){
    return document.getElementById("displayCalc").value;
}

function setDisplay(value){
    document.getElementById("displayCalc").value = value;
}





































// document.getElementById ("btScream").addEventListener ("click", resetEmotes, false);

// var o = Array();

// for (let index = 0; index < 10000; index++) {
//     o.push(index)
// }

// for (const key in o) {
//     document.write(key + " value <br/>" );
// }