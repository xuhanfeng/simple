;(function($){
	binEvent()
// 引导页动画
	// var i=0,
	// 	w=$(window).width();
	// $("#yindao ul").on("swipeLeft",function(){
	// 	i++;
	// 	if(i>=$(this).find('li').length-1){
	// 		i=$(this).find('li').length-1
	// 	}
	// 	change()
	// }).on("swipeRight",function(){
	// 	i--; 
	// 	if(i<=0){
	// 		i=0
	// 	}
	// 	change()
	// })
	// function change(){
	// 	$(".yindao ul").find('li').eq(i).animate({			
	// 		"left":0,		
	// 	},1000).siblings().animate({
	// 		"left":"100%"
	// 	},1000)
	// }
	//点击进入首页
    function binEvent(){
			//事件委托
			$(document).on("click","a",function(e){
				e.preventDefault()   //取消默认行为
			});
		
			$(document).on("tap","a",function(){
				var _href=$(this).attr("href"); 
				console.log(_href);			
				$(_href).animate({"left":"0"}).siblings().animate({"left":"-100%"});
		})
	}
	//点击ul滚动条滑动
	// $('.nav ul li').click(function(){
	// var index=$(this).index();
	// var width=$(this).width();
	// var num=index*width;
	// $('.green').animate({'marginLeft':num+'px'},200)
	// $(this).find($('a')).css({'color':'#0fc441'})
	// })
	
})(Zepto);