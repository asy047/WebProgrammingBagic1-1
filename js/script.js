// -- pure javascript area --
console.log("load");

// ========== audio control ==========
// 변수 선언
document.getElementById("audio").volume = 0.4;
var audio = document.getElementById("audio");
var playButton = document.getElementById("play");
var playingState = document.getElementById("playingState");
var audioArea = document.getElementsByClassName("audio-area");
console.log(audioArea);
// audio state
var audioPaused = audio.paused;
audio.onplaying = function() {
  audioPaused = true;
};
audio.onpause = function() {
  audioPaused = false;
};
// nowPlaying text
function nowPlaying() {
  playingState.innerHTML = "Now Playing..."
  icoState.innerHTML = "🎵";
}

function audioControl(e) {
  var id = e.target.id;
  console.log("click");
  if(id == "play") {
    if(audioPaused == true){
      audio.pause()
      play.innerHTML = "🤍";
      playingState.innerHTML = "paused!!"
      icoState.innerHTML = "⏸";
    } else if(audioPaused == false) {
      audio.play()
      play.innerHTML = "🖤";
      nowPlaying();
    }
  }
  if(id == "muted") {
    audio.muted = !audio.muted;
    if(audio.muted == false) {
      nowPlaying();
    } else {
      playingState.innerHTML = "muted!!"
      icoState.innerHTML = "🔇";
    }
  }
  if(id == "volumeUp") {
    audio.volume += 0.1;
    playingState.innerHTML = "Volume " + (audio.volume * 100).toFixed() + "%";
    // setTimeout(() => {
    //   nowPlaying(); // 비동기지연 이슈
    // }, 3000);
  }
  if(id == "volumeDown") {
    audio.volume -= 0.1;
    playingState.innerHTML = "Volume " + (audio.volume * 100).toFixed() + "%";
    // setTimeout(() => {
    //   nowPlaying(); // 비동기지연 이슈
    // }, 3000);
  }
}
// ========== //audio control ==========

// ========== D-Day ==========
const dDay = document.getElementById("dDay");

function diffDay() {
    const masTime = new Date("2022-06-15");
    const todayTime = new Date();
    
    const diff = masTime - todayTime;
    
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    dDay.innerHTML = '기말고사까지, ' + `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}
diffDay();
setInterval(diffDay, 1000);





// -- jQuery area --
$(function() {
  $(".post").on('mouseenter', function(){
    $(".depth2").children().stop().slideDown();
  });
  $(".post").on('mouseleave', function(){
    $(".depth2").children().stop().slideUp();
  });

  // loading
  $(".loading").fadeOut(1500);

  //tab nav
  $(".main-nav a").on('click', function() {
    console.log($(this));
    $(this).id().not().hide();
    $(this).id().show();
  })
   


});