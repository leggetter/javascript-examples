function MyConnectionListener() {
	this.connectionStatusUpdated = function(sStatus) {
		log("connectionStatusUpdated: " + sStatus);

		var imgElement = document.getElementById('connection_status_image');
		var msgElement = document.getElementById('connection_status_message');
		var sMsg;

		switch (sStatus) {
			 case kwwika.ConnectionStatus.CONNECTING:
			    sMsg = "Connecting...";
		        imgElement.setAttribute("src", "images/connecting.png");
		        break;
		    case kwwika.ConnectionStatus.RECONNECTED:
		   	 	sMsg = "Reconnected.";
		        imgElement.setAttribute("src", "images/connecting.png");
		        break;
		    case kwwika.ConnectionStatus.CREDENTIALS_RETRIEVED:
				sMsg = "Credentials retrieved.";
		        imgElement.setAttribute("src", "images/connecting.png");
		        break;
		    case kwwika.ConnectionStatus.CONNECTED:
		   		sMsg = "Connected.";
		        imgElement.setAttribute("src", "images/connecting.png");
		        break;
		    case kwwika.ConnectionStatus.LOGGED_IN:
				sMsg = "Logged in.";
		   	 	imgElement.setAttribute("src", "images/loggedin.png");
		        break;
		    default:
				sMsg = "Not connected.";
		   	 	imgElement.setAttribute("src", "/yourapp/images/notconnected.png");
		        break;
		}
		msgElement.innerHTML = sMsg;
		imgElement.setAttribute("alt", sMsg);
		imgElement.setAttribute("title", sMsg);
	}
};