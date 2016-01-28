function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;
        for(var k in json){
            if(k=="opacity"){
                var current = parseInt(getStyle(obj, k)*100);
            }else {
                var current = parseInt(getStyle(obj,k));
            }
            var step = (json[k] - current)/10;
            step = step >0 ? Math.ceil(step) : Math.floor(step);
            if(k == "opacity"){
                if("opacity" in obj.style){
                    console.log(current);
                    obj.style.opacity = (current + step)/100;
                }else {
                    obj.style.filter = "alpha(opacity="+(current + step)+")";
                }
            }else if( k=="zIndex"){
                obj.style.zIndex = json[k];
            }
            else {
                obj.style[k] = current + step + "px";
            }

            if(current != json[k]){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30)
}
function getStyle(obj,attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}