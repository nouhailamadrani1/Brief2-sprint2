function afficher(id){


   
document.getElementById("task-title").value=document.getElementById(id+"t").getAttribute("value");

document.getElementById("task-priority").value=document.getElementById(id+"p").getAttribute("value");
document.getElementById("task-type").value=document.getElementById(id+"ty").getAttributeL("value");
document.getElementById("task-date").value=document.getElementById(id+"d").getAttribute("value");
document.getElementById("task-description").value=document.getElementById(id+"ds").getAttribute("value");
document.getElementById("task-status").value = document.getElementById(id+"st").getAttribute("value");


}
