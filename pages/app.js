App.populator('app', function (page, app) {
	$(".app-title", page).text(app.name);
	$(".app-description", page).text(app.description);
});