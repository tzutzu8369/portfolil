/*Menu*/
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

/*Year*/
$(function(){
    $(".year").text(new Date().getFullYear())
})

/*Slide*/
var x = 0;
$(function(){
    $(".slide").css({transition: "all 500ms ease"});
    $("input").click(function(){
        x = $(this).attr("data-value");
        $(".slide").css({left: x * -100 + "%"});
    })
    let run = setInterval(function(){
        x++;
        if(x >= 5){
            x=0;
        }
        $(".slide").css({left: x * -100 + "%"});
        $(".slidebar").find("input")[x].checked = true;
    },2000);

})