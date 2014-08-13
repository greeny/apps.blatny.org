jQuery(function($) {
	document._greeny = document._greeny || {};
	var scroll = document._greeny.autoScroll = document._greeny.autoScroll || {
		speed: 0,
		active: false,
		bodySelector: $('body'),
		autoScroll: function() {
			if(!this.active) {
				return;
			}
			this.bodySelector.scrollTop(this.bodySelector.scrollTop() + this.speed);
		},
		interval: setInterval(this.autoScroll, 25)
	};
	scroll.speed++;
	scroll.active = true;
	if(scroll.speed > 3) {
		scroll.speed = 0;
		scroll.active = false;
	}
});
