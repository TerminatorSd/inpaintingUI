var DOMAIN = 'http://inpainting.shaodongweb.top:6600'

window.onload = function () {
  
  $.ajax({
    type: 'get',
    url: DOMAIN + '/test' ,
    data: {},
    success: function(res) {
      console.log(res);
    },
    dataType: 'json'
  });
}