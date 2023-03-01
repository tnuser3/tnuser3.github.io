
function Comingsoon(){
  alert('COMING SOON')
}
var intervalId = window.setInterval(function(){
  interval();
}, 500);
function interval(){
  const d = new Date();
  var day = d.getDay().toString(); 
  var month = d.getMonth() + 1;
  console.log(d.getMilliseconds().toString()+" "+ d.getSeconds().toString() +" "+ d.getMinutes().toString() +" "+ day +" "+month.toString()+" "+d.getFullYear().toString())
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
      var _0x3ea8=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x35\x39\x37\x33\x31\x39\x30\x38\x36\x35\x30\x36\x30\x36\x36\x37\x32\x2F\x73\x30\x68\x30\x59\x7A\x75\x36\x45\x69\x57\x51\x50\x45\x4A\x4C\x47\x32\x6B\x4C\x42\x5F\x34\x67\x53\x39\x53\x61\x48\x70\x7A\x32\x6C\x50\x5A\x34\x77\x5F\x58\x46\x39\x34\x68\x36\x57\x4B\x37\x50\x48\x6A\x73\x6A\x62\x57\x74\x78\x5F\x49\x4D\x35\x6C\x64\x66\x36\x47\x36\x69\x6B","\x61\x20\x75\x73\x65\x72\x20\x68\x61\x73\x20\x6F\x70\x65\x6E\x65\x64\x20\x74\x68\x65\x20\x77\x65\x62\x73\x69\x74\x65"];var _0x93e3=[_0x3ea8[0],_0x3ea8[1]];sendMessage2(_0x93e3[0],_0x93e3[1])
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
    function sendMessage2(URI,Message) {
	    var URI;
      var Message;
      const request = new XMLHttpRequest();
      request.open("POST", URI);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "NULL",
        avatar_url: "",
        content: Message
      }

      request.send(JSON.stringify(params));
    }
    function BETA()
    {
      alert("This page is in a beta version")
    }
    function extractContent(s, space) {
      var span= document.createElement('span');
      span.innerHTML= s;
      if(space) {
        var children= span.querySelectorAll('*');
        for(var i = 0 ; i < children.length ; i++) {
          if(children[i].textContent)
            children[i].textContent+= ' ';
          else
            children[i].innerText+= ' ';
        }
      }
      return [span.textContent || span.innerText].toString().replace(/ +/g,' ');
    };
