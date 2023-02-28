var doc = document;
window.onload = function() {
    CheckEndDate();
   };
function CheckEndDate() {

    var now = new Date().toString();  // current date
    var end_date = new Date("February 28").toString();

    if (now === end_date) {
        doc.getElementById("H").style.fontFamily="CustomFont";
        alert('HAPPY HALLOWEEN 🎃');
        return;
    }
    else{
        console.log("Not HAlloween ):")
    }
}