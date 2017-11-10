$(document).ready(function () {

/* assignment 10 function 1 ():
  -Clicking on an <a> applies a .bgChangeCol CSS class to it that changes it’s background color

    $("a").click(function () {
      $(this).toggleClass("bgChangeCol");
    });

  assignment 10 function 2 ():
    -Clicking on one of the H2 post titles in the main content area hides it
    $("h2.title").click(function () {
      $(this).next().toggle("slow");
    }); */

// begin code for assignment 11:
  // Add the icon.png image before the text in each LI element in the main navigation
    $("#menu li a").prepend("<img src='icon.png' alt='icon'>");

  // Clicking on the H1 element in the header changes the background color of the header DIV
    $("#header h1").click(function () {
      $("#header").css("background","#0A7272");
    });

  // Change the text color of the first LI element in one of the sub-lists in the sidebar
    $("#sidebar_content_1 li a:first").css("color", "red");

  // Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels
    $("#sidebar_content_2 li:even").css("margin-left", "5px");

  // Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify
    $("#content h2.title").click(function () {
      $("#content").html("<div><h1>All Content Changed</h1></div>");
    });
  // Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it
    $("#sidebar h2").click(function () {
      $(this).next().toggle("slow");
    });

  }) /* ends document ready function */
