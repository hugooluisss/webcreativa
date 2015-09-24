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