$(function(){
    $(window).load(function() {
        setTimeout(function() {
            $("#content").show();
            $('#loader-wrapper').hide();
            //$(".pace-running").hide();
        }, 1000);
    });
    binding();
});

function binding(){
	$("#list_item_home").on("click",function(){
		clear_active_my();
		set_active_my(this);
	});    	
	$("#list_item_red_social").on("click",function(){
		clear_active_my();
		set_active_my(this);
	});    	
	$("#list_item_mensajeria").on("click",function(){
		clear_active_my();
		set_active_my(this);
	});    	
	$(document).on("scroll",function(){
		console.log(scrollY);
		console.log($('#redes_sociales').offset().top);
		if(parseInt($('#redes_sociales').offset().top - 90) < scrollY && scrollY < (parseInt($('#mensajeria').offset().top) - 90)){
			clear_active_my();
			set_active_my("#list_item_red_social");
		}else{
			if(scrollY > (parseInt($('#mensajeria').offset().top) - 90)){
				clear_active_my();
				set_active_my("#list_item_mensajeria");
			}else{
				if(parseInt($('#redes_sociales').offset().top - 90) > scrollY){
					clear_active_my();
					set_active_my("#list_item_home");
				}
			}	
		}
	});
}
function clear_active_my(){
	$(".active_my").removeClass("active_my");
}
function set_active_my(item){
	$(item).addClass("active_my");
}

//alert(scrollY);