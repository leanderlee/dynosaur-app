App.populator('login', function (page) {
	$("#login-email", page).val(localStorage["email"]);
	$("#login-button", page).on("click", function () {
		var email = $("#login-email", page).val();
		var password = $("#login-password", page).val();
		localStorage["email"] = email;
		$("#login-form", page).removeClass("error");
		Api.login(email, password, function (result) {
			if (!result || !result.success) {
				$("#login-form", page).addClass("error");
				return $("#login-error", page).show().text(result.message);
			} else {
				App.load("home", "slide-up");
			}
		})
	})
});