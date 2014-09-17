$(function() {
  $.ajax('http://us.battle.net/api/wow/character/the-venture-co/Atta?fields=stats', {
     success: function(data) {
        $("#blizzout").html("<b>"+data["name"]+"</b> my main")
     },
     error: function(xhr, status) {
       console.log(status);
     },
     dataType: 'jsonp',
     jsonp: 'jsonp'
   });
});