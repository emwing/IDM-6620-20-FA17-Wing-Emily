$(document).ready(function() {

// flip the card by adding classes with transformations
  $(".card").click(function() {
      $(this).addClass("frontflipped");
      $(this).find(".front").addClass("backflipped");
      $(this).find(".front").css("z-index", 0);
      $(this).css("z-index", 10);
    });

// reset the cards when #reset button clicked
  $("#reset").click(function() {
    $(".card").removeClass("frontflipped");
    $(".card").find(".front").removeClass("backflipped");
    $(".card").find(".front").css("z-index", "");
    $(".card").css("z-index", "");
  });

}) // ends document ready
