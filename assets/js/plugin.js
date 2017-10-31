$.fn.pinterest = function(listaImagenes)
{
	if (listaImagenes.length !== 0)
	{ 
		for (var i = 0; i < listaImagenes.length; i++)
		{
			let contImagenes = '<img alt="pinterest" class="contImagenes">';
			let url = 'https://i.pinimg.com/' + listaImagenes[i]; 
			let $cont_imagenes = $(contImagenes);
			$cont_imagenes.attr('src', url);
			$(this).append($cont_imagenes);
		};
	}
	else
	{
		$(this).html('no hay imagenes para mostrar');
	}
}
