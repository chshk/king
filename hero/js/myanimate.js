
/**
 * Created by Administrator on 2017/6/12.
 */
//获取某个属性的函数
function getStyle(element,attribute){
    if(window.getComputedStyle!=undefined){
        //console.log(window.getComputedStyle(element,null));
        return window.getComputedStyle(element,null)[attribute];
    }
    else{
        return element.currentStyle[attribute];
    }
}

//修改非px的特殊属性
    function animate4(element,obj,callback) {
        var timer;
        clearInterval(timer);
        timer = setInterval(function () {
            var flag=true;
            for (var key in obj) {
                if(key=="opacity"){
                    var target = obj[key];
                    var current = parseFloat(getStyle(element, key));
                    target=target*100;
                    current=current*100;
                    var step = (target - current) / 5;
                    step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[key] = current/100;
                    if(current!=target){
                        flag=false;
                    }
                }
                else if(key=="zIndex"){
                    target = obj[key];
                    current = parseInt(getStyle(element, key));
                    element.style[key]=target;
                    if(current!=target){
                        flag=false;
                    }
                }
                else{
                     target = obj[key];
                     current = parseInt(getStyle(element, key));
                     step = (target - current) / 5;
                    step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[key] = current + "px";
                    if(current!=target){
                        flag=false;
                    }
                }
            }
            if(flag){
                clearInterval(timer);
                callback&&callback();
            }
        }, 10)
    }
function animate5(element,obj,callback) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag=true;
        //先把y和z的值存起来
        var current_y;
        var current_z;
        var current = element.style.transform;
        current_y=parseInt(current.slice(current.indexOf("rotateY")+"rotateY".length+1))||0;
        current_z=parseInt(current.slice(current.indexOf("translateZ")+"translateZ".length+1))||0;
        //遍历，修改y和z
        for (var key in obj) {
            if(key=="rotateY"){
                var target = obj[key];
                var step = (target - current_y) / 10;
                current_y += step;
                element.style.transform =" rotateY("+current_y+"deg)";
                if(current_y!=target){
                    flag=false;
                }
            }
            if(key=="translateZ"){
                target = obj[key];
                step = (target - current_z) / 10;
                current_z += step;
                element.style.transform +=" translateZ("+current_z+"px)";
                if(current_z!=target){
                    flag=false;
                }
            }
        }
        if(flag){
            clearInterval(element.timer);
            callback&&callback();
        }
    }, 20)
}

