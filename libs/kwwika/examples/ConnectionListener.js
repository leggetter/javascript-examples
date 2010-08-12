kwwika.namespace("kwwika.examples");

kwwika.examples.ConnectionListener = function(logger, imageId, messageId)
{
    this.logger = logger;
    this.imageId = imageId || 'connection_status_image';
    this.messageId = messageId || 'connection_status_message';
	this.connectionStatusUpdated = function(sStatus) {
		this.logger.log("connectionStatusUpdated: " + sStatus);

		var imgElement = document.getElementById(this.imageId);
		var msgElement = document.getElementById(this.messageId);
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