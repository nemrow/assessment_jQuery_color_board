$(document).ready(function(){
  $('#get_color').click(function(){
    $.post('/color',function(data){
      $('ul li:nth-child('+data['cell']+')')
      .css('background-color',data['color'])
    })
  })
});
