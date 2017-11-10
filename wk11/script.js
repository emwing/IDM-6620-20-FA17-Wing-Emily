/* function ():
  -Clicking on an <a> applies a .bgChangeCol CSS class to it that changes it’s background color */

  $(document).ready(function () {
    $("a").click(function () {
      $(this).toggleClass("bgChangeCol");
    });

  /* function ():
    -Clicking on one of the H2 post titles in the main content area hides it */
    $("h2.title").click(function () {
      $(this).next().toggle("slow");
    });

  // begin code for assignment 11:

    

  }) /* ends document ready function */
