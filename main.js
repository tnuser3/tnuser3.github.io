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
function Closemain(){
  var doc=document;
  doc.getElementById("H").style.visibility="visible";
  doc.getElementById("Links").style.visibility="visible";
  doc.getElementById("P3").style.visibility="visible";
  doc.getElementById("MHN").style.visibility= "visible";
  doc.getElementById("discord").style.visibility="visible";
  doc.getElementById("Back").style.visibility="hidden";
  doc.getElementById("line").style.visibility="hidden"
  doc.getElementById("Tracker-Main").style.visibility="hidden";
}
function Openmain(){
var doc=document;
doc.getElementById("Back").style.visibility="visible";
doc.getElementById("H").style.visibility="hidden";
doc.getElementById("Links").style.visibility="hidden";
doc.getElementById("P3").style.visibility="hidden";
doc.getElementById("MHN").style.visibility= "hidden";
doc.getElementById("discord").style.visibility="hidden";
doc.getElementById("line").style.visibility="visible";
doc.getElementById("Tracker-Main").style.visibility="visible";
}
	  window.onload = function() {
 	  OnStart();
	  };
   function OnStart(){ 
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	      console.log("This site does not support mobile");
      }else{
        console.log("mobile check:off");
      }
    }
