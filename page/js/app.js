$(document).ready(function () {
    
    let screenHeight = $(window).height();
    console.log(screenHeight);

    $(window).scroll(function () {
        let current = $(window).scrollTop();

        if (current >= screenHeight-100) {
            $(".menu-style").addClass("menu-fix");
            $(".text").addClass("text-color");
        }else{
            $(".menu-style").removeClass("menu-fix");
            $(".text").removeClass("text-color");
            setActive("home")
        }

    });


    $(".toggler1").click(function () {
    let x = $(".toggler2").html(`<i class="fa fa-window-close menu-icon"></i>`)
        $(this).addClass("d-none");
        x.removeClass("d-none")
    });

    $(".toggler2").click(function () {
     let y = $(".toggler1").html(`<i class="fa fa-bars menu-icon"></i>`);
        $(this).addClass("d-none");
        y.removeClass("d-none");
    });


    // SetActive

    function setActive(current) {
        $(".nav-link").removeClass("active");
        $(`.nav-link[href='#${current}']`).addClass("active");
    }

    function scroll() {
        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction) {
            if (direction === "down") {
                   let currentSectionId = $(this.element).attr('id');
                   setActive(currentSectionId) 
                   console.log(currentSectionId);
                }
        }, {offset : "0px"});

        currentSection.waypoint(function (direction) {
            if (direction === "up") {
                   let currentSectionId = $(this.element).attr('id');
                   setActive(currentSectionId) 
                   console.log(currentSectionId);
                }
        }, {offset : "-1px"});
    }
    scroll()

    
    $('.aa').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        speed : 1500,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      
                                  wow = new WOW(
                            {
                            boxClass:     'wow',      // default
                            animateClass: 'animate__animated', // default
                            offset:       0,          // default
                            mobile:       true,       // default
                            live:         true        // default
                          }
                          )
                          wow.init();
      
      
    //   var waypoints = $('#homePage').waypoint(function(direction) {
    //         console.log("hello");
    //     $(".nav-link").removeClass("current");
      
    //     $(".nav-link[href='#homePage']").addClass("current");
    //   }, {
    //     offset: '0%'
    //   });
      
      
    //   var waypoints = $('#about').waypoint(function(direction) {
    //         console.log("hello");
    //     $(".nav-link").removeClass("current");
      
    //     $(".nav-link[href='#about']").addClass("current");
    //   }, {
    //     offset: '0%'
    //   });
      
    //   var waypoints = $('#about1').waypoint(function(direction) {
    //         console.log("hello");
    //     $(".nav-link").removeClass("current");
      
    //     $(".nav-link[href='#about1']").addClass("current");
    //   }, {
    //     offset: '0%'
    //   });
      
    //   var waypoints = $('#package').waypoint(function(direction) {
    //           console.log("hello");
    //     $(".nav-link").removeClass("current");
      
    //         $(".nav-link[href='#package']").addClass("current");
    //   }, {
    //     offset: '0%'
    //   });
      
    //   var waypoints = $('#contact').waypoint(function(direction) {
    //           console.log("hello");
    //     $(".nav-link").removeClass("current");
      
    //         $(".nav-link[href='#contact']").addClass("current");
    //   }, {
    //     offset: '0%'
    //   });
      
      
    $(window).on("load", function () {
        $(".loading").fadeOut(500);
        $(this).remove();
    });    

})