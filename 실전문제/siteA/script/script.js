$(function(){
    //slider
    let currentIndex = 0;
    $(".slider").hide().first().show();

    setInterval(function(){
        let nextIndex =(currentIndex + 1) % 3;
        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex ;
    },3000)

    //nav
    $(".nav > ul > li").mouseover()
});