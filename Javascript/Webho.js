
    function sendMessage() {
	    var URI;
      var Text;
      var UserName;
      var IconURI;
      URI= document.getElementById("URIArea").value;
      Text = document.getElementById("TextArea").value;
      UserName= document.getElementById("UsernameArea").value;
      IconURI = document.getElementById("IconUrl").value;
      const request = new XMLHttpRequest();
      request.open("POST", URI);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: UserName,
        avatar_url: IconURI,
        content: Text
      }

      request.send(JSON.stringify(params));
    }
