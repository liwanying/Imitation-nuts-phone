/**
 * Created by ��� on 2015/12/1.
 */
$(document).ready(function () {
    $(".cicle").append("<ul></ul>");
    var imgs = $(".ad-img1").children();
    for (var i = 0; i < imgs.length; i++) {
        var li = document.createElement("li");
        $(".cicle ul").append("<li></li>");
    }
    $(".cicle li").eq(0).addClass("cur");
    var num = 0,timer1 = null;
    timer1 = setInterval(right,3000);
    $(".ad-img").mouseenter(function() {
        clearInterval(timer1);
    })
    $(".ad-img").mouseleave(function() {
        clearInterval(timer1);
        timer1 = setInterval(right,3000);
    })
    $(".cicle li").click(
        function(){
            if(!$(".cicle li").is(":animated")){
                num = $(this).index();
                changeImg();
            }
        }
    );
    function right() {
        if(!$(".cicle li").is(":animated")) {
            if(num<imgs.length-1) {
                num++;
            }else {
                num =0;
            }
            changeImg();
        }
    }
    function changeImg() {
        $(".ad-img1 a").eq(num).fadeIn(800).siblings().fadeOut(800);
        $(".cicle li").eq(num).addClass("cur").siblings().removeClass("cur");
    }
    $(".shop").mouseenter(function() {
        $(this).css({"background-color":"#F3F3F3","border-radius":"4px 0"});
        $(".car").css("display","block");
    })
    $(".shop").mouseleave(function() {
        $(this).css("background-color","#DEDFE3");
        $(".car").css("display","none");
    })
    $(window).scroll(function() {
        $(".gotop_a").slideDown(300);
        leader = $(document).scrollTop();
        if($(document).scrollTop()==0){
            $(".gotop_a").slideUp(300);
        }
    })
    var timer2  = null,target = 0,leader=0;
    $(".gotop_a").click(function() {
        timer2 = setInterval(function() {
            leader = leader +(target - leader)/ 10;
            window.scrollTo(0,leader);
            if(leader==0) {
                clearInterval(timer2);
            }
        },30);
    })
    $(".copyright .flag").click(function() {
        $(this).css({"background-color":"#F3F3F3","border-radius":"8px 8px 0 0"});
        $(".copyright .span").css({"display":"block","border-radius":"8px 8px 0 0"}).siblings("i").css("display","block");
    })
})


