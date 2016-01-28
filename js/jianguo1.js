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
       /* addTransition($(a_list));*/
        var a = 10;
        $(this).stop().animate({"transform":"translateY("+a+"%)"},300);
        for(i = 2 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).stop().animate({"transform":"translateY("+a+"%)"},300);
        }
        var b = 10;
        for(i = 0; i>=0;i--) {
            b += 10;
            $(a_list[i]).stop().animate({"transform":"translateY("+b+"%)"},300);
        }
    });
    $(".a3").on("mouseenter",function() {
        /*addTransition($(a_list));*/
        var a = 10;
        $(this).stop().animate({"transform":"translateY("+a+"%)"},300);
        for(i = 3 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).stop().animate({"transform":"translateY("+a+"%)"},300);
        }
        var b = 10;
        for(i = 1; i>=0;i--) {
            b += 15;
            $(a_list[i]).stop().animate({"transform":"translateY("+b+"%)"},300);
        }
    });
    $(".a4").on("mouseenter",function() {
       /* addTransition($(a_list));*/
        var a = 10;
        $(this).stop().animate({"transform":"translateY("+a+"%)"},300);
        for(i = 4 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).stop().animate({"transform":"translateY("+a+"%)"},300);
        }
        var b = 10;
        for(i = 2; i>=0;i--) {
            b += 15;
            $(a_list[i]).stop().animate({"transform":"translateY("+b+"%)"},300);
        }
    });
    $(".a5").on("mouseenter",function() {
        /*addTransition($(a_list));*/
        var a = 10;
        $(this).stop().animate({"transform":"translateY("+a+"%)"},300);
        for(i = 5 ; i<a_list.length;i++) {
            a += 15;
            $(a_list[i]).stop().animate({"transform":"translateY("+a+"%)"},300);
        }
        var b = 10;
        for(i = 3; i>=0;i--) {
            b += 15;
            $(a_list[i]).stop().animate({"transform":"translateY("+b+"%)"},300);
        }
    });
    change($(".a6"),6);
   change($(".a7"),7);

    function change(id,m) {
        id.on("mouseenter",function() {
           /* addTransition($(a_list));*/
            var a = 10
            $(this).stop().animate({"transform":"translateY("+a+"%)"},300);
            /*    css("transform","translateY("+a+"%)");*/
            for(i = m ; i<a_list.length;i++) {
                a += 15;
                $(a_list[i]).stop().animate({"transform":"translateY("+a+"%)"},300);
            }
            var b=10;
            for(i = m-2; i>=0;i--) {
                b += 10;
                $(a_list[i]).stop().animate({"transform":"translateY("+b+"%)"},300);
            }
        });
    }
    $(".phone").on("mouseleave",function() {
       /* addTransition($(a_list));*/
        $(".a1").stop().animate({"transform":"translateY("+230+"px)"},300);
        $(".a2").stop().animate({"transform":"translateY("+170+"px)"},300);
        $(".a3").stop().animate({"transform":"translateY("+240+"px)"},300);
        $(".a4").stop().animate({"transform":"translateY("+180+"px)"},300);
        $(".a5").stop().animate({"transform":"translateY("+60+"px)"},300);
        $(".a6").stop().animate({"transform":"translateY("+165+"px)"},300);
        $(".a7").stop().animate({"transform":"translateY("+220+"px)"},300);
    }),300
})
