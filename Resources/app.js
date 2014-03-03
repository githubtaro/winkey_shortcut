// タブ（問題部分，解答まとめ部分）
var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#ccc'
});
// 問題部分
var view = Ti.UI.createView();
// 表示ラベル
var resultLabel = Ti.UI.createLabel({
	font: { fontSize: 50 },
	textAlign: 'center',
	width: 320,
	height: 'auto',
	top: 50,
	left: 'auto',
	color: '#000',
	shadowColor: '#fff',
	shadowColor: { x:0, y:1}
});
// 実行用のボタン作成
var button = Ti.UI.createButton({
	title: 'Please Tap',
	width: 200,
	height: 80,
	top: 320,
	left: 80,
	font: { fontSize: 22 },
	backgroundColor: 'blue'
});
// イベント設定
// 問題の設定
var questions = [
	{q:"windows ロゴ + R", a:"ファイル名を指定して実行"},
	{q:"windows ロゴ + M", a:"ウィンドウを全て最小化"},
	{q:"windows ロゴ + F", a:"ファイルまたはフォルダの検索"},
	{q:"windows ロゴ + Tab", a:"ウィンドウの循環"},
	{q:"windows ロゴ + L", a:"画面のロック"}
];
//変数の設定
var tapCount = 0;
var answer;
// ボタンをタップした時のアクション
button.addEventListener('click', function(){
	tapCount++;
	if (tapCount % 2 == 1) {
		var data = questions[Math.floor(Math.random() * questions.length)];
		resultLabel.text = data.q;
		answer = data.a;
		resultLabel.backgroundColor = '#666';
	} else {
		resultLabel.text = answer;
		resultLabel.backgroundColor = '#f66';
	}
});

view.add(resultLabel);
view.add(button);
win1.add(view);

var win2 = Ti.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'white'
});
// 解答まとめ
// 表示するデータ部分
var data =[
	{title:'windows ロゴ + R', hasChild:true, dest:'ans1.js'},
	{title:'windows ロゴ + M', hasChild:true, dest:'ans2.js'},
	{title:'windows ロゴ + F', hasChild:true, dest:'ans3.js'},
	{title:'windows ロゴ + Tab', hasChild:true, dest:'ans4.js'},
	{title:'windows ロゴ + L', hasChild:true, dest:'ans5.js'},
];
var table = Ti.UI.createTableView({
	data: data
});
// テーブルをクリックした時のイベント
table.addEventListener('click', function(e){
	if (e.rowData.hasChild) {
		var w = Ti.UI.createWindow({
			url: e.rowData.dest,
			title: e.rowData.title,
			backgroundColor: 'white'
		});
		tab1.open(w);
	}
});
// viewの読み込み
var view = Ti.UI.createView();
view.add(table);
win2.add(view);

var tab1 = Ti.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});
var tab2 = Ti.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();

// 画面サイズ確認
Ti.API.info('width: ' + Ti.Platform.displayCaps.platformWidth);
Ti.API.info('height: ' + Ti.Platform.displayCaps.platformHeight);
