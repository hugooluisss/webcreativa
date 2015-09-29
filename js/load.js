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

$( document ).ready(function() {
	$(".mas").click(function(){
		$('.informacion[el="' + $(this).attr("el") + '"]').toggle();
	});
	
	$(".mas").each(function(){
		$('.informacion[el="' + $(this).attr("el") + '"]').hide();
	});
});