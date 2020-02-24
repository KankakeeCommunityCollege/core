const VIDEO_ELEMENT_ID_STRING = 'videoElement';
const VIDEO_CONTROLS_ID_STRING = 'videoControls';
const PLAY_PAUSE_BUTTON_ID_STRING = 'playPause';
const SR_ONLY_PLAY = '<span class="sr-only">Play</span>';
const SR_ONLY_PAUSE = '<span class="sr-only">Pause</span>';
const PLAY = '<svg version="1.1" id="play" class="img-fluid" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56 56" style="enable-background:new 0 0 56 56;" xml:space="preserve"><path d="M45.27,27.16L11.41,7.61c-0.65-0.37-1.45,0.09-1.45,0.84v39.1c0,0.75,0.81,1.21,1.45,0.84 l33.86-19.55C45.92,28.47,45.92,27.53,45.27,27.16z"/></svg>';
const PAUSE = '<svg version="1.1" id="pause" class="img-fluid" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56 56" style="enable-background:new 0 0 56 56;" xml:space="preserve"><path d="M45.07,49.28H34.93c-0.54,0-0.97-0.43-0.97-0.97V7.69c0-0.54,0.43-0.97,0.97-0.97h10.15 c0.54,0,0.97,0.43,0.97,0.97v40.62C46.04,48.84,45.61,49.28,45.07,49.28z"/><path d="M21.07,49.28H10.93c-0.54,0-0.97-0.43-0.97-0.97V7.69c0-0.54,0.43-0.97,0.97-0.97h10.15 c0.54,0,0.97,0.43,0.97,0.97v40.62C22.04,48.84,21.61,49.28,21.07,49.28z"/></svg>';

function changeButtonContents(button, contents) {
  button.innerHTML = contents;
  return button;
}

function checkVideoPlayState(button, video) {
  const videoIsPaused = video.paused == true;

  if ( videoIsPaused ) {
    video.play();
    changeButtonContents(button, SR_ONLY_PAUSE + PAUSE);
  } else {
    video.pause();
    changeButtonContents(button, SR_ONLY_PLAY + PLAY);
  }
}

function createInitialPauseButton(videoEl, buttonEl) {
  const videoIsPaused = videoEl.paused == true;

  videoIsPaused ? changeButtonContents(buttonEl, SR_ONLY_PAUSE + PAUSE)
  : changeButtonContents(buttonEl, SR_ONLY_PLAY + PLAY);
}

function playPauseClickHandler(e) {
  const button = playPauseClickHandler.button_element;
  const video = playPauseClickHandler.video_element;

  checkVideoPlayState(button, video);
}

function addEventListenerToElement(el, event, handler) {
  el.addEventListener(event, handler);
}

function makeVideoControlsVisible(videoControls) {
  videoControls.classList.remove('video__controls--hidden');
  videoControls.classList.add('video__controls');
  videoControls.setAttribute('aria-hidden', 'false');
}

function createVideoControls() {
  if ( ! document.getElementById(VIDEO_ELEMENT_ID_STRING) )
    return;

  const video = document.getElementById(VIDEO_ELEMENT_ID_STRING);
  const button = document.getElementById(PLAY_PAUSE_BUTTON_ID_STRING);
  const videoControls = document.getElementById(VIDEO_CONTROLS_ID_STRING);

  playPauseClickHandler.button_element = button;
  playPauseClickHandler.video_element = video;
  createInitialPauseButton(video, button);
  addEventListenerToElement(button, 'click', playPauseClickHandler);
  makeVideoControlsVisible(videoControls);
}

export default createVideoControls;
