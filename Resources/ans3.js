// {q:"windows ロゴ + F", a:"ファイルまたはフォルダの検索"}

var view_ans_3 = Ti.UI.createView();
var label_ans_3 = Ti.UI.createLabel({
	color: '#999',
	text: 'Find files or folders',
	height: 'auto',
	width: 'auto',
	top: 'auto'
});
view_ans_3.add(label_ans_3);
Ti.UI.currentWindow.add(view_ans_3);
