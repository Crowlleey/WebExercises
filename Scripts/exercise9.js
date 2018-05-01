function addNumber(numberToAdd){
    var valueCalc = document.getElementById("displayCalc").value;

    if (valueCalc == 0) {
        valueCalc = numberToAdd;
    }else{
        valueCalc = valueCalc + numberToAdd
    }
    
    document.getElementById("displayCalc").value = valueCalc;
}

var cache = 0.0;
var lastCalc = '';

function sum(){
    cache = cache + parseFloat(document.getElementById("displayCalc").value); 
    console.log(cache);
    lastCalc = '+';
    document.getElementById("displayCalc").value = 0;
}

function operation(operator){   

    switch(operator){
        case '+': 
            cache = parseFloat(display());
            lastCalc = '+';
            break;
        case '-': 
            cache = display();
            lastCalc = '-';
            break;
        case '/':
            cache = display();
            lastCalc = '/';
            break;
        case 'x':
            cache = display();
            lastCalc = 'x';
            break;
    }    
    // lastCalc = operator;
    setDisplay("0");
}

function result(){
   console.log(lastCalc);
   
    if(lastCalc == '+'){
        cache = cache + parseFloat(display());  
    }else if(lastCalc == '-'){      
        cache = cache - parseFloat(display());
    }else if(lastCalc == '/'){
        cache = cache / parseFloat(display());
    }else if(lastCalc = 'x'){
        cache = cache * parseFloat(display());
    }
    setDisplay(cache);
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
        cache = 0;
        setDisplay("0");
    }else if(display() != 0){
        var toShow = display().substr(0,display().length - 1);
        setDisplay(toShow);
    }
}

function display(){
    return document.getElementById("displayCalc").value;
}

function setDisplay(value){
    document.getElementById("displayCalc").value = value;
}
