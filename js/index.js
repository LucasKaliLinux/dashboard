$(function(){
    $("main.main-content .bars").click(function(){
        $(".sidebar").show();
        $(".sidebar").animate({
            width: '230px'
        }, 400, function(){
            $("aside.sidebar header.sidebar__header, aside.sidebar nav.sidebar__menu").fadeIn();
        });
    });

    $(".sidebar__header .exit-sidebar").click(function(){
        $("aside.sidebar header.sidebar__header, aside.sidebar nav.sidebar__menu").fadeOut();
        $(".sidebar").animate({
            width: "0px" 
        }, 600, function(){
            $(".sidebar").hide();
        });
    });

    $(".campo-pesquisa").mouseenter(function(){
        $(".campo-pesquisa form").show().css("display", "inline-block");
        $(".campo-pesquisa form input[type=text]").animate({
            width: '180px'
        }, 400);
    });
    $(".campo-pesquisa").mouseleave(function(){
        $(".campo-pesquisa form input[type=text]").animate({
            width: '0px'
        }, 400, function(){
            $(".campo-pesquisa form").hide();
        });
    });
});