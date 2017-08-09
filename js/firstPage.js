//fullPage
$(function(){
	$('#app').fullpage({
		sectionsColor: ['#fff', '#fff', '#fff'],
        scrollOverflow: true,
        scrollOverflowOptions: {
            scrollY: false
        }
	});
});


//显示隐藏
$(function() {
	$('#nav').mouseover(function() {
		$('#under_nav').css('display', 'inline-block')
	})
	$('#under_nav').mouseout(function() {
		$('#under_nav').css('display', 'none')
	})
})

//轮播
$(function() {
	var current = 0,
		index;
	var timer = setInterval(rotate, 2000);
	$('#rotate_ul').mouseover(function() {
		clearInterval(timer)
	}).mouseout(function() {
		timer = setInterval(rotate, 2000)
	})
	$('.b_l_ul2 li').mouseover(function() {
		clearInterval(timer);
		current = $(this).index();
		$('.b_l_ul2 li a').removeClass('rn');
		$('.b_l_ul2 li').eq(current).children('a').addClass('rn');
		$('#rotate_ul').animate({left: current * -604}, 1000);	
	}).mouseout(function() {
		timer = setInterval(rotate, 2000)
	})


	function rotate() {
		if(current === 5) {
			current = 0;
			$('#rotate_ul').css('left', 0);
		}
		current++;	
		$('#rotate_ul').animate({left: current * -604}, 1000);	
		$('.b_l_ul2 li a').removeClass('rn');
		index = current >= 5 ? 0 : current;
		$('.b_l_ul2 li a').eq(index).addClass('rn');		
	}
})

//Tab标签
$(function() {
	var datas = [
	['你想看生殖、看繁衍，去看《动物世界》呀！', '我心中有一个宝藏，它空无一物，它价值千金。', '没有逻辑的正能量就是负能量', '成功的辩手都是不同的，因为他们走的路不同', '男人的心理就是既希望你赚钱养家，又希望你貌美如花，等于干两份工作领一只鸡的钱，提供的确是双拼的服务', '人间三情，无一不傻', '爱不是一蔬一饭，肌肤之亲，它是是疲惫生活里的英雄梦想'],
	['要自由的人，其实要担最大的责任','接受彼此的小众才是大众', '水可以熄灭火，水不会改变火', '我就算是娘炮也要做个有质感的娘炮', '我都娘成这样了还不想AA制，你个大老爷们儿还想AA制', '如果给我大城市的一张床，我有信心在这张床上，奋斗出一套房', '非主流的世界，有了我，才成了主流', '美好的东西都会掺杂虚伪的成分'],
	['人生很吊诡的地方在于，你往往最心动的那个时刻，都是在你还没有准备好的时候遇到', '歧视不单单是永远对你恶语相向，歧视也往往是在划分你我', '每一个草包，都有推倒世界的梦，却只有被世界推倒的命', '灵魂就是你所有的原则组成的', '更大的进步，是允许我们挑剔这种关怀', '我终于知道为什么现在宇宙中心呼唤爱很容易了，因为爱很万能，却无法验证', '我们说开天辟地，中国人说天长地久'],
	['被误会是表达者的宿命', '成功地把一个欠债还钱变成了杀人偿命', '你们要知道一道菜上菜的时候，那前5分钟是最重要的时间', '每个人都知道我很喜欢吃鸡', '我们很害怕跟别人交流，怕人家生气，怕人家会离开', '做不一样的烟火', '我不愿生死相隔之时，再明何为情何为义，有义在而命无，又有何意。', '我们常常忘记自己在一条河上，我们总记得自己在一条船上'],
	['心里很苦的人，一丝丝甜就能填满', '我衡量幸福有一个简单的标准，是不是有能力对自己不喜欢的事物说不', '我们常常不够爱自己，我们常常透过爱我们的人才能发现我们自己有多么好', '你不是过了一个比较少的生活，你是过了一个跟别人不一样的生活', '你是那颗星星，我是你旁边的这颗，我的整个轨迹是被你影响', '人类怎么发现新的世界？是因为走错了路', '生活绝不会因为你胆小怯懦而饶过你', '一个没有人吃过的餐馆，你是有多饿你才想会进去吃'] 
	]
	$('.b_m_ul2 li').each(function() {
		$(this).html(datas[0][$(this).index()])
	})
	$('.b_m_ul1 li').mouseover(function() {
		var i = $(this).index();
		$('.b_m_ul2 li').each(function() {
			$(this).html(datas[i][$(this).index()])
		})
	})
})


