/* function ():
  -Changes the background color of product's name, an h2, based on its type
    -vitamin becomes dark green
    -mineralwater becomes blue
    -proteinbar becomes dark purple
  -Look for h2's with class of product-name */

  $(document).ready(function () {
    $("h2.product-name[data-type='vitamin']").css("background-color", "#006400");
    $("h2.product-name[data-type='mineralwater']").css("background-color", "#0000cd");
    $("h2.product-name[data-type='proteinbar']").css("background-color", "#9932cc");

/* begin ex10-2 programming challenge code */
/* the following solution code was written with guidance from the lynda.com solution video

  -create event listener for when status of product checkbox changes (identifying checkbox by its id)
  -calls updateProductView function, which takes two arguements:
    -data-type
    -checked state of checkbox */

    document.querySelector("#vitamins-cb").addEventListener('change',function (evt) {
      updateProductView("vitamins", evt.target.checked);
    });
    document.querySelector("#mineralwater-cb").addEventListener('change',function (evt) {
      updateProductView("mineralwater", evt.target.checked);
    });
    document.querySelector("#proteinbar-cb").addEventListener('change',function (evt) {
      updateProductView("proteinbar", evt.target.checked);
    });

/* function updateProductView ():
  -acquires a list of the product items for the associated category
  -uses data attributes to narrow the list
  -uses the has() function to select the correspnding product items' <li>'s that also contain the <h2>'s with the matching data attributevalue
  -remove display or set to display none in css */

  function updateProductView(categoryName, Visibility) {
    var dataSelectorValue = ""; /* starting value is blank, then will change depending on the h2 with the matching product data-type attribute */
    switch (categoryName) {
      case "vitamins":
        dataSelectorValue = "h2[data-type='vitamin']";
        break;
      case "mineralwater":
        dataSelectorValue = "h2[data-type='mineralwater']";
        break;
      case "proteinbar":
        dataSelectorValue = "h2[data-type='proteinbar']";
        break;
    }
    $(".product-item").has(dataSelectorValue).css("display", Visibility ? "" : "none");
  }

}); /* ends the document.ready */
