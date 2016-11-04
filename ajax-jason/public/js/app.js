var plantilla = "<div>" +
	"<p><strong>Nombre: </strong> _nombre_</p>" +
	"<p><strong>Apellido: </strong> _apellido_</p>" +
	"<p><strong>Edad: </strong> _edad_</p>" +
	"<p><strong>Fecha Nacimiento: </strong> _fecha_</p>" +
	"<p><strong>Email: </strong> _email_</p>" +
	"</div>";

$(document).ready(function () {
	$.ajax({
		url: "http://localhost:8080/demo.json",
		type: "GET",
		success: function (response) {
			$("#datos").html(plantilla.replace("_nombre_", response.nombre).replace("_apellido_", response.apellido).replace("_edad_", response.edad).replace("_fecha_", response.fechaNacimiento).replace("_email_", response.email));
			var hobbies = "<ul>"
			for (var i = 0, l = response.hobbies.length; i < l; i++) {
				hobbies += "<li>" + response.hobbies[i] + "</li>";

			}
			hobbies += "</ul>";
			$("#hobbies").html(hobbies);
		},
		error: function (error) {
			console.log(error);
		}

	});
});