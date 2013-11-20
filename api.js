var DynoAPI = function () {
	var self = {};
	var session = "";
	
	// Private methods
	var request = function (method) {
		return function (url, data, callback) {
			callback = callback || function(){};
			var data = $.extend({ session: session }, data);
			$.ajax({
				url: "http://dynosapp.com" + url,
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
		post("/login", { username: email, password: password }, function (result) {
			session = result.session;
			delete result.session;
			callback(result)
		});
	};
	self.isLoggedIn = function (callback) {
		callback = callback || function(){};
		get("/logged_in", {}, callback);
	};
	self.apps = function (callback) {
		callback = callback || function(){};
		get("/apps", {}, callback);
	};
	self.create = function (app, options, callback) {
		callback = callback || function(){};
		app = app || "";
		options = JSON.stringify(options || {});
		post("/create", { app_id: app, options: options }, callback);
	};

	return self;
};