//标签云
$(function() {
	var r = 80;	
	createLabel()	
	setLabelToBall();
	setInterval(function() {
		rotateX(Math.PI/ 100)
		rotateY(Math.PI/ 100)
	}, 20)

	function createLabel() {
		var labels = ['101','102','103','104','105','106','107','108','109','110','111','112','113','114'];
		var html = '';
		for(var i = 0; i < 14; i++) {
			html +=  "<img class='label_item' src='images/"+labels[i]+".jpg'/>";
		}
		$('#container').html(html)
	}

	function setLabelToBall() {
		var len = $('.label_item').length,
			opa = 1,
			degree, a, b, x, y, z; 
		for(var k = 0; k < len; k++) {
			degree = (2 * (k+1) - 1) / len - 1;
			a = Math.acos(degree);
			b = a * Math.sqrt(len * Math.PI);
			x = r * Math.sin(a) * Math.cos(b);
			y = r * Math.sin(a) * Math.sin(b);
			z = r * Math.cos(a);
			$('.label_item').eq(k)[0].dataset.x = x;
			$('.label_item').eq(k)[0].dataset.y = y;
			$('.label_item').eq(k)[0].dataset.z = z;
			console.log($('.label_item').eq(k)[0].dataset)
			if(a > Math.PI/2) {
				$('.label_item').eq(k).css({
					transform: "translateZ("+z+"px) translateX("+x+"px) translateY("+y+"px)",
					opacity: .5,
					zIndex: -9
				}).animate({width: 30}, 6000)
			} else {
				$('.label_item').eq(k).css({
					transform: "translateZ("+z+"px) translateX("+x+"px) translateY("+y+"px)",
					opacity: 1,
					zIndex: 9
				}).animate({width: 60}, 6000)
			}
		}
	}

	function rotateX(degreeX) {
		var degree = degreeX,
			len = $('.label_item').length,
			cos = Math.cos(degree),
			sin = Math.sin(degree),
			x, y, z;
		for(var i = 0; i < len; i++) {
			x = $('.label_item')[i].dataset.x;
			y = $('.label_item')[i].dataset.y;
			z = $('.label_item')[i].dataset.z;
			var y1 = y * cos - z * sin,
				z1 = z * cos + y * sin;
			$('.label_item')[i].dataset.y = y1;
			$('.label_item')[i].dataset.z = z1;
			z1 < 0 ? $('.label_item').eq(i).animate({opacity: .5, width: 30}) : $('.label_item').eq(i).animate({opacity: 1, width: 60});
			$('.label_item').eq(i).css('transform', "translateZ("+z1+"px) translateX("+x+"px) translateY("+y1+"px)")
		}
	}

	function rotateY(degreeY) {
		var degree = degreeY,
			len = $('.label_item').length,
			cos = Math.cos(degree),
			sin = Math.sin(degree),
			x, y, z;
		for(var i = 0; i < len; i++) {
			x = $('.label_item')[i].dataset.x;
			y = $('.label_item')[i].dataset.y;
			z = $('.label_item')[i].dataset.z;
			var x1 = x * cos - z * sin,
				z1 =  z * cos + x * sin;
			$('.label_item')[i].dataset.x = x1;
			$('.label_item')[i].dataset.z = z1;
			z1 < 0 ? $('.label_item').eq(i).animate({opacity: .5, width: 30}) : $('.label_item').eq(i).animate({opacity: 1, width: 60});
			$('.label_item').eq(i).css('transform', "translateZ("+z1+"px) translateX("+x1+"px) translateY("+y+"px)")
		}
	}

})

//3D视图
$(function() {
	var iz = 0,
		css = '',
		html = '',
		iNow = 0
	for(var i = 0; i < 18; i++) {
		i > 10 ? iz-- : iz++;
		css += `.page3 .game .rotate3d li:nth-of-type(${i+1}) {
				z-index: ${iz};
				}
				.page3 .game .rotate3d li:nth-of-type(${i+1}) a {
					background-position: 0px ${-i * 26}px;
				}`
		html += '<li><a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a><span></span><span></span></li>'
	}
	$('#css').html(css)
	$('#r3d').html(html)

	$('.g_nav a').mouseover(function() {
		$('.g_nav a').removeClass('active');
		var a = $(this).index();
		for(var i = 0; i < 18; i++) {
			$('#r3d li').eq(i).css({
				transition: (Math.abs(a - iNow) * 0.5) + 's ' + (i * 80) + 'ms all ease',
				transform: `translateZ(-420px) rotateY(${-a * 90}deg)`
			})
		}
		iNow = a;
		$(this).addClass('active')
	})
})