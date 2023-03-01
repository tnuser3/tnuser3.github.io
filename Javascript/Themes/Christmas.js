
var doc = document;
window.onload = function() {
    Start();
   };
function Start(){

    const d = new Date();
        if(d.getMonth() == 11){
            console.log("Happy Christmas ❄");
            document.getElementById("snowflakes").style.visibility = "Visible";
        }else{
            console.log("not Christmas ):");
            document.getElementById("snowflakes").style.visibility = "hidden";
        }
}