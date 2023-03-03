
$(document).ready(function(){
let sectionOffset=$("#about").offset().top


$(window).scroll(function(){
    let scroll=$(window).scrollTop()
    
   

    if(scroll>sectionOffset){
        $("nav").addClass("bg-info")
        $(".arrow").css("opacity",100)
    }
    else{
        $("nav").removeClass("bg-info")
        $(".arrow").css("opacity",0)
    }
})

$(".arrow").click(function(){
    let home=$("#home").offset().top
    $("html,body").animate({scrollTop:home},2000)
})

$(".navlink").click(function(){
    let Href=$(this).attr("href")
    let sectionOffset=$(Href).offset().top
    $("html,body").animate({scrollTop:sectionOffset},{duration:2000,queue:false})

    $(this).addClass("active")
    // $(".navlink").not(this).removeClass("active")
    $(this).parent().siblings().children().removeClass("active")
})


let width=$(".color-switcher").outerWidth(true)

$(".animation").css({right:`-${width}px`})

$(".animation button").click(function(){
    let rightx= $(".animation").css("right")
    
    if(rightx=="0px"){
        
    $(".animation").animate({right:`-${width}px`})
    
    }
    else{
        $(".animation").animate({right:`0px`})
    }
    
})

$(".color-switcher ul li div").click(function(){
    let color=$(this).css("background-color")
    localStorage.setItem("color",color)
    $(":root").css("--main-text-color",color)
})


if(localStorage.getItem("color")!=null){
    $(":root").css("--main-text-color",localStorage.getItem("color"))
}

$("#resetD").click(function(){
    $(":root").css("--main-text-color","#1AC997")
    localStorage.setItem("color","#1AC997")
})

    $(".landing").fadeOut(3000)
















})