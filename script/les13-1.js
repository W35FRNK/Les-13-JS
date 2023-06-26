$(function () {
	var handle = $("#custom-handle");
	$("#slider").slider({
		create: function () {
			handle.text($(this).slider("value"));
		},

		slide: function (event, ui) {
			handle.text(ui.value);

			if (ui.value <= 19) {
				$("#prijsOutput").text("Uw kosten zijn € " + (ui.value * 4.95 + 5));
			} else if (ui.value >= 80) {
				$("#prijsOutput").text("Uw kosten zijn € " + ui.value * 4, 455);
			} else {
				$("#prijsOutput").text("Uw kosten zijn € " + ui.value * 4.95);
			}
		},

		stop: function (event, ui) {
			handle.text(ui.value);
			$("#waardeOutput").text("Het gekozen aantal is " + ui.value);
		},
	});
});
