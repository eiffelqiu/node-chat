var socket = io.connect();

angular.module('chatApp', []).controller('MainController', function ($scope) {
  	$scope.message = "hello chat";
});

socket.on('chat', function(data) {
	var msg = data.nick + ' : ' + data.message;
	$('textarea').val($('textarea').val() + msg + '\n');
	$scope.message = "xxx";
});

// Handle UI
$(function() {
	// Set nickname
	$('#nick').on('click', function() {
		socket.emit('nick', $('#nickText').val());
	});

	// Send chat message
	$('#chat').on('click', function() {
		socket.emit('chat', {
			message: $('#chatText').val()
		});
	});
});	
	