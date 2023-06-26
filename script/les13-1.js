$(function () {
	var handle = $("#custom-handle");
	$("#slider").slider({
		create: function () {
			handle.text($(this).slider("value"));
		},

		slide: function (event, ui) {
			handle.text(ui.value);

			if (ui.value <= 19) {
				$("#prijsOutput").text("€ " + (ui.value + 4.95));
			} else if (ui.value >= 80) {
				$("#prijsOutput").text("€ " + ui.value * 0.9);
			} else {
				$("#prijsOutput").text("€ " + ui.value);
			}
		},
	});
});
