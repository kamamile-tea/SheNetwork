$(document).ready(function(){
  const Url='https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77ypwly5aaayc6&redirect_uri=https://techtogether-hackathon.phinchosherpa.repl.co/signUp.html&state=oox13uf&scope=r_liteprofile%20r_emailaddress%20w_member_social';
  $('.butn').click(function(){
  //   $.ajax({
  //     url: Url,
  //     type:"GET",
  //     success: function(result){
  //     console.log(result)
  //     },
  //     error:function(error){
  //       console.log('Error ${error}')
  //     }  
  // })

  window.location.href = Url;
  })
})