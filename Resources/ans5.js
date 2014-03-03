// {q:"windows ロゴ + L", a:"画面のロック"}

var view_ans_5 = Ti.UI.createView();
var label_ans_5 = Ti.UI.createLabel({
	color: '#999',
	text: 'display lock',
	height: 'auto',
	width: 'auto',
	top: 'auto'
});
view_ans_5.add(label_ans_5);
Ti.UI.currentWindow.add(view_ans_5);
