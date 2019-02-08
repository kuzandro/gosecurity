import './../sass/styles.sass';
import _ from 'lodash';
import $ from 'jquery';
import backgr from './../img/backgroundmin.png';
import repair from './../img/repair.svg';
import payment from './../img/payment.svg';
import lawyer from './../img/lawyer.svg';
import claus_skaaning from './../img/claus_skaaningmin.png';
import mette_kibsgaard from './../img/mette_kibsgaardmin.png';
import tatiana_botskina from './../img/tatiana_botskinamin.png';
import yury_zubarovskiy from './../img/yury_zubarovskiymin.png';

import facebook from './../img/facebook.svg';
import linkedin from './../img/linkedin.svg';
import telegram from './../img/telegram.svg';

function getBodyScrollTop() {
		var offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
		var fl = 0;
		if ((offset > document.documentElement.clientHeight - 100) && (fl === 0)) {
		document.querySelector('#topblock').className = "stack grid";
		fl = 1;
		}
		else {
		document.querySelector('#topblock').className = "topblock grid";
		}
}
window.addEventListener("scroll", getBodyScrollTop);

var menu_selector = ".menu-main"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
var last = ".last";
function onScroll(){
	var scroll_top = $(document).scrollTop() + 100;
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if ($(window).scrollTop() < $(document).height() - $(window).height()){
			if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
				$(menu_selector + " a.active").removeClass("active");
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		}
		if ($(window).scrollTop() == $(document).height() - $(window).height()){
		  $(this).removeClass("active");
          $(last).addClass("active");
     	} 
	});
}
$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$("a[href^=#]").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
});

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      if ($(this).closest('#topblock').hasClass('stack')){	
	      $(this).closest('#topblock').removeClass('stack');
	      $(this).closest('#topblock').removeClass('grid');
	      $(this).closest('#topblock').toggleClass('menu_state_open');
  	  }
  	  else{
  	  	  $(this).closest('#topblock').toggleClass('stack');
	      $(this).closest('#topblock').toggleClass('grid');
	      $(this).closest('#topblock').removeClass('menu_state_open');
  	  }
    });
  });
})(jQuery);

