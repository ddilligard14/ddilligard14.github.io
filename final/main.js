var ccUrl= "https://www.codecademy.com/ddilligard14";
var btnAcademy= document.getElementById("btnAcademy")

btnAcademy.onmousedown = newTabAcademy;

function newTabAcademy(){
    window.open (ccUrl);
}