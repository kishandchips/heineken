;(function($) {

	window.main = {
		vars: {},
		init: function(){

			
			$('.subnavtoggle').click(function(e) {
				e.preventDefault();					
				parent = $(this).parent();	
				$('.subnav', parent).slideToggle();
				$(this).toggleClass('open');
				parent.toggleClass('opened');
			});	

			$('.topthetop').click(function(e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: 0}, 500);
				return false;
			});					
		},



		loaded: function(){
			$('body').addClass('loaded');
		},

		scrollTo: function(target){
			if(target.length){
				$('html, body').animate({scrollTop: target.offset().top});
			}
		}
	}

	$(function(){
		main.init();
	});

	$(window).load(function(){
		main.loaded();
	});
})(jQuery);