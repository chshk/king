/**
 * Created by Lenovo on 2017/6/16.
 */

$(function(){
    $(".ul_t li").mouseenter(function(){
        $(this).addClass("actived").siblings("li").removeClass("actived");
        $(".content").eq($(this).index()).addClass("selected").siblings(".content").removeClass("selected")
    })
})

$(function(){
    $(".shipin_2_ul1 li").mouseenter(function(){
    $(this).css("opacity","1").siblings(".shipin_2_ul1 li").css("opacity","0.7")
        $(".shipin_2_ul2 li").css("opacity","0.7")
    })
    $(".shipin_2").mouseleave(function(){
    $("li").css("opacity","1")
    })
})

//$(function(){
//    $("a").href("javascript:")
//})
$(function(){
    $(".shipin_2_ul2 li").mouseenter(function(){
        $(this).css("opacity","1").siblings(".shipin_2_ul2 li").css("opacity","0.7")
        $(".shipin_2_ul1 li").css("opacity","0.7")
    })
    $(".shipin_2").mouseleave(function(){
        $("li").css("opacity","1")
    })
})

$(function(){
    $(".shipin_1_right li").mouseenter(function(){
        $("<div class='words'><i class='iconfont icon-shipin'></i></div>").appendTo($(this))
        $(".words").css({display:"block",cursor:"pointer"}).animate({
         bottom:0,opacity:0.7},"linear",function(){
        })
    })
    $(".shipin_1_right li").mouseleave(function(){
        $(".words").remove()
    })
})

//�ֲ�ͼ
$(function () {
    var count = 0;
    var autoPlay=function(){
        count++;
        if(count >= $('.lunbo_left li').length-1){
            count = 0;
        }
        $('.lunbo_left li').eq(count).fadeIn().siblings().fadeOut();
    }
    $('.arrow-right').click(autoPlay)
    $('.arrow-left').click(function(){
        count--;
        if(count <= -1){
            count = $('.lunbo_left li').length -2;
        }
        $('.lunbo_left li').eq(count).fadeIn().siblings().fadeOut();
    })


    //�Զ��ֲ�
    var timer=setInterval(autoPlay,1000);

    //��������Զ��ֲ�ֹͣ
    $(".lunbo_left").mouseenter(function(){
        clearInterval(timer);
    });
    //����뿪�Զ��ֲ���ʼ
    $(".lunbo_left").mouseleave (function(){
        timer=setInterval(autoPlay,2000)
    })
});

//�ַ��ٰ���
$(function(){
  $(".lunbo .lunbo_right li").mouseenter(function(){
      $(this).stop().animate({
          height:100,
          background:"linear-gradient( to top,#000,red)"
      }).siblings().stop().animate({
          height:36
      })
  })
    $(".lunbo .lunbo_right").mouseleave(function(){
        $(".lunbo .lunbo_right li").stop().animate({
            height:43
        })
    })
})

//��������������
$(function(){
    $('.nav').mouseenter(function(){
        $('.nav_1').css({display:"block"
        ,backgroundColor:"rgba(0,0,0,0.4)"}).stop()
    })
    $(".nav").mouseleave(function(){
        $('.nav_1').css("display","none").stop()
    })
})

//�ű���������
$(function(){
    $(".search").mouseenter(function(){
        $(".upkuang").css("display","block")
    })
    $(".search").mouseleave(function(){
        $(".upkuang").css("display","none")
    })
})

//ҳ�����ͼƬ���롣

$(function(){
    $(".shuaige").animate({left:100},2000,"swing",function(){
    })
})
