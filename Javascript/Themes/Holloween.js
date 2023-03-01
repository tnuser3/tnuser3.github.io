
var doc = document;
window.onload = function() {
    Start();
   };
function Start(){

    const d = new Date();
        if(d.getMonth() == 2){
            console.log("Happy Halloween 🎃");
            document.getElementById("H").style.fontFamily="CustomFont";
        }else{
            console.log("not Halloween ):");
        }
}