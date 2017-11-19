$(document).ready(function () {
// fadeToggle() the recipeArticles when corresponding tab clicked (solution referenced code from http://jsfiddle.net/n53qg/ )
  $(".recipeTabs").click (function(e) {
    e.preventDefault();
    $(".recipeArticle").fadeOut (200);
    $("#" + $(this).data("rel")).fadeIn (1200);
  });

// animate() to change the position
/*********** referenced Stacy Mann's Assignment 12 ***********/
  $("#homeArticle").animate ( {
    "right": "0"
  }, 1000, "swing");

// animate() the leftNavTabs to increase fontSize on hover (written by individual ID because of animation initiating for previously hovered tabs when other tabs hovered)
  $("#homeTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );
  $("#applesauceTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );
  $("#muffinsTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );
  $("#brineTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );
  $("#chiliTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );
  $("#porkTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );
  $("#saladTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );
  $("#soupTab").hover (function () {
      $(this).animate ( {
        fontSize: "1.5em",
        zIndex: 2 }, 600 );
    }, function () {
      $(this).animate ( {
        fontSize: "1.125em",
        zIndex: 1 });
    }
  );

}); /* ends document ready function */
