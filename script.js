const video = document.getElementById('video');
const playbtn = document.getElementById('play');
const stopbtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//toggle video
const toggleVideo = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
// stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

//update play and pause icons
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//updat progress
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  //get seconds
  let sec = Math.floor(video.currentTime % 60);
  if (sec < 10) {
    sec = '0' + String(sec);
  }
  timestamp.innerHTML = `${mins}:${sec}`;
}

//set time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', toggleVideo);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playbtn.addEventListener('click', toggleVideo);
stopbtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
