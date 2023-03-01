
var doc = document;
window.onload = function() {
    Start();
   };
function Start(){

    const d = new Date();
        if(d.getMonth() == 11){
            console.log("Happy Halloween 🎃");
            document.getElementById("snowflakes").style.visibility = "Visible";
        }else{
            console.log("not Halloween ):");
            document.getElementById("snowflakes").style.visibility = "hidden";
        }
}