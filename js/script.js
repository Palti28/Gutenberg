//Active link
//Sidebar toggle

(function($) {
  "use strict";

  // Add active state to sidbar nav links
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  console.log(path)
      $("#sideBar .sidebar__menu a.nav-link").each(function() {
          if (this.href === path) {
              $(this).addClass("active");
          }
      });

      // $('$sideBar .sidbar__menu a.nav-link:has()')

  // Toggle the side navigation
  $("#sidebarToggle").on("click", function(e) {
      e.preventDefault();
      $("body").toggleClass("sidenav-toggled");
      $("#backdrop").css("display", "block");
  });

  $("#backdrop").on("click", function(e){
    e.preventDefault();
    if($("body").hasClass("sidenav-toggled")){
      $("body").toggleClass("sidenav-toggled");
    }else 
    if($('#bottom-dialog.bottom-dialog--toggled')){
        $("#bottom-dialog").slideToggle('fast').toggleClass('bottom-dialog--toggled');
    }
      $("#backdrop").css("display", "none");

    //   $("body").toggleClass("sidenav-toggled");
      
  })


  $("#toggleBottomDialog").click(function () {
    $("#bottom-dialog").slideToggle('fast').toggleClass('bottom-dialog--toggled');
    $("#backdrop").css("display", "block");
  });
})(jQuery);