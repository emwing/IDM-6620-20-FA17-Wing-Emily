/* function toggleTransle():
  -Accepts ID of HTML elementID
  -Listens for button click
  -Toggle innerHTML */

  $("document").ready(function() {
    var words = document.getElementById('words'),
      toggle = 1;

    $('#translate').click(function() {
      switch (toggle) {
        case 0:
          words.innerHTML = "<p>one two three</p>";
          toggle = 1;
          break;

        case 1:
          words.innerHTML = "<p>ichi ni san</p><p>Japanese Romanji</p>";
          toggle = 2;
          break;

        case 2:
          words.innerHTML = "<p>いち に さん</p><p>Japanese Hiragana</p>";
          toggle = 3;
          break;

        case 3:
          words.innerHTML = "<p>一 二 三</p><p>Japanese Kanji</p>";
          toggle = 0;
          break;

        default:
          words.innerHTML = "<p>1 2 3</p>";
          break;
      }
    });
  });
