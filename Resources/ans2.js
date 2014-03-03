// {q:"windows ロゴ + M", a:"ウィンドウを全て最小化"}

var view_ans_2 = Ti.UI.createView();
var label_ans_2 = Ti.UI.createLabel({
	color: '#999',
	text: 'Minimize all',
	height: 'auto',
	width: 'auto',
	top: 'auto'
});
view_ans_2.add(label_ans_2);
Ti.UI.currentWindow.add(view_ans_2);
