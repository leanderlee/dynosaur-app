App.populator('app', function (page, app) {
	$(page).find(".app-title").text(app.name);
	$(page).find(".app-description").text(app.description);
	if (!app.options.length) {
		$("#options-list", page).text("There are no options.");
	} else {
		$("#options-list", page).empty();
	}
	for (var i = 0; i < app.options.length; i++) {
		var source = $("#option-" + app.options[i].type + "-template").html();
		var template = swig.compile(source);
		var html = template({ id: i, option: app.options[i] });
		$(html).appendTo($("#options-list", page));
	}
	$(".app-create", page).on("click", function () {
		var options = {};
		$("#options-list .app-option", page).each(function () {
			var id = $(this).attr("data-id");
			if (!id) return;
			var option = app.options[id];
			if (!option) return;
			options[option.property] = $(this).val();
		});
		App.load("create", { app: app, options: options });
	});
});