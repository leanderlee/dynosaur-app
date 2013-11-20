
App.populator('home', function (page) {
	var apps = [
		{ name: "Awesome App 1", description: "This is a description of app 1."},
		{ name: "Awesome App 2", description: "This is a description of app 2."},
		{ name: "Awesome App 3", description: "This is a description of app 3."},
		{ name: "Awesome App 4", description: "This is a description of app 4."},
		{ name: "Awesome App 5", description: "This is a description of app 5."},
		{ name: "Awesome App 6", description: "This is a description of app 6."},
		{ name: "Awesome App 7", description: "This is a description of app 7."},
		{ name: "Awesome App 8", description: "This is a description of app 8."},
	];
	var source = $("#app-template").html();
	var template = swig.compile(source);

	for (var i = 0; i < apps.length; i++) {
		var html = template({ app: apps[i] });
			console.log(apps[i]);
		$(html).on('click', function () {
			App.load("app", { app: apps[i] });
		}).appendTo($("#apps-list", page));
	}
});