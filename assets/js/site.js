(function () {
  "use strict";
  var BREAKPOINT = 900; // must match the CSS @media (max-width:900px) breakpoint
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobilemenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  var drops = document.querySelectorAll(".navlinks .hasdrop > button");
  Array.prototype.forEach.call(drops, function (btn) {
    btn.addEventListener("click", function (e) {
      var li = btn.parentNode;
      var open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      e.stopPropagation();
    });
  });
  document.addEventListener("click", function () {
    Array.prototype.forEach.call(document.querySelectorAll(".navlinks .hasdrop.open"), function (li) {
      li.classList.remove("open");
      li.firstChild && li.querySelector("button").setAttribute("aria-expanded", "false");
    });
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BREAKPOINT && menu && menu.classList.contains("open")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
