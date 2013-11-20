
App.populator('home', function (page) {
	var apps = [
		{ name: "Awesome App 1", description: "This is a description of app 1.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
		{ name: "Awesome App 2", description: "This is a description of app 2.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
		{ name: "Awesome App 3", description: "This is a description of app 3.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
		{ name: "Awesome App 4", description: "This is a description of app 4.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
		{ name: "Awesome App 5", description: "This is a description of app 5.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
		{ name: "Awesome App 6", description: "This is a description of app 6.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
		{ name: "Awesome App 7", description: "This is a description of app 7.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
		{ name: "Awesome App 8", description: "This is a description of app 8.", options: [{ property: "name", type: "text", "default": "unnamed app" }] },
	];
	var source = $("#app-template").html();
	var template = swig.compile(source);

	App.load("app", apps[0]);
	for (var i = 0; i < apps.length; i++) {
		var html = template({ app: apps[i] });
		$(html).data("app", i).on('click', function () {
			console.log(apps[$(this).data("app")]);
			App.load("app", apps[$(this).data("app")]);
		}).appendTo($("#apps-list", page));
	}
});