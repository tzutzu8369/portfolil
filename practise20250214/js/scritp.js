var bool = true;
$(document).ready(function(){
    $("nav").click(function(){
        if(bool){
            $("menu").stop().slideDown(600);
            $(this).children(".bar:nth-of-type(1)").css({opacity: 0})
            $(this).children(".bar:nth-of-type(4)").css({opacity: 0})
            $(this).children(".bar:nth-of-type(2)").css({transform: "rotate(30deg)"})
            $(this).children(".bar:nth-of-type(3)").css({transform: "rotate(-30deg)"})
        }else{
            $("menu").stop().slideUp(600);
            $(this).children(".bar:nth-of-type(1)").css({opacity: 1})
            $(this).children(".bar:nth-of-type(4)").css({opacity: 1})
            $(this).children(".bar:nth-of-type(2)").css({transform: "rotate(0deg)"})
            $(this).children(".bar:nth-of-type(3)").css({transform: "rotate(0deg)"})
        }
        bool = !bool;
    })
})