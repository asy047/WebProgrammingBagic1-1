// -- pure javascript area --
console.log("load");

guestBookUp = null;
guestDel = null;

// ========== audio control ==========
// 변수 선언
document.getElementById("player").volume = 0.4;
var audio = document.getElementById("player");
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

// ========== canvas ==========
var canvas, context;

function init() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");

	context.lineWidth = 2; // 선 굵기를 2로 설정
	context.strokeStyle = "black";

	// 마우스 리스너 등록. e는 MouseEvent 객체
	canvas.addEventListener("mousemove", function (e) { move(e) }, false);
	canvas.addEventListener("mousedown", function (e) { down(e) }, false);
	canvas.addEventListener("mouseup", function (e) { up(e) }, false);
	canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}

var startX=0, startY=0; // 마우스의 마지막 포인터 좌표
var drawing=false;
function draw(curX, curY) { 
	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(curX, curY);
	context.stroke();
}
function down(e) { 
	startX = e.offsetX; startY = e.offsetY;
	drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
	if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
	var curX = e.offsetX, curY = e.offsetY;
	draw(curX, curY);	
	startX = curX; startY = curY;
}
function out(e) { drawing = false; }

const currentColor = document.getElementsByClassName("current-color");
function btnEvent(e) {
  id = e.target.id;

  if(id == "btn-black") { context.strokeStyle = "black"; currentColor[0].style.color = "black"; }
  if(id == "btn-red") { context.strokeStyle = "red"; currentColor[0].style.color = "red"; }
  if(id == "btn-green") { context.strokeStyle = "green"; currentColor[0].style.color = "green"; }
  if(id == "btn-blue") { context.strokeStyle = "blue"; currentColor[0].style.color = "blue"; }
  if(id == "btn-clear") { context.clearRect(0, 0, canvas.width, canvas.height);  }
}

// ========== guest book ==========
function guestBook() {
  guestBookUp();
}
function guestDelJs() {
  guestDel();
}

// ========== keyring ==========
function reset_animation() {
  var el = document.getElementById('keyring');
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
}



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
  $(".main-nav li").on('click', function() {
    var link = $(this).attr('data-tab');
    $(link).siblings().hide();
    $(link).fadeIn();
    if(link == "#diary") {
      $(link).fadeIn().css({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      });
    }
  })

  //  cont
  $(".cont").click(function() {
    $(this).toggleClass("on");
  })

  // modal
  $(".diarybtn").click(function() {
    var $thisData = $(this).attr("data-tab");
    $($thisData).css('display', 'flex');
  })
  $(".modal").click(function() {
    $(this).hide();
  })

  $(".diary-ico .fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fa").css("color", "hotpink");
  });

  // canvas
  $(".btn-area button:nth-of-type(1)").css("box-shadow", "5px 5px 10px #555");
  $(".btn-area button").not("button:nth-of-type(5)").click(function() {
    $(this).not().siblings().css("box-shadow", "none");
    $(this).css("box-shadow", "5px 5px 10px #555");
  })

  function guestBookUp() {
    var guestName = document.getElementById("guest-name").value;
    var guestPwd = document.getElementById("guest-password").value;
    var guestDescVal = document.getElementById("guest-desc").value;
    var guestDate = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
    var geustTime = new Date().toTimeString().split(" ")[0];
  
    $("#guest").append("<div class='guest-conts'> <hr> <span>❣</span> <h3>" + guestName + "</h3> <p class='date'>" + guestDate + " " + geustTime +"</p> <p class='g-pwd'>" + guestPwd + "</p> <p class='guest-desc'>" + guestDescVal +"</p> <button onclick='guestDelJs(event)'>삭제</button> </div>");

    // console.log(guestName, guestPwd, guestDescVal); 
  }
  function guestDel(e) {
    var delTarget = $(e.target);
    var gPwdChk = prompt("비밀번호를 입력해주세요");
    // console.log($(delTarget).siblings(".g-pwd").text(), gPwdChk);

    if(gPwdChk == $(delTarget).siblings(".g-pwd").text()) {
      $(delTarget).parents(".guest-conts").remove();
    } else {
      alert("비밀번호가 틀립니다.");
    }

  }
  guestBook = guestBookUp;
  guestDelJs = guestDel;

  // keyring


});