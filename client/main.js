/*
	
	# Step 3
	  Replace the word SDK with the name of your package.
	  
	  Then, open ./client/main.css

*/

Template.MeteorToys_debug.helpers({
	'KadiraDebugPresent': function () {
		if (Package["kadira:debug"]) {
			return true;
		}
	}
})

Template.MeteorToys_debug_toggle.events({
	'click': function () {
		var debugUrl = 'http://debug.kadiraio.com/debug?url=http://' + location.host;
		window.open(debugUrl,'_blank');
	}
});

Template.MeteorToys_debug_header.events({
	'click .MeteorToys_debug_header': function () {
		// From ToyKit API
		MeteorToys.closeToy();
		
		// From Package itself
		ToyKit.onClose();
	},
	'click .MeteorToys_debug_button': function (e,t) {
		// Stop the previous click event from propagating,
		// otherwise clicking the button would close the toy
		e.stopPropagation();
		
		// Increment the count of the counter
		// Notice that Meteor Toys do not use Session
		// count = MeteorToys.get("debug/counter");
		// MeteorToys.set("debug/counter", count + 1);
	}
});

Template.MeteorToys_debug_content.helpers({
	'alreadyInstalled': function() {
		if(Package["kadira:debug"]) {
			return true;
		} else {
			return false;
		}
	},

	'debugUrl': function() {
		var debugUrl = "http://debug.kadiraio.com/debug?url=http://" + location.host;
		return debugUrl;
	}
});