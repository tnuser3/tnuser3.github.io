
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
    function sendMessage() {
	    var URI;
      var Uhh;
      Uhh= document.getElementById("alltext1").value;
      const request = new XMLHttpRequest();
      request.open("POST", URI);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "UserName",
        avatar_url: "",
        content: Uhh
      }

      request.send(JSON.stringify(params));
    }
