// 変数に要素を入れる
var trigger = $('.modal'),
	wrapper = $('.modal__wrapper'),
	layer = $('.modal__layer'),
	container = $('.modal__container'),
	close = $('.modal__close'),
	content = $('.modal__content');

// 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
$(trigger).click(function () {
	$(wrapper).fadeIn(400);

	// クリックした画像のHTML要素を取得して、置き換える
	$(content).html($(this).prop('outerHTML'));

});

// 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
$(layer).add(close).click(function () {
	$(wrapper).fadeOut(400);

});


// お問い合わせフォーム
$('.js-input').keyup(function () {
	if ($(this).val()) {
		$(this).addClass('not-empty');
	} else {
		$(this).removeClass('not-empty');
	}
});


