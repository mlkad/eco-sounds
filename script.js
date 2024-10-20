const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const audio = document.querySelector("audio");

function playPause() {
  if (play.classList.contains("hidden")) {
    audio.pause();
  } else {
    audio.play();
  }
  play.classList.toggle("hidden");
  pause.classList.toggle("hidden");
}
pause.addEventListener("click", playPause);
play.addEventListener("click", playPause);
