// {q:"windows ロゴ + Tab", a:"ウィンドウの循環"}

var view_ans_4 = Ti.UI.createView();
var label_ans_4 = Ti.UI.createLabel({
	color: '#999',
	text: 'Cycle through taskbar buttons',
	height: 'auto',
	width: 'auto',
	top: 'auto'
});
view_ans_4.add(label_ans_4);
Ti.UI.currentWindow.add(view_ans_4);
