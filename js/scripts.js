// BEFORE LOAD
// Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId            : '345613179594716',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.0'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
// Twitter
// AFTER LOAD
$(document).ready(function(){
// Smooth Scolling #############################################################
var $root = $('html, body');
$('.smoothClass a').click(function() {
  var href = $.attr(this, 'href');
  if (href != undefined && href != '#') {
    $root.animate({
      scrollTop: $(href).offset().top
    }, 650, function () {
      window.location.hash = href;
    });
  }
  return false;
});
// Smooth Scolling #############################################################
$(function () {
    $("[data-toggle='tooltip']").tooltip({html:true});
  });

// QUOTE FORM SUBMIT  ##########################################################
// NOTE:
// i have 3 different forms. 1 for each landing page.
// While using classes to retreive .val() only the first form was working
// When using other breakpoint forms, input was giving null.
//
// workaround, added single ID to each form
// and then a common function that switches according the triggered button.

$("#query_btn_submit-1").on('click',function(){
  quoteSubmit(1);
});
$("#query_btn_submit-2").on('click',function(){
  quoteSubmit(2);
});
$("#query_btn_submit-3").on('click',function(){
  quoteSubmit(3);
});

function quoteSubmit(form){
  var email = $("#input_email-" + form).val();
  $("#input_email-" + form).attr("placeholder", "Check your inbox");
  $("#input_email-" + form).val("");
  $(".query_ok").text("Email sent to " + email);
};

// BACKGROUND TINTING  #########################################################
// NOTE: note that this code overlays my css!
$("#contact_input_message").css("background-color","#404040");

// test
function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}
// #############################################################################
});
