// $(window).mousemove
// 滑鼠移動的時候觸發一組事件
// 塞一組function >> 只要觸發就回call這組function
// function要吃一組引數(evt)
// 事件會自動觸發給我們一組叫evt的參數

$(window).mousemove(function(evt){
  // 滑鼠移動時在頁面的X座標
  var x = evt.pageX;
  // 滑鼠移動時在頁面的Y座標
  var y = evt.pageY;
  // 利用console確認有沒有成功
  console.log(x + "," + y);
  
  
  // 滑鼠移動時,.mouse會跟著(x-10,y-15)座標移動
  // + "px"  >>>  jquery中css需要加上單位
  $(".mouse").css("left",x - 10 + "px");
  $(".mouse").css("top",y - 15 + "px");
  
  
  var mid_cat = $(window).width()/2
  
  if(x > mid_cat + 80){
    $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_right.png");
  }else if(x < mid_cat - 80){
    $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_left.png");
  }else{
    $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_top.png");
  }
  
  // 左上右上 >>> 基於前兩條條件下加上高度條件
  // 後面設置的條件會優先(覆蓋)於前者
  // A條件與B條件 >>> A && B
  
  if(x > mid_cat + 80 && y < $(window).height()/2){
    $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_righttop.png");
  }
  if(x < mid_cat - 80 && y < $(window).height()/2){
    $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_lefttop.png");
  }
  
  
  // .offset().left/top >>> 偏離左/上位置
  // 以下變數意思 >>> 偏離的x(或y)座標+自身寬度一半 即為 貓貓中線處
  // Math.abs() >>> 絕對值
  // Math.abs(1-2) 等於1
  
  var mid_ylcat = $("#cat_yellow").offset().top+$("#cat_yellow").width()/2
  var mid_gycat = $("#cat_grey").offset().top+$("#cat_grey").width()/2
  var mid_blcat = $("#cat_blue").offset().left+$("#cat_blue").width()/2
  
  if(Math.abs(y-mid_ylcat)<70 && x < mid_cat - 100){
    $("#cat_yellow").css("left","0px")
  }else{$("#cat_yellow").css("left","-50px")}
  
  if(Math.abs(y-mid_gycat)<70 && x > mid_cat + 100){
    $("#cat_grey").css("right","0px")
  }else{$("#cat_grey").css("right","-50px")}
  
  if(Math.abs(x-mid_blcat)<70 && y < $(window).height()/2){
    $("#cat_blue").css("top","0px")
  }else{$("#cat_blue").css("top","-50px")}

});