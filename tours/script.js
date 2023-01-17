console.log("hhh");

$(document).ready(function () {
  console.log("Hi!");

  $('.col-sm-3, a[href="#sheldure"]').on("click", function () {
    $(".overlay").fadeIn("slow");
    $(".modal").slideDown(800);
  });

  $(".close").click(function () {
    $(".modal").slideUp(1000);
    $(".overlay").fadeOut(1000);
  });

});
