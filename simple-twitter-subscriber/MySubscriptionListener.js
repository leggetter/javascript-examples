function MySubscriptionListener() {
	this.count = 0;
	this.maxMessages = 25;
	
	function prepareHTML(sScreenName, sUserAvatar, sMessageText, sId, sCreatedAt) {
		return "<div class='message'>" +
				"	<div class='profile'>" +
                "       <a href='http://twitter.com/" + sScreenName + "' target='_blank'>" +
				"		    <img alt='" + sScreenName + "' width='48' height='48' src='" + sUserAvatar + "' class='avatar' />" +
				"	    <a>" +
                "   </div>" +
				"	<div class='messagebody'>" +
				"		<span class='screenName'>" + sScreenName + "</span>" +
				"		<span class='text'>" + sMessageText + "</span>" +
				"		<span class='time'>@<a href='http://twitter.com/"+sScreenName+"/statuses/"+sId+"'>"+sCreatedAt+"</a></span>" +
				"	</div>" +
				"	<div class='clear'></div>" +
				"</div>";
	}
	
	this.topicUpdated = function(oSub, mUpdate) {
		if (mUpdate.Text) {
         
			var element = document.getElementById('latest_update');
			
			element.innerHTML = prepareHTML(mUpdate["ScreenName"], mUpdate["UserProfileImageUrl"], mUpdate["Text"], mUpdate["Id"], mUpdate["CreatedAt"]) + element.innerHTML;
			
			if (this.count >= this.maxMessages) {
				element.removeChild(element.lastChild);
			} else {
				++this.count;
			}
		}
	};

	this.topicError = function(oSub, sError) {
		log("Error: " + sError);
	};
};

