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
  $(".post").on('mouseenter', function(){
    $(".depth2").children().stop().slideDown();
  });
  $(".depth2", ".post").on('mouseleave', function(){
    $(this).children().stop().slideUp();
  })
})

