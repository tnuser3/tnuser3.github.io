
var doc = document;
window.onload = function() {
    Start();
   };
function Start(){

    const d = new Date();
    
    //-------------------christmas-------------------\\
        if(d.getMonth() == 2){
            console.log("Happy Christmas ❄");
            document.getElementById("snowflakes").style.visibility = "Visible";
        }else{
            console.log("not Christmas ):");
            document.getElementById("snowflakes").style.visibility = "hidden";
        }
        //-------------------Holloween-------------------\\
        if(d.getMonth() == 2){
            console.log("Happy Halloween 🎃");
            document.getElementById("H").style.fontFamily="CustomFont";
            document.getElementById("H").style.color ="red";
            document.getElementById("Links").style.color ="red";
            document.getElementById("Links").style.fontFamily="CustomFont";
        }else{
            console.log("not Halloween ):");
        }
                //-------------------4th of july-------------------\\
                if(d.getMonth() == 2){
                    document.getElementById("pyro").style.visibility="visable";
                }else{
                    document.getElementById("pyro").style.visibility="hidden";
                }
}