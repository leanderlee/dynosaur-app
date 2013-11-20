App.populator('app', function (page, app) {
	$(page).find(".app-title").text(app.name);
	$(".app-description", page).text(app.description);
});