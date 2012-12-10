$(function(){
			var $frames = $(".accordion .accordion__item");

			$(".accordion__item-name").on("click", function(){

				var $this = $(this),
				$target = $this.next(".accordion__item-text");

				if ($this.parent().hasClass("active")) {
					$target.slideUp();
					$this.parent().removeClass("active");

				}else{
					$frames.children(".accordion__item-text").slideUp();
					$frames.removeClass("active");
					$target.slideDown();
					$(this).parent().addClass("active");
				}
	});
});