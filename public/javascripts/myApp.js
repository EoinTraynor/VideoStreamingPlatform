function fixScreen() {
	console.log( "ready!" );
	$( "#video-stream" ).removeClass( "OT_publisher OT_subscriber" ).removeAttr("style");
}

function streamCount(num) {
	$( '#streamCount' ).text("Stream Count: " + num);
}

function hostStreamConfirmed(id) {
	$.ajax({
		url: '/streams/' + id,
		type: 'PUT',
		success: function(result) {
			console.log(result);
		}
	});
}

function removeStream(id) {
	$.ajax({
		url: '/streams/' + id,
		type: 'DELETE',
		success: function(result) {
			console.log(result);
		}
	});
	console.log("session id: " + id);
}

var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
	console.info('Action:', e.action);
	console.info('Text:', e.text);
	console.info('Trigger:', e.trigger);

	e.clearSelection();
});

clipboard.on('error', function(e) {
	console.error('Action:', e.action);
	console.error('Trigger:', e.trigger);
});
