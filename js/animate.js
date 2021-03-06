
//获取任意属性的值
function getStyle(element,attr){
    if(getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}

//第六个版本： 需求 -- 当我的动画执行完毕之后，可以让下一个动画继续执行，获这可以做某些事情，比如：动画执行完毕，告诉别人可以继续操作
//思路：让动画完成之后，执行另一个函数 -- 在动画函数中添加回调函数 -- 将一个函数作为参数传递到另一个函数中被调用，这个作为参数的函数叫做回调函数
//数组.sort(function(a,b){
//    return a - b;
//});
function animate(element,obj,callback){
    //清楚上一次的计时器
    clearInterval(element.timer);
    //为这次动画重新开始计时器
    element.timer = setInterval(function(){

        //因为如果没有假设，只要有一个属性到达目标，就会停下，其他的属性就都无法继续进行变换
        var flag = true;
        //循环的遍历对象，取出其中的键值对，进行动画修改
        for(var attr in obj){
            //对每一个属性进行动画修改
            //当属性是opacity或者z-index等不是以px为单位的就不能像之前一样设置
            if(attr == "opacity"){
                // 1 获取当前值
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                //2计算步长 -- 因为是小数运算，所以变大之后在取整比较
                current *= 100;
                target *= 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //重新设定
                current += step; //已经是放大100倍的数字,在重新设定的时候，要除回来
                element.style[attr] = current / 100;
                //判断停止
            }else if(attr == "zIndex"){
                //因为z-index是没有动画，可以直接设置为目标值就可以了
                element.style[attr] = obj[attr];
                var target = obj[attr];
                var current = target;

            } else {
                //这个部分即是以px为单位的属性的写法

                //1 获取当前值
                var current = parseFloat(getStyle(element,attr));
                //获取某个属性要到达的目标值
                var target = obj[attr];
                //2 计算步长
                var step = (target - current) / 10;
                //判断方向取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //3 重新设定属性
                current += step;
                element.style[attr] = current + "px";
                //4 判断停止
            }
            if(target != current){
                flag = false;
            }

        }
        //判断是否所有的属性都到达目标值，如果到达了，就停止计时器
        if(flag){
            clearInterval(element.timer);
            //如果计时器停止了，证明动画都已经执行完毕了，调用回调函数，执行你想要动画结束后的逻辑
            callback && callback();
        }
    },20);
}











