var menubtn= document.getElementById("menubtn")
var sidNav= document.getElementById("sidNav")
var menu= document.getElementById("menu")

menubtn.onclick = function(){
    if (sidNav.style.right == "-250px"){
        sidNav.style.right = "0";
        
    }else{
        sidNav.style.right = "-250px";
       
    }
   

}