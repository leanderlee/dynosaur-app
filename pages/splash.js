App.populator('splash', function (page) {
	Api.isLoggedIn(function (result) {
		if (result && result.result) {
			App.load("home", "fade");
		} else {
			App.load("login", "fade");
		}
	})
});