	$(function(){
		// 預設標題區塊 .abgne_tip_gallery_block .caption 的 top
		var _titleHeight = 40;
		$('.abgne_tip_gallery_block').each(function(){
			// 先取得區塊的高及標題區塊等資料
			var $this = $(this), 
				_height = $this.height(), 
				$caption = $('.caption', $this),
				_captionHeight = $caption.outerHeight(true),
				_speed = 200;
			
			// 當滑鼠移動到區塊上時
			$this.hover(function(){
				// 讓 $caption 往上移動
				$caption.stop().animate({
					top: _height - _captionHeight
				}, _speed);
			}, function(){
				// 讓 $caption 移回原位
				$caption.stop().animate({
					top: _height - _titleHeight
				}, _speed);
			});
		});
	});
