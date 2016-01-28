/**
 * Created by ��� on 2015/12/23.
 */
$(function() {
    $('#fullpage').fullpage({
        css3: true,
        afterLoad: function (anchorLink, index) {

            $('.section').removeClass('current');

            // 延时100毫秒执行
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            }, 100);
        },
        onLeave: function (index, nextIndex, direction) {
        }
    });
    var a_list = $(".phone a");
    $(".a1").on("mouseenter",function() {

       /* addTransition($(a_list));
        var a = 10;
        $(this).css("transform","translateY("+a+"%)");
        for(i = 1 ; i<a_list.length;i++) {
            a += 10;
            $(a_list[i]).css("transform","translateY("+a+"%)");
        }*/
    });
    $(".a2").on("mouseenter",function() {
        addTransition($(a_list));
        var a = 10;
        $(this).css("transform","translateY("+a+"%)");
        for(i = 2 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).css("transform","translateY("+a+"%)");
        }
        var b = 10;
        for(i = 0; i>=0;i--) {
            b += 10;
            $(a_list[i]).css("transform","translateY("+b+"%)");
        }
    });
    $(".a3").on("mouseenter",function() {
        addTransition($(a_list));
        var a = 10;
        $(this).css("transform","translateY("+a+"%)");
        for(i = 3 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).css("transform","translateY("+a+"%)");
        }
        var b = 10;
        for(i = 1; i>=0;i--) {
            b += 15;
            $(a_list[i]).css("transform","translateY("+b+"%)");
        }
    });
    $(".a4").on("mouseenter",function() {
        addTransition($(a_list));
        var a = 10;
        $(this).css("transform","translateY("+a+"%)");
        for(i = 4 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).css("transform","translateY("+a+"%)");
        }
        var b = 10;
        for(i = 2; i>=0;i--) {
            b += 15;
            $(a_list[i]).css("transform","translateY("+b+"%)");
        }
    });
    $(".a5").on("mouseenter",function() {
        addTransition($(a_list));
        var a = 10;
        $(this).css("transform","translateY("+a+"%)");
        for(i = 5 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).css("transform","translateY("+a+"%)");
        }
        var b = 10;
        for(i = 3; i>=0;i--) {
            b += 15;
            $(a_list[i]).css("transform","translateY("+b+"%)");
        }
    });
    change($(".a6"),6);
   change($(".a7"),7);
    function addTransition(id) {
        id.css("transition","all 0.3s");
    };
    function removeTransition(id) {
        id.css("transition","none");
    };
    function change(id,m) {
        id.on("mouseenter",function() {
            addTransition($(a_list));
            var a = 10
            $(this).css("transform","translateY("+a+"%)");
            for(i = m ; i<a_list.length;i++) {
                a += 15;
                $(a_list[i]).css("transform","translateY("+a+"%)");
            }
            var b=10;
            for(i = m-2; i>=0;i--) {
                b += 10;
                $(a_list[i]).css("transform","translateY("+b+"%)");
            }
        });
    };
    $(".phone").on("mouseleave",function() {
        addTransition($(a_list));
        $(".a1").css("transform","translateY("+230+"px)");
        $(".a2").css("transform","translateY("+170+"px)");
        $(".a3").css("transform","translateY("+240+"px)");
        $(".a4").css("transform","translateY("+180+"px)");
        $(".a5").css("transform","translateY("+60+"px)");
        $(".a6").css("transform","translateY("+165+"px)");
        $(".a7").css("transform","translateY("+220+"px)");
    });
    /*第二屏js*/
   /* $(".current.section .subnav-y").slideDown();*/
    $(".color-choose li").on("click",function() {
        var index = $(this).index();
        $(".colorful").eq(index).children().css({"display":"block"}).end().siblings(".colorful").children().css({"display":"none"})
        //$(".colorful").eq(index).children().fadeIn(400).end().siblings(".colorful").children().fadeOut(400);
        $(".colorful-1").css({"transition": "none"})
        $(".colorful-2").css({"transition": "none"})
        /*  $(".colorful-1").css({"top":250,"right":150});*/

       /* $(".colorful-2").eq(index).css({"top":250,"right":50});*/
        $(".colorful-1").eq(index).animate({"top":"250px","right":"150px"},800,function() {
            $(".colorful-1").eq(index).animate({"top":-50,"right":50},800)
        });
        $(".colorful-2").eq(index).animate({"top":"250px","right":"50px"},800,function() {
            $(".colorful-2").eq(index).animate({"top":200,"right":30},800)
        });
        //$(".colorful-2").css({"top":200,"right":30},500);

    })

})
