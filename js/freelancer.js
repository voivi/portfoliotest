// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
      var marginVal = ($(window).width() > 991)?  43 : 185;
      console.log(marginVal);
      console.log($(window).width());
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - marginVal)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    $('.mouseoverToggle')
    .on('mouseover', function(){
        $('.dropdown-menu').css('display','block');                //$(this.nextElementSibling).css('display: block;');
    })
    .on('mouseleave', function(){
        $('.dropdown-menu').css('display','none');
    });


    // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse>ul>li>a.linkable').click(function() {
    //     $('.navbar-collapse').collapse('hide');
    // });
    //
    // $('.nav-item.custom-dropdown.dropdown-2').hover(function(){
    //
    //
    // });

    // jQuery to collapse the navbar on scroll
    // $(window).scroll(function() {
    //     if ($("#mainNav").offset().top > 100) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     } else {
    //         //$("#mainNav").removeClass("navbar-shrink");
    //     }
    // });

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
