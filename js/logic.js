$(function(){
			var $frames = $(".b-accordion .b-accordion__item");

			$(".b-accordion__item-name").on("click", function(){

				var $this = $(this),
				$target = $this.next(".b-accordion__item-text");

				if ($this.parent().hasClass("active")) {
					$target.slideUp();
					$this.parent().removeClass("active");

				}else{
					$frames.children(".b-accordion__item-text").slideUp();
					$frames.removeClass("active");
					$target.slideDown();
					$(this).parent().addClass("active");
				}
	});
});