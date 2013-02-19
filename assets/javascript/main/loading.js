x$(document).on("DOMContentLoaded", function() {
  mw_init = init;
  init = function() {
    x$(".mw_loading").addClass("mw_active");
    mw_init();
  }
});