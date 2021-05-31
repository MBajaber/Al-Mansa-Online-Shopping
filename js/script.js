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

    // Make CountDown Timer 
    var countDate = new Date("December 29, 2023 00:00:00").getTime();
    function comingSoon(){
        var now = new Date().getTime();
        var gap = countDate - now;
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var d = Math.floor(gap / day);
        var h = Math.floor(gap % day / hour);
        var m = Math.floor(gap % hour / minute)
        var s = Math.floor(gap % minute / second);
        if (parseInt(s) < 10) {
            s = "0" + parseInt(s);
        }
        if (parseInt(m) < 10) {
            m = "0" + parseInt(m);
        }
        document.getElementById("day").innerText = d;
        document.getElementById("hour").innerText = h;
        document.getElementById("minute").innerText = m;
        document.getElementById("second").innerText = s;
        if(m === 0 && s === 0){
            clearInterval(interval);
        }
    };

    var interval = setInterval(function() {
        comingSoon();
    },1000);

    // Trigger Owl-carousel
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // Triggle Tooltip 
    $('.product-item .add-to-card div, .footer .heart-parent').tooltip()

    // Hover On Heart add to cart
    $(".product-item .item .add-to-card > button .heart, .footer .heart-parent .heart").hover(function(){
        $(this).attr("name","heart").addClass("heart-fill");
    }, function(){
        $(this).attr("name","heart-outline").removeClass("heart-fill").addClass("heart");
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
});