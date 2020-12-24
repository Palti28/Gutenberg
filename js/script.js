//Active link
//Sidebar toggle

(function ($) {
  "use strict";

  // Add active state to sidbar nav links
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  console.log(path)
  $("#sideBar .sidebar__menu a.nav-link").each(function () {
    if (this.href === path) {
      $(this).addClass("active");
    }
  });

  // Toggle the side navigation
  $("#sidebarToggle").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $("#backdrop").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $("#backdrop").on("click", function (e) {
    e.preventDefault();
    if ($("body").hasClass("sidenav-toggled")) {
      $("body").toggleClass("sidenav-toggled");
      $("body").css("overflow", "auto");

      console.log('a')
    } else if ($("body").hasClass("bottom-dialog--toggled")) {
      $("body").toggleClass("bottom-dialog--toggled");
      $("#bottom-dialog").slideToggle('fast');
      console.log('bc')
    }
    $("#backdrop").css("display", "none");
  })

  $("#toggleBottomDialog").click(function (e) {
    e.preventDefault();
    $("#bottom-dialog").slideToggle('fast');
    $("body").toggleClass("bottom-dialog--toggled");
    $("#backdrop").css("display", "block");
  });
})(jQuery);