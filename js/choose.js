/**
 * Created by ��� on 2016/1/19.
 */
$(function() {
    $(window).scroll(function() {
        console.log($(".section"))
        console.log($(".section").hasClass("current"))
        if($(".section").eq(3).hasClass("current")) {
            console.log(1);
            $("#video").load();  // 加载
            $("#video").play();  // 播放
        }
    })

})
