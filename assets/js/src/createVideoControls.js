/**
 * 
 * Custom JS written by Wesley Zajicek for
 * © 2021 Kankakee Community College
 * 
 * @copyright © 2021 Kankakee Community College
 * @author Wesley Zajicek - <https://github.com/wdzajicek>
 * 
 * @constant {Element} VIDEO - The <video> HTMLElement that plays the homepage's video-header.
 * @constant {Element} BUTTON - The play/pause button HTMLElement responsible for controlling the video play-state.
 * @constant {Element} VIDEO_CONTROLS - The parent-element that holds the above BUTTON HTMLElement.
 * 
 */

const VIDEO = document.getElementById('videoElement');
const BUTTON = document.getElementById('playPause');
const VIDEO_CONTROLS = document.getElementById('videoControls');
const SR_ONLY_PLAY = '<span class="visually-hidden">Play</span>';
const SR_ONLY_PAUSE = '<span class="visually-hidden">Pause</span>';
const PLAY = '<svg id="play" class="img-fluid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M45.27,27.16L11.41,7.61c-0.65-0.37-1.45,0.09-1.45,0.84v39.1c0,0.75,0.81,1.21,1.45,0.84 l33.86-19.55C45.92,28.47,45.92,27.53,45.27,27.16z"/></svg>';
const PAUSE = '<svg id="pause" class="img-fluid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M45.07,49.28H34.93c-0.54,0-0.97-0.43-0.97-0.97V7.69c0-0.54,0.43-0.97,0.97-0.97h10.15 c0.54,0,0.97,0.43,0.97,0.97v40.62C46.04,48.84,45.61,49.28,45.07,49.28z"/><path d="M21.07,49.28H10.93c-0.54,0-0.97-0.43-0.97-0.97V7.69c0-0.54,0.43-0.97,0.97-0.97h10.15 c0.54,0,0.97,0.43,0.97,0.97v40.62C22.04,48.84,21.61,49.28,21.07,49.28z"/></svg>';

function setButtonState(button, video, isInitialBtnState) {
  const videoIsPaused = video.paused == true;

  videoIsPaused ? button.innerHTML = SR_ONLY_PAUSE + PAUSE
    : button.innerHTML = SR_ONLY_PLAY + PLAY;
  if (!isInitialBtnState) {
    videoIsPaused ? video.play() : video.pause();
  }
}

function makeVideoControlsVisible(videoControls) {
  videoControls.classList.remove('video__controls--hidden');
  videoControls.classList.add('video__controls');
  videoControls.setAttribute('aria-hidden', 'false');
}

function createVideoControls() {
  setButtonState(BUTTON, VIDEO, true);
  BUTTON.addEventListener('click', () => setButtonState(BUTTON, VIDEO, false));
  makeVideoControlsVisible(VIDEO_CONTROLS);
}

export default createVideoControls;
