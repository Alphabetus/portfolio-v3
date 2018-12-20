// PORTFOLIO HANDLER #########################################################
// multi dimensional array to support captions
// portfolioImages[x][0] == images
// portfolioImages[x][1] == captions
var portfolioArray = [
  ["img/dummy_01.jpg","DEFAULT WORK DESCRIPTION 1<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_02.jpg","DEFAULT WORK DESCRIPTION 2<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_03.jpg","DEFAULT WORK DESCRIPTION 3<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_04.jpg","DEFAULT WORK DESCRIPTION 4<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_01.jpg","DEFAULT WORK DESCRIPTION 5<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_02.jpg","DEFAULT WORK DESCRIPTION 6<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_03.jpg","DEFAULT WORK DESCRIPTION 7<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_04.jpg","DEFAULT WORK DESCRIPTION 8<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_01.jpg","DEFAULT WORK DESCRIPTION 9<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_02.jpg","DEFAULT WORK DESCRIPTION 10<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_03.jpg","DEFAULT WORK DESCRIPTION 11<br>Block only SM and above<br><br>Will link modal with full screen preview."],
  ["img/dummy_04.jpg","DEFAULT WORK DESCRIPTION 12<br>Block only SM and above<br><br>Will link modal with full screen preview."]
];

// gen portfolio
genPortfolio();
// generate portfolio content images
function genPortfolio(){
  for(var i = 0; i < portfolioArray.length; i++){
    // append html
    $("#work").append("\
    <div class='col-6 col-sm-4 col-md-3 col-lg-2 portfolio_container'>\
      <img src='" + portfolioArray[i][0] + "' alt='Example #" + i + "' class='img-fluid portfolio_item'/>\
      <div class='col-12 d-none d-sm-block portfolio_overlay'>\
      " + portfolioArray[i][1] + "\
      </div>\
    </div>\
    ");
    // alter colors
    var images = $("#work .portfolio_container");
    if (i % 2 === 0){;
      $(images[i]).css("border", "0.15em solid var(--color-06)");
      console.log(321);
    }
    else{
      $(images[i]).css("border", "0.15em solid var(--color-07)");
      console.log(123);
    }
  };
};
// PORTFOLIO OVERLAY         #########################################################
// fades in overlay
$(".portfolio_overlay").hover(function(){
  $(this).fadeTo(750, 0.72, "swing", function(){
  });
});
// fades out overlay
$(".portfolio_overlay").mouseleave(function(){
  $(this).fadeTo(750, 0, "swing");
});
