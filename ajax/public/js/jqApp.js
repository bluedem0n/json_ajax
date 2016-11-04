$(document).ready(function () {
	$("#boton").click(function () {
/*		$.ajax({
			url: "http://localhost:8080/demo.html",
			type: "GET",
			success: function (response) {
				$("#ajax").html(response);
			}
		})*/
		$("#ajax").load("http://localhost:8080/demo.html");
	});
});