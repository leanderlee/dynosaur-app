
var error = function (page, message) {
	$("#login-form", page).addClass("error");
	$("#login-error", page).text(message).animate({ top: 20 }, 200);
}

App.populator('login', function (page) {
	Api.isLoggedIn(function (result) {
		if (result && result.result) return App.load("home");
		$("#login-email", page).val(localStorage["email"]);
		$("#login-security", page).val(localStorage["security"]);
		$("#login-error", page).css({ top: -30 });
		$("#login-button", page).on("click", function () {
			var email = $("#login-email", page).val();
			var password = $("#login-password", page).val();
			var security = $("#login-security", page).val();
			localStorage["email"] = email;
			localStorage["security"] = security;
			$("#login-form", page).removeClass("error");
			$("#login-error", page).css({ top: -30 });
			if (!email) {
				return error(page, "Please enter an email.");
			}
			if (!password) {
				return error(page, "Please enter a password.");
			}
			if (!security) {
				return error(page, "Please enter a security code.");
			}
			Api.login(email, password+security, function (result) {
				if (!result || !result.success) {
					error(page, result.message);
				} else {
					App.load("home", "slide-up");
				}
			})
		})
	})
});