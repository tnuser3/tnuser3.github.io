function BlueMode() {
  var element = document.body;
  element.classList.toggle("Blue-mode");
}
function DarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var col=document.getElementById("H1");
col.style.color="#FF0000";
}
function Menustart() {
  var doc = document;
  var img = doc.getElementById("Image")
  img.style.visibility = visible;
}
function Comingsoon(){
  alert('COMING SOON')
}
function Openmain(){
var doc=document;
doc.getElementById("H").style.visibility=hidden;
doc.getElementById("Links").style.visibility=hidden;
doc.getElementById("P3").style.visibility=hidden;
doc.getElementById("MHN").style.visibility=hidden;
doc.getElementById("discord").style.visibility=hidden;
}