var DynoAPI = function () {
	var self = {};

	// Private methods
	var request = function (url, data, callback) {
		callback = callback || function(){};
		var data = $.extend({}, data);
		$.ajax({
			url: url,
			type: "POST",
			data: data,
			dataType: "json",
			success: function (resp) {
				callback.call(null, resp);
			}
		});
	};

	// Public methods
	self.login = function (email, password, callback) {
		callback = callback || function(){};
		request("/auth/login", { email: email, password: password }, function (data) {
			if (data.success) {
				callback.call(null, null, data.user);
			} else {
				callback.call(null, data);
			}
		});
	};
	
	return self;
};
