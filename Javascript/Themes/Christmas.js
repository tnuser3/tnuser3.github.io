
var doc = document;
window.onload = function() {
    Start();
   };
function Start(){

    const d = new Date();
    var Year = d.getFullYear();
    var Oct = new Date(Year.toString()+"-12-01");
        if(d.getDay() + 1 == Oct.toString){
            console.log("Happy Christmas 🎃");
        }else{
            console.log("not Christmas ):");
            document.getElementById("snowflakes").style.visibility = "hidden";
        }
}