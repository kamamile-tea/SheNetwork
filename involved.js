$(function () {
  $(['[data-toggle=popover]']).popover({
  })
})

$("#studentButton").click(function(){
  $("#studentBlock").removeClass("d-none");
  $("#selection").addClass("d-none");
});

$("#professionalButton").click(function(){
  $("#professionalBlock").removeClass("d-none");
  $("#selection").addClass("d-none");
});

$("#back").click(function(){
  $("#professionalBlock").addClass("d-none");
  $("#studentBlock").addClass("d-none");
  $("#selection").removeClass("d-none");
});

$(document).on('click', '.alertButton', function()
{
    $("#signup").modal('show');
});

$(document).on('click', '#signupButton', function()
{
    $("#signup").modal('hide');
    window.setTimeout(function(){
      $("#signupClose").modal('show');
    }, 200);
});