
var doc = document;
window.onload = function() {
    Start();
   };
function Start(){

    const d = new Date();
    
    //-------------------christmas-------------------\\
        if(d.getMonth() == 11){
            console.log("Happy Christmas ❄");
            document.getElementById("snowflakes").style.visibility = "Visible";
        }else{
            console.log("not Christmas ):");
            document.getElementById("snowflakes").style.visibility = "hidden";
        }
        //-------------------Holloween-------------------\\
        if(d.getMonth() == 9){
            console.log("Happy Halloween 🎃");
            document.getElementById("H").style.fontFamily="CustomFont";
            document.getElementById("H").style.color ="red";
            document.getElementById("Links").style.color ="red";
            document.getElementById("Links").style.fontFamily="CustomFont";
        }else{
            console.log("not Halloween ):");
        }
        //-------------------4th of july-------------------\\
        if(d.getMonth() == 6){
        document.getElementById("pyro").style.visibility="visable";
        }
            //-------------------easter-------------------\\
        if(d.getMonth() == 6){
        document.getElementById("snowcontainer").style.visibility="visable";
        }else{document.getElementById("snowcontainer").style.visibility="hidden";}

}
