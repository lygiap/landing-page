
$(document).ready(function(){

	// ADICIONANDO SCROLL SUAVE PARA QUALQUER LINK
	$("a").on('click', function(event) {
		// Ter certeza de que this.hash tem um valor antes de sobrepor o comportamento padrão
		if (this.hash !== "") {
			event.preventDefault(); // Cancelando o comportamento padrão de clique da âncora

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				// Adicione o hash (#) à URL no término da rolagem
				//window.location.hash = hash;
			});
		}
	});

});