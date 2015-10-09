$( document ).ready(function() {
    $("#btnCerrar").click(function(){
    	$(".footer").hide();
    	$(".footer2").show();
    });
    
    $("#btnAbrir").click(function(){
    	$(".footer").show();
    	$(".footer2").hide();
    });
});

//nosotros
$( document ).ready(function() {
	$(".mas").click(function(){
		$('.informacion[el="' + $(this).attr("el") + '"]').toggle();
		$('img[el="' + $(this).attr("el") + '"]').toggleClass("opaco");
	});
	
	$(".mas").each(function(){
		$('.informacion[el="' + $(this).attr("el") + '"]').hide();
		$('img[el="' + $(this).attr("el") + '"]').removeClass("opaco");
	});
});

//Galeria

$( document ).ready(function() {
	var fotos = new Array();
	var indiceImg = 0;
	$(".elementos .foto").each(function(){
		fotos.push($(this).attr("src"));
	});
	
	$(".plus").click(function(){
		indice = $(this).attr("img") - 1;
		
		setData();
	});
	
	$("#modal .izq").click(function(){
		indice--;
		
		indice = indice < 0?(fotos.length - 1):indice;
		setData();
	});
	
	$("#modal .der").click(function(){
		indice++;
		
		indice = indice >= fotos.length?0:indice;
		setData();
	});
	
	function setData(){
		$(".contenidoVisual").html('<img class="imagenModal" src="' + fotos[indice] + '" />');
		$("#modal .contenido .datos h1").html(imgGaleria[indice]['titulo']);
		$("#modal .contenido .datos p").html(imgGaleria[indice]['descripcion']);
	}
});

//Oficinas
$( document ).ready(function() {
	$(".oficinas .data .texto").hide();
	$(".oficinas .data .empresa").click(function(){
		var empresas = $(".data .empresas");
		var pos = $(this).position();
		var texto = $(".data .texto");
		
		//texto.height($(this).height());
		y = pos.left;
		texto.removeClass("flecha2");
		if (pos.left + $(this).width() + 10 > empresas.width()){
			y -= $(this).width();
			texto.addClass("flecha2");
		}else
			y += $(this).width();
		
		texto.css({top: pos.top, left: y, position:'absolute'});
		if ($(this).attr("visible") == 1){
			$(this).attr("visible", 0);
			$(".oficinas .data .texto").hide();
		}else{
			$(".oficinas .data .texto").show();
			
			$(".oficinas .data .empresa").each(function(){
				$(this).attr("visible", 0);
			});
			
			$(this).attr("visible", 1);
		}
	});
});