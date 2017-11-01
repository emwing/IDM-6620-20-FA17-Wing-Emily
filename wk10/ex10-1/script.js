/* function prodBgColor():
  -Changes the background color of product's name, an h2, based on its type
    -vitamin becomes dark green
    -mineralwater becomes blue
    -proteinbar becomes dark purple
  -Look for h2's with class of product-name */

  $("document").ready(function () {
    $("h2.product-name[data-type='vitamin']").css("background-color", "#006400");
    $("h2.product-name[data-type='mineralwater']").css("background-color", "#0000cd");
    $("h2.product-name[data-type='proteinbar']").css("background-color", "#9932cc");
  });
