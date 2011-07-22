(function($){
	$.fn.extend({ 
		externallinks: function(options) {
			var defaults = {
				title: 'Opens in a new window',
				image: 'data:image/gif;base64,R0lGODlhCwALAKIEALW679LS/P///3d3zP///wAAAAAAAAAAACH5BAEAAAQALAAAAAALAAsAAAMnSATTPkCNIGoNsNUnGrbY0ImigH2aeHYjO1ntC4fm4zDUPCiMDSkJADs=',
				class: 'external'
			}
		
			var options =  $.extend(defaults, options);
	
			return this.each(function() {
				if($(this).attr('href').indexOf(document.domain) < 0 & $(this).attr('href').substring(0, 1) != '/') {
					$(this).addClass(options.class);
					$(this).attr('title', ($(this).attr('title')) ? $(this).attr('title') + ': ' + options.title : options.title);
					$(this).append('<img src="' + options.image + '" style="margin-left:5px;" />');
					$(this).click(function(){
						window.open($(this).attr('href'));
						return false;
					});
				}
			});
		}
	});
})(jQuery);