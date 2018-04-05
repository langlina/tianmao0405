// banner效果
{
    let lunbotu=$(".banner_imgBox_item");
    let lunbodian=$(".banner_pager");
    let banner=$("#banner");
    let n=0;
    let arr=["#F4C15B","#F9D1DC","#E8E8E8","#E8E8E8","#E8E8E8"];
    lunbodian.mouseenter(function(){
        let index=lunbodian.index(this);
        banner.css("background",arr[index]);
        lunbotu.css({"opacity":0}).eq(index).css({"opacity":1,"transition":"all 0.3s linear"})
        lunbodian.css("background","#000").eq(index).css("background","#ccc")
        n=index;
    })
    function move(){
        n++;
        if(n==5){
            n=0;
        }
        lunbotu.css({"opacity":0}).eq(n).css({"opacity":1,"transition":"all 0.3s linear"})
        banner.css("background",arr[n]);
        lunbodian.css("background","#000").eq(n).css("background","#ccc")
    }
    let t=setInterval(move,3000);
    banner.mouseenter(function(){
        clearInterval(t);
    })
    banner.mouseleave(function(){
        t=setInterval(move,3000);
    })
}
//楼层跳转、返回顶部
{
    $(".right_nav_top").click(function(){
        $("html,body").animate({scrollTop:0});
    })
    $(".leftBar_toTop").click(function(){
        $("html,body").animate({scrollTop:0});
    })
    $(window).scroll(function(){
        var st=$(window).scrollTop();//通过scrollTop()获取滚动高度
        if(st>700){
            $("#topBar").show();//显示
        }else{
            $("#topBar").hide();//隐藏
        }
        if(st>765){
            $("#leftBar").show();
        }else{
            $("#leftBar").hide();
        }
    })

    $(".leftBar_item").click(function(){
        var index=$(this).index;//同辈元素中的索引
        var index=$(this).index(".leftBar_item");
        var ot=$(".super").eq(index).offset().top-60;
        $("html,body").animate({scrollTop:ot},200);
    })

    $(window).scroll(function(){
        var st=$(window).scrollTop();
        $(".super").each(function(index,ele){//ele和this一样，指的是container
            if(st>=$(this).offset().top-60){
                $(".leftBar_item").removeClass("active").eq(index).addClass("active");
            }
        })
    })
}
//天猫超市今日疯抢、量贩装
{
    $(".super_acty_title_item").mouseenter(function () {
        $(".super_acty_title_item.active").removeClass("active").parent().find(this).addClass("active");
        var index=$(this).index();
        $(".super_acty_detail").removeClass("active").eq(index).addClass("active");
    })
}
//banner侧导航效果
{
    let lis=$(".banner_nav_item");
    let cons=$(".banner_nav_list");
    lis.mouseenter(function () {
        let index=lis.index(this);
        cons.eq(index).css("display","block");
    })
    lis.mouseleave(function () {
        cons.css("display","none");
    })
}
//头部效果
{
    $(".head_mytao").mouseenter(function () {
        $(".head_mytao_tan").css("display","block");
    })
    $(".head_mytao").mouseleave(function () {
        $(".head_mytao_tan").css("display","none");
    })

    $(".head_shoucang").mouseenter(function () {
        $(".head_shoucang_tan").css("display","block");
    })
    $(".head_shoucang").mouseleave(function () {
        $(".head_shoucang_tan").css("display","none");
    })

    $(".head_shouji").mouseenter(function () {
        $(".head_shouji_ma").css("display","block");
    })
    $(".head_shouji").mouseleave(function () {
        $(".head_shouji_ma").css("display","none");
    })

    $(".head_shangjia").mouseenter(function () {
        $(".head_shangjia em").css("display","block");
    })
    $(".head_shangjia").mouseleave(function () {
        $(".head_shangjia em").css("display","none");
    })

    $(".head_nav").mouseenter(function () {
        $(".menu_nav").css("display","block");
    })
    $(".head_nav").mouseleave(function () {
        $(".menu_nav").css("display","none");
    })
}
//rightBar
{
    $(".right_nav_item").mouseenter(function(){
        $(this).find(".right_nav_tan").css({"left":-90,"display":"block"});
        $(this).find(".right_erweima").css({"left":-154,"display":"block"});
    })
    $(".right_nav_item").mouseleave(function(){
        $(this).find(".right_nav_tan").css({"display":"none"});
    })
}



