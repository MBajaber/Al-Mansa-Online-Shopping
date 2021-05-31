$(document).ready(function(){

    // When You Click On Drop Menu TO Change Country 
    $(".top-header .lang-conutry .dropdown-menu a").click(function(e){
        e.preventDefault();
        //  Change charge Country Image From Drop Menu
        $(".img-country img").attr("src", $(this).find(".flag-img img").attr("src"));
        //  Change charge Country Text 
        $(".charge-country").text($(this).find(".text").text());
        //  For Correct Circle Sign
        let icon = $(this).find("ion-icon");
        if($(icon).hasClass("correct-circle")) {
            $(icon).removeClass("correct-circle");
            $(icon).addClass("empty-circle ");
            $(icon).attr("name","ellipse-outline");
        } else {
            let searchAllIcons = $(this).parent().find("ion-icon");
            if(searchAllIcons.hasClass("correct-circle")){
                $(searchAllIcons).removeClass("correct-circle");
                $(searchAllIcons).addClass("empty-circle ");
                $(searchAllIcons).attr("name","ellipse-outline");
            }
            $(icon).removeClass("empty-circle");
            $(icon).addClass("correct-circle");
            $(icon).attr("name","checkmark-circle");
        }
    });

    // show X Close Button On Navbar Input   
    $(".form input").keyup(function(){
        if($(this).val().length === 0) {
            $(".form .search-icon").show();
            $(".form .close-icon").hide();
        } else {
            $(".form .search-icon").hide();
            $(".form .close-icon").show();
        }
    });

    // Click on X on Navbar Input
    $(".form .close-icon").click(function(){
        $(".form input").val("");
        $(".form .search-icon").show();
        $(".form .close-icon").hide();
    });

    // Show Inside Div on Hover link 
    $(".navbar-middle .all-item .item .text").hover(function() {
        $(this).next(".inside-items").fadeIn(50);
    }, function() {
        $(this).next(".inside-items").fadeOut(100);
    });

    // Hover on inside Item and show details
    $(".inside-items").hover(function() {
        $(this).show(0);
    }, function() {
        $(this).hide(0);
    });

    // Click On Button bar 
    $(".my-small-navbar .second-line .btn-bar").click(function(){
        $(".side-menu .popup-side").fadeIn();
        $(".side-menu .popup-side .side-box").addClass("open");
    });

    // This For Navbar side 
    $(".all-links .main-list").click(function(){
        $(this).toggleClass("show").siblings(".main-list").removeClass("show");
    });

    // Click On Popup 
    $(".side-menu .popup-side").click(function(){
        $(".side-menu .popup-side .side-box").removeClass("open");
        $(this).fadeOut(800);
    });

    // Do Stop Propagation On .side-box to Note Hide On click inside Popup Side
    $(".side-menu .popup-side .side-box").click(function(e){
        e.stopPropagation();
    });

    // Show Navbar On Scroll 
    $(window).scroll(function(){
        if($(this).scrollTop() > 550) {
            $(".my-small-navbar").addClass("fixed-top");
            $(".my-small-navbar").removeClass("d-lg-none");
        } else {
            $(".my-small-navbar").removeClass("fixed-top");
            $(".my-small-navbar").addClass("d-lg-none");
        }
    })

    // Click On Register Or login 
    $(".popup-rigister .window-box .head > a").click(function(){
        $(this).addClass("select").siblings().removeClass("select");    
        if($(this).hasClass("logoin")){
            $(".login-form").addClass("open").siblings().removeClass("open");
        } else {
            $(".regi-form").addClass("open").siblings().removeClass("open");
        }
    });

    // click popup-rigister To Hide  
    $(".popup-rigister, .popup-rigister .window-box .close-regi .close-regi-login").click(function(){
        $(".popup-rigister").fadeOut();
    });

    $(".popup-rigister .window-box").click(function(e){
        e.stopPropagation();
    });

    // Click On Login Register 
    $(".top-header .left-side .logoin").click(function(e){
        e.preventDefault();
        $(".popup-rigister").fadeIn();
        $(".login-form").addClass("open").siblings().removeClass("open");
    });

    $(".top-header .left-side .signup").click(function(e){
        e.preventDefault();
        $(".popup-rigister").fadeIn();
        $(".regi-form").addClass("open").siblings().removeClass("open");
    });

    // Click On Small Image and Change THe Big Image 
    $(".product .row .image .small-img .img img").click(function(){
        $(".product .row .image .big-img > img").fadeOut(50);
        $(".product .row .image .big-img > img").attr("src", $(this).attr("src"));
        $(this).parent().addClass("active").siblings().removeClass("active");
        $(".product .row .image .big-img > img").fadeIn(50);
    });

    // Click On Size li
    $(".product .size-parent li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // To Show Color Name 
    $(".product .color .color-parent li .show-color-name").each(function(){
        $(this).text($(this).parent().attr("data-color"))
    });

    // Add Active On Li Color 
    $(".product .color .color-parent li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // Click on City Text 
    $(".product .descr .place-day .palce p .city, .product .descr .place-day .palce .change-city").click(function(e){
        e.preventDefault();
        $(".popup-city").fadeIn();
        $(".popup-city .main-box").addClass("open");
    });

    // Click On popup-city 
    $(".popup-city, .popup-city .main-box .top .city-close").click(function(){
        $(".popup-city").fadeOut();
        $(".popup-city .main-box").removeClass("open");
    });

    // To Not Delete Popup City 
    $(".popup-city .main-box").click(function(e){
        e.stopPropagation();
    });

    // Click On City List 
    $(".popup-city .main-box .city-parent .item").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        $(this).find(".empty-circle-city").attr({

            class:"empty-circle-correct",
            name: "checkmark-circle-outline"
        });

        // To Make Check sign 
        $(".popup-city .main-box .city-parent .item:not(.city-parent .item.active)").find("ion-icon").attr({
            class:"empty-circle-city",
            name: "ellipse-outline"
        })

        // To Change City Name 
        $(".product .descr .place-day .palce p .city").text($(this).find(".name").text());

        $(".popup-city").fadeOut();
        $(".popup-city .main-box").removeClass("open");

    });

    // Trigger Zoomsl plugin 
    if($(window).width() > 767){
        $("#big-img .big-img-show").imagezoomsl({
            zoomrange: [1, 10],
            magnifiereffectanimate: "fadeIn"
        });    
    }
});