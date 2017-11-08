$(function(){

	var jionBannerBox = $('.jionBanner');
	var wheelLise = $('.jionBanner .jionBannerBox');	
	var wheel1 = $('.jionBanner .jionBannerBox').not($('.jionBanner .jionBannerBox').eq(0));
	wheel1.css("left","100%");
	var gyBannerBtn = $('.bannerBtn');
	var gyBannerDoc = $('.bannerBtn li');
	// console.log(gyBannerDoc);

	// 加盟轮播

	var now=0;
	var next=0;
	var flag1 = true;
	function jionMove(goto1='left') {
		if(!flag1){
			return;
		}
		flag1=!flag1;
		if(goto1=="left"){
			next++;
			if(next>wheelLise.length-1){
				next=0;
			}
			$(wheelLise[now]).css("left","0");
			$(wheelLise[next]).css("left","100%");
			$(wheelLise[now]).animate({left:"-100%"},1000);
			$(wheelLise[next]).animate({left:"0"},1000,function(){
				flag1=true;
			});
		}
		if(goto1=='right'){
			next--;
			if(next<0){
				next=wheelLise.length-1;
			}
			$(wheelLise[now]).css("left","0");
			$(wheelLise[next]).css("left","-100%");
			$(wheelLise[now]).animate({left:"100%"},1000);
			$(wheelLise[next]).animate({left:"0"},1000,function(){
				flag1=true;
			});
		}
		$(gyBannerDoc[next]).addClass('active');
		$(gyBannerDoc[now]).removeClass('active');
		now = next;
		
	}
	var t1 = setInterval(function(){
		jionMove();
	},3000)

	for(var j=0; j<gyBannerDoc.length-1; j++) {
		gyBannerDoc.click(function(){
			if(j>now) {
				next = j-1;
				jionMove('right');
			}else if(j<now){
				next = j+1;
				jionMove('left');
			}
		})
	}

	// 企业轮播

	var qiye = $('.wheelBox');
	var qiye1 = $('.wheelBox').not($('.wheelBox').eq(0));
	qiye1.css("left",'100%');

	var btnBox = $(".slide");
	var btnLeft = $(".gy-container .inviro .gy-inviro .slide .slideLeft");
	var btnRight = $(".gy-container .inviro .gy-inviro .slide .slideRight");
	var doc = $('.btn li');


	btnLeft.hover(function(){
		$(this).css({background: "rgb(255,55,149)"});
	},function(){
		$(this).css({background: "rgb(67,67,67)"});

	})

	btnRight.hover(function(){
		$(this).css({background: "rgb(255,55,149)"});
	},function(){
		$(this).css({background: "rgb(67,67,67)"});

	})

	var now1 = 0;
	var next1 = 0;
	var flag = true;
	function qiyeMove(goto='left') {
		if(!flag){
			return;
		}
		flag=!flag;
		if(goto=="left"){
			next1++;
			if(next1>qiye.length-1){
				next1=0;
			}
			$(qiye[now1]).css("left","0");
			$(qiye[next1]).css("left","100%");
			$(qiye[now1]).animate({left:"-100%"},1000);
			$(qiye[next1]).animate({left:"0%"},1000,function(){
				flag=true;
			});	
		}
		if(goto=='right'){
			next1--;
			if(next1<0){
				next1=qiye.length-1;
			}
			$(qiye[now1]).css("left","0");
			$(qiye[next1]).css("left","-100%");
			$(qiye[now1]).animate({left:"100%"},1000);
			$(qiye[next1]).animate({left:"0%"},1000,function(){
				flag=true;
			});
		}
		$(doc[next1]).addClass('active');
		$(doc[now1]).removeClass('active');
		now1 = next1;
	}

	var t2 = setInterval(function(){
		qiyeMove();
	},5000)


	btnBox.hover(function(){
		clearInterval(t2);	
	},function(){
		t2 = setInterval(function(){
			qiyeMove();
		},5000)
	})

	btnLeft.click(function(){
		qiyeMove(goto="left");
	})
	btnRight.click(function(){
		qiyeMove(goto="right");
	})

	
	for(var i=0; i<doc.length-1; i++) {
		doc.click(function(){
			if(i>now) {
				next = i-1;
				qiyeMove('right');
			}else if(i<now){
				next = i+1;
				qiyeMove('left');

			}
		})
	}

})