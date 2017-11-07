/* function for the product page to parse out the product name and product id from the url */

$(document).ready(function () {
    //extract the query string parameters
    var paramLoc = window.location.href.indexOf("?");
    var paramStr = window.location.href.slice(paramLoc+1);
    var prodName = "";
    var prodID = "";
    var i = paramStr.indexOf("prodName")+9;
    for (var j = i; j < paramStr.length; j++) {
      if (paramStr.charAt(j) == "&")
        break;
      prodName += paramStr.charAt(j);
    }
    var i = paramStr.indexOf("prodID=")+7;
    for (var j = i; j < paramStr.length; j++) {
      if (paramStr.charAt(j) == "&")
        break;
      prodID += paramStr.charAt(j);
    }
    prodName = decodeURIComponent(prodName);
    prodID = decodeURIComponent(prodID);

/* use jQuery to put the product name into the appropriate span tag with the right ID */

  $("#productName").text(prodName);

}) /* ends the document.ready */
