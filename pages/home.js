
App.populator('home', function (page) {
	Api.isLoggedIn(function (result) {
		if (!result || !result.result) {
			return App.load("login");
		}
		$("#apps-list", page).empty().text("Loading...");
		Api.apps(function (apps) {
			if (!apps.success) return $("#apps-list", page).text("Error! " + apps.message);
			$("#apps-list", page).empty()
			apps = apps.result || [];
			var dyno = 0;
			var source = $("#app-template").html();
			var template = swig.compile(source);

			for (var i = 0; i < apps.length; i++) {
				var html = template({ app: apps[i], dyno: (dyno%4)+1 });
				dyno++;
				$(html).data("app", i).on('click', function () {
					console.log(apps[$(this).data("app")]);
					App.load("app", apps[$(this).data("app")]);
				}).appendTo($("#apps-list", page));
			}
		})
	});
});