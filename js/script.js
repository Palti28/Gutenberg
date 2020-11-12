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
      $("#backdrop").css("display", "none");
      $("body").toggleClass("sidenav-toggled");
      
  })
})(jQuery);