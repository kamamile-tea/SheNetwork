AOS.init({
  once: true
})

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


$("#sendMessage").click(function(){
  $("#messageAlert").removeClass("d-none");
  window.setTimeout(function(){
    $("#messageAlert").addClass("d-none");
  }, 3000)
})