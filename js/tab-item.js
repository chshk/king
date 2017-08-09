/**
 * Created by Administrator on 2017/6/16.
 */
var nav_r_ul = document.getElementById("nav_r_ul");
var lis = nav_r_ul.children;
var nav_content_newss = document.getElementsByClassName("nav_content_news");
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = mouseOverHandle;
}
function mouseOverHandle(){
    for(var j = 0; j < nav_content_newss.length; j++){
        nav_content_newss[j].className = "nav_content_news";
    }
    var index = this.index;
    var content = nav_content_newss[index];
    content.className = "nav_content_news selected";
    for(var k = 0;k<lis.length;k++){
        lis[k].className= "tab-item";
    }
    this.className = "tab-item active";
}


$(function () {
    $("i").mouseenter(function () {
        $(".nav_l li").eq($(this).index()).fadeIn().siblings("li").fadeOut();
        $(".list i").eq($(this).index()).css({backgroundColor:"skyblue"}).siblings("i").css({backgroundColor:""})
    })
})