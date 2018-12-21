// WEBSITE METRICS
var loadTimerStart = Date.now();
// PORTFOLIO HANDLER #########################################################
// portfolio object array
var portfolioObjArray = [
  {
    title: "Dummy #1",
    pic: "img/dummy_01.jpg",
    caption: "Default work description for dummy 1"
  },
  {
    title: "Dummy #2",
    pic: "img/dummy_02.jpg",
    caption: "Default work description for dummy 2"
  },
  {
    title: "Dummy #3",
    pic: "img/dummy_03.jpg",
    caption: "Default work description for dummy 3"
  },
  {
    title: "Dummy #4",
    pic: "img/dummy_04.jpg",
    caption: "Default work description for dummy 4"
  },
  {
    title: "Dummy #5",
    pic: "img/dummy_01.jpg",
    caption: "Default work description for dummy 5"
  },
  {
    title: "Dummy #6",
    pic: "img/dummy_02.jpg",
    caption: "Default work description for dummy 6"
  },
  {
    title: "Dummy #7",
    pic: "img/dummy_03.jpg",
    caption: "Default work description for dummy 7"
  },
  {
    title: "Dummy #8",
    pic: "img/dummy_04.jpg",
    caption: "Default work description for dummy 8"
  },
  {
    title: "Dummy #9",
    pic: "img/dummy_01.jpg",
    caption: "Default work description for dummy 9"
  },
  {
    title: "Dummy #10",
    pic: "img/dummy_02.jpg",
    caption: "Default work description for dummy 10"
  },
  {
    title: "Dummy #11",
    pic: "img/dummy_03.jpg",
    caption: "Default work description for dummy 11"
  },
  {
    title: "Dummy #12",
    pic: "img/dummy_04.jpg",
    caption: "Default work description for dummy 12"
  }
];
// SIMPLY EXECUTE    ###########################################################
// gen portfolio
genPortfolio();
// ON DOCUMENT READY ###########################################################
$(document).ready(function(){
  //logs the loading time of the website on doc ready
  console.log(loadingTime(loadTimerStart,1));
  // PORTFOLIO OVERLAY         ##############################################################################
  var timeoutIN;
  var timeoutOUT;
  // listener portfolio div
  $(".open_portfolio_preview").on('click', function(){
    genPortPreview($(this).data("portfolio"));
  });
  // listener :hover overlay
  $(".portfolio_overlay").hover(function(){
    // in
    var context = $(this);
    startTimeout(context, 1);
  }, function (){
    // out
    var context = $(this);
    clearTimeout(timeoutIN);
    startTimeout(context, 2);
  });
  // listener .clickDummy
  $(".clickDummy").hover(function(){
    // hover in
    // simple output for listener
    $("p", this).show();
  }, function(){
    // hover out
    $("p", this).hide();
  });
  //logs the loading time of the website after all doc ready stuff
  console.log(loadingTime(loadTimerStart,2));
});
// FUNCTIONS AREA ##############################################################
// Google Maps API function
function initMap(){
  // vars
  // sielwall crossing. the best place in the world 53.072958, 8.823245
  var location = {lat: 53.072958, lng: 8.823245};
  // map handler
  var map = new google.maps.Map(document.getElementById('Gmaps'), {
      center: location,
      zoom: 15, // zoom
      // style obj array
      styles: [
              {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#01A382'}]
              },
              {
                featureType: 'poi',
                stylers: [{visibility: 'off'}] //hides poi
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#5e7a75'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#5e7a75'}]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#5e7a75'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#5e7a75'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#01A382'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
              }
            ]
  });
  // marker handler
  var myPlace = new google.maps.Marker({
    position: location,
    map: map,
    title: "This is me",

  });
  // log
  console.log("map loaded");
}
// get loading time for website
function loadingTime(start, phase){
  var timeNow = Date.now();
  var total = timeNow - start;
  // defines which phase of the timer
  switch (phase) {
    case 1:
      var out = "Doc ready in "+ total + "ms.";
      break;
    case 2:
      var out = "Website fully loaded in "+ total + "ms.";
      break;
    default:
      console.log("Switch error on loading timer script");
  }
  return out;
}
// generate portfolio modal preview
function genPortPreview(id){
  // set title
  $(".modal-title", "#modal_portfolio_preview").text(portfolioObjArray[id].title);
  // set caption text
  $(".modal-caption", "#modal_portfolio_preview").text(" " + portfolioObjArray[id].caption);
  // paint image
  $("img", "#modal_portfolio_preview").attr("src", portfolioObjArray[id].pic);
  // display modal
  $('#modal_portfolio_preview').modal();
}
// generate portfolio content images
function genPortfolio(){
  for(var i = 0; i < portfolioObjArray.length; i++){
    // append html
    $("#work").append("\
    <div class='col-6 col-sm-4 col-md-3 col-lg-2 portfolio_container open_portfolio_preview' \
    data-portfolio='"+ i +"'>\
      <img src='" + portfolioObjArray[i].pic + "' alt='Example #" + i + "' class='img-fluid portfolio_item'/>\
      <div class='col-12 d-none d-sm-block portfolio_overlay '\
      data-portfolio='"+ i +"'>\
      " + portfolioObjArray[i].caption + "\
      </div>\
    </div>\
    ");
    // alter colors
    var images = $("#work .portfolio_container");
    if (i % 2 === 0){;
      $(images[i]).css("border", "0.15em solid var(--color-06)");
      // console.log(321);
    }
    else{
      $(images[i]).css("border", "0.15em solid var(--color-07)");
      // console.log(123);
    }
  };
};
// handle timeout start.
function startTimeout(context, timer){
  switch (timer){
    case 1:
      timeoutIN = setTimeout(function (){fadeOverlay(context, true)} , 350);
      break;
    case 2:
      timeoutOUT = setTimeout(function (){fadeOverlay(context, false)} , 350);
      break;
  }
}
// handle fade in & out
function fadeOverlay(context, bool){
  if (bool){
    // bool true = fade IN
    context.fadeTo(750, 0.72, "swing", function(){});
  }
  else{
    // bool false = fade OUT
    context.fadeTo(750, 0.0, "swing", function(){});
  }
}
//
