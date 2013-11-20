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
	
	// Public methods
	self.login = function (email, password, callback) {
		callback = callback || function(){};
		get("/login", { email: email, password: password }, callback);
	};
	self.isLoggedIn = function (callback) {
		callback = callback || function(){};
		get("/logged_in", { email: email, password: password }, callback);
	};
	self.apps = function (callback) {
		callback = callback || function(){};
		get("/apps", { email: email, password: password }, callback);
	};
	self.create = function (app, options, callback) {
		callback = callback || function(){};
		app = app || "";
		options = JSON.stringify(options || {});
		post("/create", { app: app, options: options }, callback);
	};

	return self;
};
