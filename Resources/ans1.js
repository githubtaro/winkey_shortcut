// {q:"windows ロゴ + R", a:"ファイル名を指定して実行"}

var view_ans_1 = Ti.UI.createView();
var label_ans_1 = Ti.UI.createLabel({
	color: '#999',
	text: 'Run dialog box',
	height: 'auto',
	width: 'auto',
	top: 'auto'
});
view_ans_1.add(label_ans_1);
Ti.UI.currentWindow.add(view_ans_1);
