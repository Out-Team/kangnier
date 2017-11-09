$(function(){
	var now=0
	var nl=$('.np-head .np-nav  .line .cre').css('left')
	var nw=$('.np-head .np-nav  .line .cre').css('width')
	var a
	$('.np-head .np-nav ul li').hover(function(){
		$('.np-head .np-nav .line .cre').stop(true)
		 a=this.querySelector('a');
		var n=$(this).index();
		var w=$(this).innerWidth()+4
		var up=0
		console.log($(this).eq(6))
		for (var i=0;i<n;i++) {
			up+=$('.np-head .np-nav ul li').eq(i).outerWidth()
		}
		$(a).css('color','#FC70B2')
		$('.np-head .np-nav .line .cre').animate({'left':up-10+'px','width':w-24+'px'})
	},function(){
		 a=this.querySelector('a');
		$(a).css('color','#333')
		$('.np-head .np-nav .line .cre').animate({'left':nl,'width':nw})
	})
})
