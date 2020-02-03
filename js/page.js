﻿function burycard() {
	//高さ揃える用
	var hList=new Array();
	//各ボックスの高さを取得して配列に保存しておく
	$("div.thumbnail").each(function(idx){
		//高さを追加					   
		hList[idx]=$(this).height();		 
	});
	var maxH=Math.max.apply(null,hList);
	$("div.thumbnail").css({"height":maxH+"px"});
	
	//カード左揃え用
	var $grid = $('.thumbnail'),
    emptyCells = [],
    i;
	for (i = 0; i < $grid.find('.thumbnail').length; i++) {
    emptyCells.push($('<div>', { class: 'thumbnail is-empty' }));
	}
	$grid.append(emptyCells);
}
