//navbar動畫
$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
    $(".explore,.navbar").addClass("at_top");
  else
    $(".explore,.navbar").removeClass("at_top");
})
// 超連結動畫
$(document).on('click','a',function(event){
  event.preventDefault();
  /* 即取消事件的預設行為，會導致基本的外站超連結無法使用。如果要開啟外站連結，需要限制超連結錨點範圍。 */
  var target= $(this).attr("href");
  // console.log(target);
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
  // return false;/* 終止處理。如果不添加，下次按點超連結錨點的時候可能會累積跳轉位置。 */
})
  // 偵測進入花園鰻範圍----------------------
// function detect_ge(ge_id,x){
//   var geplace=$(ge_id).offset().left+$(ge_id).width()/2;
//   if(Math.abs(x-geplace)<80)
//     $(ge_id).css("bottom","-100px")
//   else
//     $(ge_id).css("bottom","0px")
// }
function detect_ge(ge_id,x){
  var geplace = $("#ge_G").offset().left + $("#ge_G").width()/2 
  if (Math.abs(x - geplace) < 80){
    $("#ge_G").css("bottom","-230px");
  }else{
    $("#ge_G").css("bottom","-57px");
  }
  
  var geplace = $("#ge_Y").offset().left + $("#ge_Y").width()/2 
  if (Math.abs(x - geplace) < 80){
    $("#ge_Y").css("bottom","-200px");
  }else{
    $("#ge_Y").css("bottom","58px");
  }
  
  var geplace = $("#ge_B").offset().left + $("#ge_B").width()/2 
  if (Math.abs(x - geplace) < 80){
    $("#ge_B").css("bottom","-190px");
  }else{
    $("#ge_B").css("bottom","16px");
  }
}
  // 看滑鼠移動X----------------------

$(window).mousemove(function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  
  var x=pagex-$("#section_about").offset().left;
  var y=pagey-$("#section_about").offset().top;
  
  // console.log(pagex + "," + pagey);
  
  if(y<0 || y>$("#section_about").outerHeight())
    $("#cross").css("opacity",0);
  else
    $("#cross").css("opacity",1);
  
  $("#cross").css("left",x+"px");
  $("#cross").css("top",y+"px");
  
  // 看滑鼠的花園鰻----------------------
  var geplace=$("#ge").offset().left+$("#ge").width()/2;
  var getop=$("#ge").offset().top;
  
  var img_url="https://od.lk/s/NDRfMzQ5NTEz";
  
  if (pagex<geplace-50)
    $("#ge").attr("src",img_url+"NzVf/ge_left.png")
  else if (pagex>geplace+50)
    $("#ge").attr("src",img_url+"Nzdf/ge_right.png")
  else
    $("#ge").attr("src",img_url+"ODFf/ge_top.png")
  if (pagex<geplace-50 && pagey<getop)
    $("#ge").attr("src",img_url+"NzZf/ge_leftop.png")
  if (pagex>geplace+50 && pagey<getop)
    $("#ge").attr("src",img_url+"ODBf/ge_righttop.png")
  //站起來的花園鰻-移動---------------------
    detect_ge("#ge_G",pagex);
    detect_ge("#ge_Y",pagex);
    detect_ge("#ge_B",pagex);
  
  
  //關於和邊界圖片動畫----------------------
  $(".mountain").css("transform","translateX("+(pagex/-20+50)+"px)");
  
  $(".r1text").css("transform","translateX("+(pagey/-5)+"px)");
  $(".r2text").css("transform","translateX("+(pagey/-10)+"px)");
  $(".r3text").css("transform","translateX("+(pagey/-12)+"px)");
  
  $(".tri1").css("transform","translateX("+(x/-5)+"px)");
  $(".tri2").css("transform","translateX("+(x/-10)+"px)");
  $(".tri3").css("transform","translateX("+(x/-12)+"px)");
  $(".tri4").css("transform","translateX("+(x/-14)+"px)");
  $(".tri5").css("transform","translateX("+(x/-16)+"px)");
  
});


  //作品資料導入----------------------
var vm = new Vue({
  el: "#app",
  data: {
    works: []
  },
  mounted: function(){
    var vobj =this;
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
      success: function(res){
        vobj.works=JSON.parse(res);
      }
    })
  }
})