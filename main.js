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