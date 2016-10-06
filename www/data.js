var jobList = ["全", "ナ", "戦", "暗", "白", "学", "占", "モ", "竜", "忍", "詩", "機", "黒", "召"];

var equipmentList = [
	{ name: "ヘヴィアロイ・ロングソード", job: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ナイト武器", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "ソーリアンレザー": 1, "鍛人のデミマテリダ": 3, "デミクリスタル": 4 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "ソーリアンレザー": 1, "鍛人のデミマテリダ": 3, "デミクリスタル": 4 } },
	{ name: "ヘヴィアロイ・ウォーアクス", job: [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "戦士武器", allGreen: 1, require1: { "ヘヴィアロイインゴット": 3, "チーク材": 1, "シンチレーターインゴット": 1, "ソーリアンレザー": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "重石華": 9, "チタンカーバイド": 6, "ウォルフラムインゴット": 6, "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "ソーリアンレザー": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘヴィアロイ・グレートソード", job: [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "暗黒武器", allGreen: 1, require1: { "ヘヴィアロイインゴット": 4, "シンチレーターインゴット": 1, "神代木": 1, "ソーリアンレザー": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "重石華": 12, "チタンカーバイド": 8, "ウォルフラムインゴット": 8, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "神代木": 1, "ソーリアンレザー": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "チークケーン", job: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "白魔道士武器", allGreen: 1, require1: { "チーク材": 3, "シンチレーターインゴット": 2, "カーネリアン": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "チーク原木": 9, "ゴブリンラッカー": 6, "神保石": 27, "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "カーネリアン": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘミキオンコーデックス", job: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], description: "学者武器", allGreen: 1, require1: { "ヘミキオンレザー": 3, "シンチレーターインゴット": 2, "サファイア": 1, "プラチナエンチャントインク": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "ヘミキオンの粗皮": 6, "樟脳": 9, "ワットル樹皮": 3, "レザーワックス": 3, "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "サファイア": 1, "プラチナエンチャントインク": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "シンチレータープラニスフィア", job: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], description: "占星術士武器", allGreen: 1, require1: { "シンチレーターインゴット": 4, "ヘヴィアロイインゴット": 1, "アイオライト": 3, "プラチナエンチャントインク": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "輝金鉱": 12, "シンチレーターナゲット": 8, "プラチナインゴット": 4, "重石華": 3, "チタンカーバイド": 2, "ウォルフラムインゴット": 2, "アイオライト": 3, "プラチナエンチャントインク": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘヴィアロイクロー", job: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], description: "モンク武器", allGreen: 1, require1: { "ヘヴィアロイインゴット": 3, "シンチレーターインゴット": 2, "神代木": 1, "ソーリアンレザー": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "重石華": 9, "チタンカーバイド": 6, "ウォルフラムインゴット": 6, "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "神代木": 1, "ソーリアンレザー": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘヴィアロイランス", job: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], description: "竜騎士武器", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "チーク材": 2, "シンチレーターインゴット": 1, "ソーリアンレザー": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "チーク原木": 6, "ゴブリンラッカー": 4, "神保石": 18, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "ソーリアンレザー": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘヴィアロイダガー", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], description: "忍者武器", allGreen: 1, require1: { "ヘヴィアロイインゴット": 3, "シンチレーターインゴット": 2, "カシミヤ織物": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "重石華": 9, "チタンカーバイド": 6, "ウォルフラムインゴット": 6, "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "カシミヤ織物": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "チークコンポジットボウ", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], description: "詩人武器", allGreen: 1, require1: { "チーク材": 3, "シンチレーターインゴット": 2, "カシミヤ織物": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "チーク原木": 9, "ゴブリンラッカー": 6, "神保石": 27, "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "カシミヤ織物": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘヴィアロイカルバリン", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], description: "機工士武器", allGreen: 1, require1: { "ヘヴィアロイインゴット": 3, "シンチレーターインゴット": 2, "神代木": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5, "黒色火薬": 1 }, require2: { "重石華": 9, "チタンカーバイド": 6, "ウォルフラムインゴット": 6, "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "神代木": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5, "黒色火薬": 1 } },
	{ name: "シンチレータースタッフ", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], description: "黒魔道士武器", allGreen: 1, require1: { "シンチレーターインゴット": 3, "チーク材": 2, "サファイア": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "輝金鉱": 9, "シンチレーターナゲット": 6, "プラチナインゴット": 3, "チーク原木": 6, "ゴブリンラッカー": 4, "神保石": 18, "サファイア": 1, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘミキオングリモア", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], description: "召喚士武器", allGreen: 1, require1: { "ヘミキオンレザー": 3, "シンチレーターインゴット": 2, "アイオライト": 1, "プラチナエンチャントインク": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 }, require2: { "ヘミキオンの粗皮": 6, "樟脳": 9, "ワットル樹皮": 3, "レザーワックス": 3, "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "アイオライト": 1, "プラチナエンチャントインク": 2, "鍛人のデミマテリダ": 4, "デミクリスタル": 5 } },
	{ name: "ヘヴィアロイ・カイトシールド", job: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ナイト盾", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "ウォルフラムプレートレット": 2, "ゴールドインゴット": 1, "鍛人のデミマテリダ": 1, "デミクリスタル": 1 }, require2: { "重石華 ": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "ウォルフラムプレートレット": 2, "ゴールドインゴット": 1, "鍛人のデミマテリダ": 1, "デミクリスタル": 1 } },
	{ name: "ヘヴィアロイ・ディフェンダーチェーンコイフ", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ディフェンダー頭", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "活力の錬金溶剤G3": 2 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "活力の錬金溶剤G3": 2 } },
	{ name: "ヘヴィアロイ・スレイヤーチェーンコイフ", job: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], description: "スレイヤー頭", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 2 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 2 } },
	{ name: "シンチレーターストライカーサークレット", job: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], description: "ストライカー頭", allGreen: 1, require1: { "シンチレーターインゴット": 2, "スタービロード": 1, "アイオライト": 2, "ゴールドインゴット": 1, "剛力の錬金溶剤G3": 2 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "アイオライト": 2, "ゴールドインゴット": 1, "剛力の錬金溶剤G3": 2 } },
	{ name: "シンチレーターレンジャーサークレット", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], description: "レンジャー頭", allGreen: 1, require1: { "シンチレーターインゴット": 2, "スタービロード": 1, "ルビー": 2, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 2 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ルビー": 2, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 2 } },
	{ name: "シンチレータースカウトサークレット", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], description: "スカウト頭", allGreen: 1, require1: { "シンチレーターインゴット": 2, "スタービロード": 1, "サファイア": 2, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 2 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "サファイア": 2, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 2 } },
	{ name: "スタービロード・ヒーラーフード", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "ヒーラー頭", allGreen: 1, require1: { "スタービロード": 2, "シンチレーターインゴット": 1, "刺繍糸": 1, "カシミヤ織物": 1, "心力の錬金溶剤G3": 2 }, require2: { "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "刺繍糸": 1, "カシミヤ織物": 1, "心力の錬金溶剤G3": 2 } },
	{ name: "スタービロード・キャスターフード", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "キャスター頭", allGreen: 1, require1: { "スタービロード": 2, "シンチレーターインゴット": 1, "刺繍糸": 1, "カシミヤ織物": 1, "知力の錬金溶剤G3": 2 }, require2: { "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "刺繍糸": 1, "カシミヤ織物": 1, "知力の錬金溶剤G3": 2 } },
	{ name: "ヘヴィアロイ・ディフェンダーキュイラス", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ディフェンダー胴", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "スタービロード": 1, "ウォルフラムプレートレット": 2, "ゴールドインゴット": 1, "活力の錬金溶剤G3": 3 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ウォルフラムプレートレット": 2, "ゴールドインゴット": 1, "活力の錬金溶剤G3": 3 } },
	{ name: "ヘヴィアロイ・スレイヤーキュイラス", job: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], description: "スレイヤー胴", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "スタービロード": 1, "ウォルフラムプレートレット": 2, "ゴールドインゴット": 1, "剛力の錬金溶剤G3": 3 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ウォルフラムプレートレット": 2, "ゴールドインゴット": 1, "剛力の錬金溶剤G3": 3 } },
	{ name: "スタービロード・ストライカータバード", job: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], description: "ストライカー胴", allGreen: 1, require1: { "スタービロード": 3, "ヘミキオンレザー": 1, "刺繍糸": 1, "カシミヤ織物": 1, "ウォルフラムプレートレット": 1, "剛力の錬金溶剤G3": 3 }, require2: { "星綿": 9, "極細絹糸": 6, "アラクネウェブ": 3, "ヘミキオンの粗皮": 2, "樟脳": 3, "ワットル樹皮": 1, "レザーワックス": 1, "刺繍糸": 1, "カシミヤ織物": 1, "ウォルフラムプレートレット": 1, "剛力の錬金溶剤G3": 3 } },
	{ name: "スタービロード・レンジャータバード", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], description: "レンジャー胴", allGreen: 1, require1: { "スタービロード": 3, "ヘミキオンレザー": 1, "刺繍糸": 1, "カシミヤ織物": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 3 }, require2: { "星綿": 9, "極細絹糸": 6, "アラクネウェブ": 3, "ヘミキオンの粗皮": 2, "樟脳": 3, "ワットル樹皮": 1, "レザーワックス": 1, "刺繍糸": 1, "カシミヤ織物": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 3 } },
	{ name: "スタービロード・スカウトタバード", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], description: "スカウト胴", allGreen: 1, require1: { "スタービロード": 3, "ヘミキオンレザー": 1, "刺繍糸": 1, "カシミヤ織物": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 3 }, require2: { "星綿": 9, "極細絹糸": 6, "アラクネウェブ": 3, "ヘミキオンの粗皮": 2, "樟脳": 3, "ワットル樹皮": 1, "レザーワックス": 1, "刺繍糸": 1, "カシミヤ織物": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 3 } },
	{ name: "スタービロード・ヒーラーヒマティオン", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "ヒーラー胴", allGreen: 1, require1: { "スタービロード": 3, "ヘミキオンレザー": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "サファイア": 1, "心力の錬金溶剤G3": 3 }, require2: { "星綿": 9, "極細絹糸": 6, "アラクネウェブ": 3, "ヘミキオンの粗皮": 2, "樟脳": 3, "ワットル樹皮": 1, "レザーワックス": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "サファイア": 1, "心力の錬金溶剤G3": 3 } },
	{ name: "スタービロード・キャスターヒマティオン", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "キャスター胴", allGreen: 1, require1: { "スタービロード": 3, "ヘミキオンレザー": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "ルビー": 1, "知力の錬金溶剤G3": 3 }, require2: { "星綿": 9, "極細絹糸": 6, "アラクネウェブ": 3, "ヘミキオンの粗皮": 2, "樟脳": 3, "ワットル樹皮": 1, "レザーワックス": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "ルビー": 1, "知力の錬金溶剤G3": 3 } },
	{ name: "ヘヴィアロイ・ディフェンダーガントレット", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ディフェンダー手", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "活力の錬金溶剤G3": 2 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "活力の錬金溶剤G3": 2 } },
	{ name: "ヘヴィアロイ・スレイヤーガントレット", job: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], description: "スレイヤー手", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 2 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・ストライカーグローブ", job: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], description: "ストライカー手", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "剛力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "剛力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・レンジャーグローブ", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], description: "レンジャー手", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "眼力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "眼力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・スカウトグローブ", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], description: "スカウト手", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "眼力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "眼力の錬金溶剤G3": 2 } },
	{ name: "スタービロード・ヒーラーロンググローブ", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "ヒーラー手", allGreen: 1, require1: { "スタービロード": 2, "シンチレーターインゴット": 1, "刺繍糸": 1, "アイオライト": 1, "ルビー": 1, "心力の錬金溶剤G3": 2 }, require2: { "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "刺繍糸": 1, "アイオライト": 1, "ルビー": 1, "心力の錬金溶剤G3": 2 } },
	{ name: "スタービロード・キャスターロンググローブ", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "キャスター手", allGreen: 1, require1: { "スタービロード": 2, "シンチレーターインゴット": 1, "刺繍糸": 1, "サファイア": 1, "ルビー": 1, "知力の錬金溶剤G3": 2 }, require2: { "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "刺繍糸": 1, "サファイア": 1, "ルビー": 1, "知力の錬金溶剤G3": 2 } },
	{ name: "ヘヴィアロイ・ディフェンダープレートベルト", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ディフェンダー腰", allGreen: 1, require1: { "ヘヴィアロイインゴット": 1, "ヘミキオンレザー": 1, "グリフィンストラップ": 1, "ウォルフラムプレートレット": 1, "活力の錬金溶剤G3": 1 }, require2: { "重石華": 3, "チタンカーバイド": 2, "ウォルフラムインゴット": 2, "ヘミキオンの粗皮": 2, "樟脳": 3, "ワットル樹皮": 1, "レザーワックス": 1, "グリフィンストラップ": 1, "ウォルフラムプレートレット": 1, "活力の錬金溶剤G3": 1 } },
	{ name: "ヘヴィアロイ・スレイヤープレートベルト", job: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], description: "スレイヤー腰", allGreen: 1, require1: { "ヘヴィアロイインゴット": 1, "ヘミキオンレザー": 1, "グリフィンストラップ": 1, "ウォルフラムプレートレット": 1, "剛力の錬金溶剤G3": 1 }, require2: { "重石華": 3, "チタンカーバイド": 2, "ウォルフラムインゴット": 2, "ヘミキオンの粗皮": 2, "樟脳": 3, "ワットル樹皮": 1, "レザーワックス": 1, "グリフィンストラップ": 1, "ウォルフラムプレートレット": 1, "剛力の錬金溶剤G3": 1 } },
	{ name: "ヘヴィアロイ・ストライカータセット", job: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], description: "ストライカー腰", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 1 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 1 } },
	{ name: "ヘヴィアロイ・レンジャータセット", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], description: "レンジャー腰", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "眼力の錬金溶剤G3": 1 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "眼力の錬金溶剤G3": 1 } },
	{ name: "ヘヴィアロイ・スカウトタセット", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], description: "スカウト腰", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "眼力の錬金溶剤G3": 1 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "眼力の錬金溶剤G3": 1 } },
	{ name: "スタービロード・ヒーラーサッシュ", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "ヒーラー腰", allGreen: 1, require1: { "スタービロード": 2, "刺繍糸": 1, "カシミヤ織物": 1, "心力の錬金溶剤G3": 1 }, require2: { "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "刺繍糸": 1, "カシミヤ織物": 1, "心力の錬金溶剤G3": 1 } },
	{ name: "スタービロード・キャスターサッシュ", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "キャスター腰", allGreen: 1, require1: { "スタービロード": 2, "刺繍糸": 1, "カシミヤ織物": 1, "知力の錬金溶剤G3": 1 }, require2: { "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "刺繍糸": 1, "カシミヤ織物": 1, "知力の錬金溶剤G3": 1 } },
	{ name: "ヘミキオン・ディフェンダーブレー", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ディフェンダー脚", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 2, "グリフィンストラップ": 2, "カシミヤ織物": 1, "活力の錬金溶剤G3": 3 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "グリフィンストラップ": 2, "カシミヤ織物": 1, "活力の錬金溶剤G3": 3 } },
	{ name: "ヘミキオン・スレイヤーブレー", job: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], description: "スレイヤー脚", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 2, "グリフィンストラップ": 2, "カシミヤ織物": 1, "剛力の錬金溶剤G3": 3 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 6, "極細絹糸": 4, "アラクネウェブ": 2, "グリフィンストラップ": 2, "カシミヤ織物": 1, "剛力の錬金溶剤G3": 3 } },
	{ name: "ヘミキオン・ストライカートラウザー", job: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], description: "ストライカー脚", allGreen: 1, require1: { "ヘミキオンレザー": 3, "スタービロード": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "剛力の錬金溶剤G3": 3 }, require2: { "ヘミキオンの粗皮": 6, "樟脳": 9, "ワットル樹皮": 3, "レザーワックス": 3, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "剛力の錬金溶剤G3": 3 } },
	{ name: "ヘミキオン・レンジャートラウザー", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], description: "レンジャー脚", allGreen: 1, require1: { "ヘミキオンレザー": 3, "スタービロード": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 3 }, require2: { "ヘミキオンの粗皮": 6, "樟脳": 9, "ワットル樹皮": 3, "レザーワックス": 3, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 3 } },
	{ name: "ヘミキオン・スカウトトラウザー", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], description: "スカウト脚", allGreen: 1, require1: { "ヘミキオンレザー": 3, "スタービロード": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 3 }, require2: { "ヘミキオンの粗皮": 6, "樟脳": 9, "ワットル樹皮": 3, "レザーワックス": 3, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "刺繍糸": 1, "ゴールドインゴット": 1, "眼力の錬金溶剤G3": 3 } },
	{ name: "スタービロード・ヒーラーボトム", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "ヒーラー脚", allGreen: 1, require1: { "スタービロード": 3, "シンチレーターインゴット": 1, "刺繍糸": 2, "カシミヤ織物": 1, "心力の錬金溶剤G3": 3 }, require2: { "星綿": 9, "極細絹糸": 6, "アラクネウェブ": 3, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "刺繍糸": 2, "カシミヤ織物": 1, "心力の錬金溶剤G3": 3 } },
	{ name: "スタービロード・キャスターボトム", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "キャスター脚", allGreen: 1, require1: { "スタービロード": 3, "シンチレーターインゴット": 1, "刺繍糸": 2, "カシミヤ織物": 1, "知力の錬金溶剤G3": 3 }, require2: { "星綿": 9, "極細絹糸": 6, "アラクネウェブ": 3, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "刺繍糸": 2, "カシミヤ織物": 1, "知力の錬金溶剤G3": 3 } },
	{ name: "ヘヴィアロイ・ディフェンダーサバトン", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "ディフェンダー足", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "活力の錬金溶剤G3": 2 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "活力の錬金溶剤G3": 2 } },
	{ name: "ヘヴィアロイ・スレイヤーサバトン", job: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], description: "スレイヤー足", allGreen: 1, require1: { "ヘヴィアロイインゴット": 2, "シンチレーターインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 2 }, require2: { "重石華": 6, "チタンカーバイド": 4, "ウォルフラムインゴット": 4, "輝金鉱": 3, "シンチレーターナゲット": 2, "プラチナインゴット": 1, "グリフィンストラップ": 1, "ソーリアンレザー": 1, "剛力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・ストライカーレギンス", job: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], description: "ストライカー足", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "ソーリアンレザー": 1, "ウォルフラムプレートレット": 1, "剛力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ソーリアンレザー": 1, "ウォルフラムプレートレット": 1, "剛力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・レンジャーレギンス", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], description: "レンジャー足", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "ソーリアンレザー": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ソーリアンレザー": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・スカウトレギンス", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], description: "スカウト足", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "ソーリアンレザー": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ソーリアンレザー": 1, "ウォルフラムプレートレット": 1, "眼力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・ヒーラーオープンブーツ", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "ヒーラー足", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "グリフィンストラップ": 1, "サファイア": 1, "心力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "サファイア": 1, "心力の錬金溶剤G3": 2 } },
	{ name: "ヘミキオン・キャスターオープンブーツ", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "キャスター足", allGreen: 1, require1: { "ヘミキオンレザー": 2, "スタービロード": 1, "グリフィンストラップ": 1, "ルビー": 1, "知力の錬金溶剤G3": 2 }, require2: { "ヘミキオンの粗皮": 4, "樟脳": 6, "ワットル樹皮": 2, "レザーワックス": 2, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "グリフィンストラップ": 1, "ルビー": 1, "知力の錬金溶剤G3": 2 } },
	{ name: "シンチレーターアタッカーイヤリング", job: [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], description: "STR耳", allGreen: 1, require1: { "シンチレーターインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "剛力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "剛力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターレンジャーイヤリング", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], description: "DEX耳", allGreen: 1, require1: { "シンチレーターインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "眼力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "眼力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターディフェンダーイヤリング", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "VIT耳", allGreen: 1, require1: { "シンチレーターインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "活力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "活力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターキャスターイヤリング", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "INT耳", allGreen: 1, require1: { "シンチレーターインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "知力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "知力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターヒーラーイヤリング", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "MND耳", allGreen: 1, require1: { "シンチレーターインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "心力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ダイヤモンド": 1, "カーネリアン": 1, "心力の錬金溶剤G3": 1 } },
	{ name: "チークアタッカーチョーカー", job: [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], description: "STR首", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "剛力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "剛力の錬金溶剤G3": 1 } },
	{ name: "チークレンジャーチョーカー", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], description: "DEX首", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "眼力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "眼力の錬金溶剤G3": 1 } },
	{ name: "チークディフェンダーチョーカー", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "VIT首", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "活力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "活力の錬金溶剤G3": 1 } },
	{ name: "チークキャスターチョーカー", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "INT首", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "知力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "知力の錬金溶剤G3": 1 } },
	{ name: "チークヒーラーチョーカー", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "MND首", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "心力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "心力の錬金溶剤G3": 1 } },
	{ name: "チークアタッカーブレスレット", job: [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], description: "STR腕", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "剛力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "剛力の錬金溶剤G3": 1 } },
	{ name: "チークレンジャーブレスレット", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], description: "DEX腕", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "眼力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "眼力の錬金溶剤G3": 1 } },
	{ name: "チークディフェンダーブレスレット", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "VIT腕", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "活力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "活力の錬金溶剤G3": 1 } },
	{ name: "チークキャスターブレスレット", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "INT腕", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "知力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "知力の錬金溶剤G3": 1 } },
	{ name: "チークヒーラーブレスレット", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "MND腕", allGreen: 1, require1: { "チーク材": 1, "スタービロード": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "心力の錬金溶剤G3": 1 }, require2: { "チーク原木": 3, "ゴブリンラッカー": 2, "神保石": 9, "星綿": 3, "極細絹糸": 2, "アラクネウェブ": 1, "ゴールドインゴット": 1, "ダイヤモンド": 1, "心力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターアタッカーリング", job: [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], description: "STR指", allGreen: 2, require1: { "シンチレーターインゴット": 2, "ゴールドインゴット": 2, "剛力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ゴールドインゴット": 2, "剛力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターレンジャーリング", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], description: "DEX指", allGreen: 2, require1: { "シンチレーターインゴット": 2, "ゴールドインゴット": 2, "眼力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ゴールドインゴット": 2, "眼力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターディフェンダーリング", job: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "VIT指", allGreen: 2, require1: { "シンチレーターインゴット": 2, "ゴールドインゴット": 2, "活力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ゴールドインゴット": 2, "活力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターキャスターリング", job: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], description: "INT指", allGreen: 2, require1: { "シンチレーターインゴット": 2, "ゴールドインゴット": 2, "知力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ゴールドインゴット": 2, "知力の錬金溶剤G3": 1 } },
	{ name: "シンチレーターヒーラーリング", job: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], description: "MND指", allGreen: 2, require1: { "シンチレーターインゴット": 2, "ゴールドインゴット": 2, "心力の錬金溶剤G3": 1 }, require2: { "輝金鉱": 6, "シンチレーターナゲット": 4, "プラチナインゴット": 2, "ゴールドインゴット": 2, "心力の錬金溶剤G3": 1 } },
]

var require1 = {
	"ヘヴィアロイインゴット": 0,
	"シンチレーターインゴット": 0,
	"スタービロード": 0,
	"ヘミキオンレザー": 0,
	"チーク材": 0,
	"鍛人のデミマテリダ": 0,
	"デミクリスタル": 0,
	"剛力の錬金溶剤G3": 0,
	"眼力の錬金溶剤G3": 0,
	"活力の錬金溶剤G3": 0,
	"心力の錬金溶剤G3": 0,
	"知力の錬金溶剤G3": 0,
	"グリフィンストラップ": 0,
	"刺繍糸": 0,
	"神代木": 0,
	"ソーリアンレザー": 0,
	"カシミヤ織物": 0,
	"ゴールドインゴット": 0,
	"ウォルフラムプレートレット": 0,
	"プラチナエンチャントインク": 0,
	"ルビー": 0,
	"サファイア": 0,
	"ダイヤモンド": 0,
	"カーネリアン": 0,
	"アイオライト": 0,
	"黒色火薬": 0
}

var require2 = {
	"鍛人のデミマテリダ": 0,
	"デミクリスタル": 0,
	"チタンカーバイド": 0,
	"シンチレーターナゲット": 0,
	"極細絹糸": 0,
	"ヘミキオンの粗皮": 0,
	"ゴブリンラッカー": 0,

	"輝金鉱": 0,
	"重石華": 0,
	"星綿": 0,
	"チーク原木": 0,
	"ワットル樹皮": 0,
	"レザーワックス": 0,

	"活力の錬金溶剤G3": 0,
	"心力の錬金溶剤G3": 0,
	"剛力の錬金溶剤G3": 0,
	"眼力の錬金溶剤G3": 0,
	"知力の錬金溶剤G3": 0,

	"樟脳": 0,
	"刺繍糸": 0,
	"グリフィンストラップ": 0,
	"ウォルフラムインゴット": 0,
	"ゴールドインゴット": 0,
	"プラチナインゴット": 0,
	"ウォルフラムプレートレット": 0,



	"アラクネウェブ": 0,
	"神保石": 0,

	"神代木": 0,
	"ソーリアンレザー": 0,
	"カシミヤ織物": 0,
	"プラチナエンチャントインク": 0,

	"ルビー": 0,
	"サファイア": 0,
	"ダイヤモンド": 0,
	"カーネリアン": 0,
	"アイオライト": 0,
	"黒色火薬": 0,
}