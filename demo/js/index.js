;(function($){
	binEvent();
	function binEvent(){
		$(document).on("tap","a",function(){
				$(this).addClass("att").siblings().removeClass("att");
				var _href=$(this).data("idname");
				console.log(_href)
				if(_href=="hzy"){
					$(".x_header").hide();
					console.log(1)
				}else{
					$(".x_header").show();
				}
					
		})
	}	
})(Zepto);