var DynoAPI = function () {
	var self = {};

	// Private methods
	var request = function (method) {
		return function (url, data, callback) {
			callback = callback || function(){};
			var data = $.extend({}, data);
			$.ajax({
				url: url,
				type: method,
				data: data,
				dataType: "json",
				success: function (resp) {
					callback.call(null, resp);
				}
			});
		};
	};
	var get = request("GET");
	var post = request("POST");

	var logged = false;
	
	// Public methods
	self.login = function (email, password, callback) {
		callback = callback || function(){};
		logged = true;
		if (email == "me@leander.ca") {
			return callback({ success: true, result: true });
		}
		return callback({ success: false, message: "Your password is wrong." });
	};
	self.isLoggedIn = function (callback) {
		callback = callback || function(){};
		callback({ success: true, result: logged });
	};
	self.apps = function (callback) {
		callback = callback || function(){};
		callback({
			success: true,
			result: [
				{
					id: "1234", name: "Awesome App 1", description: "This is a description of app 1.",
					thumbnail: "http://dynosapp.com/thumbnail1.png",
					picture: "http://dynosapp.com/picture1.png",
					options: []
				},
				{
					id: "1235", name: "Awesome App 2", description: "This is a description of app 2.",
					thumbnail: "http://dynosapp.com/thumbnail2.png",
					picture: "http://dynosapp.com/picture2.png",
					options: []
				},
				{
					id: "1236", name: "Awesome App 3", description: "This is a description of app 3.",
					thumbnail: "http://dynosapp.com/thumbnail3.png",
					picture: "http://dynosapp.com/picture3.png",
					options: []
				},
			]
		})
	};
	self.create = function (app, options, callback) {
		callback = callback || function(){};
		setTimeout(function () {
			callback({
				success: true,
				result: "http://glacial-wave-8349.herokuapp.com"
			})
		}, 5000);
	};

	return self;
};
