var ccUrl= "https://www.codecademy.com/ddilligard14";
var btn= document.getElementById("btn")


// alert ("Testing"); 

btn.onmousedown = showAcademy;


function showAcademy () {
    // alert("going to: " + ccUrl);
    document.location = ccUrl;    
}

var btn2= document.getElementById("btn2")

btn2.onmousedown = newTabAcademy;

function newTabAcademy(){
    window.open (ccUrl);
}




