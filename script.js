$(function() {
  var slider = $('.container > div');
  
  $('.content').click(function() {
    var left = -$(this).position().left;
    left -= $(this).outerWidth() / 2;
    left += $('.container').width() / 2;
    
    slider.css('left', left + 'px');
  });
});
function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(28.6078176,77.04061469999999),
mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'),myOptions);
marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(28.6078176,77.04061469999999)});
infowindow = new google.maps.InfoWindow({content:'<strong>Here we are!</strong><br>Delhi Public School, dwarka<br>'});
google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
