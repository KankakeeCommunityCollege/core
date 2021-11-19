const VIDEO_CONTROLS_PARENT_ID = 'videoControls';
const BUTTON_ID = 'playPause';
const VIDEO_CONTAINER_ID = 'videoContainer'
const VIDEO_CONTROLS_HIDDEN_CLASS = 'video__controls--hidden'
const button = document.getElementById(BUTTON_ID);
const PLAY_SVG = `<svg id="play" class="img-fluid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
  <path d="M45.27,27.16L11.41,7.61c-0.65-0.37-1.45,0.09-1.45,0.84v39.1c0,0.75,0.81,1.21,1.45,0.84 
  l33.86-19.55C45.92,28.47,45.92,27.53,45.27,27.16z"/>
</svg>`;

function createLoader() {
  const container = document.getElementById(VIDEO_CONTAINER_ID);
  const loader = document.createElement('div');
  const img = document.createElement('img');
  
  img.classList.add('loader', 'loader--animate');
  img.src = '/assets/img/loader.min.svg'
  img.alt = 'Loading...'
  loader.classList.add('text-center', 'video__loader');
  loader.appendChild(img);
  container.insertAdjacentElement('afterbegin', loader);
}

function playVideoClickHandler(e) {
  // This button element is used later, in a different module, with another 'click' eventListener...
  // So we must destroy the old eventListener so that a new one can be assigned later.
  button.removeEventListener('click', playVideoClickHandler);
  createLoader();
  window.setTimeout(() => {
    import('./loadVideoForMobile').then(({default: loadVideoForMobile}) => loadVideoForMobile())
  }, 1e3);
}

function showVideoPlayButton(buttonParent, button, cb) {
  button.innerHTML = '<span class="sr-only">Play video...</span>' + PLAY_SVG;
  buttonParent.classList.remove(VIDEO_CONTROLS_HIDDEN_CLASS);
  buttonParent.setAttribute('aria-hidden', 'false');
  return cb();
}

function createPlayButtonForVideo() {
  const div = document.getElementById(VIDEO_CONTROLS_PARENT_ID);

  showVideoPlayButton(div, button, ()=> {
    button.addEventListener('click', playVideoClickHandler);
  });
}

export default createPlayButtonForVideo;