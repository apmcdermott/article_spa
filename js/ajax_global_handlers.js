$(document).ready(function(){

  // Global Handler that fires at the beginning of each AJAX request
  $(document).ajaxStart(function(){
    // This will execute at the start of each AJAX call
    $('#ajaxSpinnerImage').show();
  }).ajaxStop(function(){
    // This will execute at the end of each AJAX call
    $('#ajaxSpinnerImage').hide();
  }).ajaxError(function(event, request, settings) {
    // Stuff to do when an AJAX call returns an error
    $('#msg').append("<p>Error requesting page " + settings.url + "</p>");
  });
});
