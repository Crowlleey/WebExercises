function arrastar(ev){
    // alert(ev.target.id);
    console.log("Tiro");
    
    ev.dataTransfer.setData("text", ev.target.id);
}

function onDrogaover(ev){
    console.log("foi");
    ev.preventDefault();
}

function onDrop(ev){
 
    console.log("Coloco");
    // alert(ev.target.id);
    ev.preventDefault();
    var idOrigem = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(idOrigem));
}