var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$lista = $('#contenido'),
	$post = $('.item').first();

if (localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarOcultarFormulario(){
	$form.slideToggle();
	$lista.slideToggle();
	return false;
}
function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a') // Me permite clonar el css
		.text(titulo)
		.attr('href', url);

	$clone.hide(); //oculta el clone

	$lista.prepend($clone); // clona y inserta dentro del primero
	mostrarOcultarFormulario();
	$clone.fadeIn();//animar

	return false;
}

//eventos
$('#publicar_nav a').click( mostrarOcultarFormulario );
$('#formulario').on( 'submit',agregarPost );