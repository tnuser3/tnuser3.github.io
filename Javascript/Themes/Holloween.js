var doc = document;
window.onload = function() {
    Start();
   };
function Start(){
    const d = new Date();
    var Year = d.getFullYear();
    var Oct = new Date(Year.toString()+"-03-01");
        if(d.getDay() + 1 == Oct.toString){
            console.log("Happy Halloween 🎃")
        }else{
            console.log("not halloween ):")
        }
}