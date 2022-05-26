// -- pure javascript area --
console.log("load");

// audio control
var audio = document.getElementById("audio");
var playButton = document.getElementById("play");
var playingState = document.getElementById("playingState");
// var icoState = document.getElementsById("icoState");
// console.log(audio.currentTime);
// function audioControl(e) {
//   var id = e.target.id;
//   console.log("click");
//   i = "pause!";
//   // if(!audio.paused){
    
//   // }
//   if(id == "play"){
//     audio.pause(); // 일시 중지
//     playingState.appendChild(i);
//     icoState.innerHTML = "dfdaf"
//     playButton.innerHTML = ""

//   }

// }





// -- jQuery area --
$(function() {
  var $depth1Li = $(".depth1 > li");
  var $depth2 = $(".depth2");
  $(".depth1 > li").next().stop().on('mouseenter', function(){
    console.log($(this));
    $(this).children().slideDown();
  })
})

