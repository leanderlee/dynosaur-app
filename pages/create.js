App.populator('create', function (page, making) {
	if (!making.app) return App.load("home");
	$(".app-loading", page).show();
	$(".app-loaded", page).hide();
	Api.create(making.app.id, making.options, function (link) {
		$(".app-loading", page).hide();
		$(".app-loaded", page).show();
		$(".app-link", page).attr("href", link.result).on("click", function () {
			App.load("home");
		});
	});
});