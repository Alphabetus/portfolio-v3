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

// EXERCISE 2.8        #########################################################
// initialize counter & vars
var charLimitMax = 50; // defines the maximum amount of chars
var charLimitMin = 5; // defines minimum amount of chars
var defaultOut = "0/" + charLimitMax + " characters"; // prints default output
var charCount = $("#contact_input_message").val().length; // counts input
console.log(charCount);
// START UP ########
// validates if char number is exactly zero
if (charCount === 0){
  console.log("User has exactly 0 chars.");
}
// validate char length is inferior to char min
if (charCount < charLimitMin){
  $("#contact_input_button").hide(); // hides the submition button
  $("#char_limit").css("color","var(--color-error)"); // gets error color on limit
  // required logs
  console.log("Char min req not met");
}
// generate default char length print
$("#char_limit").text(defaultOut);
// on keyUp
$("#contact_input_message").on("keyup", function(){
  // validates if char number is exactly ten
  if (charCount === 10){
    console.log("User has exactly 10 chars.");
  }
  // recounts char length on keyup
  charCount = $("#contact_input_message").val().length;
  // refills container with right string
  var out = charCount + "/" + charLimitMax + "characters" ;
  $("#char_limit").text(out);
  // validate char length with min and max values as reference
  if (charCount > charLimitMax || charCount < charLimitMin){
    $("#char_limit").css("color","var(--color-error)"); // css change using root variables.
    $("#contact_input_button").hide(); // hides the submition button
    // required logs
    console.log("Char min or max req not met");
  }
  else{
    // during this flow the user can submit. conditions met
    $("#char_limit").css("color","var(--color-01)");
    $("#contact_input_button").show(); //displays the submition button
    // required logs
    console.log("Can submit. conditions met");
  }
  $("#char_limit").text(out);
});



// #############################################################################
});
