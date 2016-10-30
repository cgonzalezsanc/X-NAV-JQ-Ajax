$(document).ready(function() {
	var peticion = $.ajax({
	    type: "GET",
	    url: "documento.txt",
	    cache: false
	});
	peticion.done(function(texto) {
		$("#texto1").html(texto);
	});
	$("#texto1").click(function() {
		var peticion = $.ajax({
			type: "GET",
			url: "documento.txt",
			cache: false
		});
		peticion.done(function(texto) {
			$("#texto2").html("Otra vez: " + texto);
		});
	});
});
