$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 220) {
    	$('#header').addClass('chng-main');
    }
    else {
    $('#header').removeClass('chng-main');
    }
  });
});

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 120	) {
    	$('#arrow').addClass('hide');
    }
    else {
    $('#arrow').removeClass('hide');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('main'), {
    dotColor: '#0DE3D6',
    lineColor: '#0DE3D6'
  });
  var intro = document.getElementById('container');
  intro.style.marginBottom = - intro.offsetHeight / 5 + 'px';
}, false);
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
function makeTimer() {

			var endTime = new Date("30 October 2017 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
