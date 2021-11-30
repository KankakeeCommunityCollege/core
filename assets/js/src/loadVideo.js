/**
 * 
 * Custom JS written by Wesley Zajicek for:
 * © 2021 Kankakee Community College
 * 
 * @author Wesley Zajicek <https://github.com/wdzajicek>
 * @copyright © 2021 Kankakee Community College
 * 
 * @const {string} VIDEO_PLACEHOLDER_ID - ID of a placeholder <div> element with data-attributes that correspond to the video files/info
 * @const {string} VIDEO_CONTAINER_ID - ID for the parent element of the above VIDEO_PLACEHOLDER_ID <div>.
 * if loadVideo() was imported after DOMContentLoaded (from clicking play button) it will be `true`
 * 
 */
// =========================================================================================

const VIDEO_CONTAINER_ID = 'videoContainer';
const VIDEO_PLACEHOLDER_ID = 'video';

function createVideoElement(attributesObject) {
  const video = document.createElement('video');

  Object.keys(attributesObject).map(key => {
    video.setAttribute(key, attributesObject[key]);
  })
  return video;
}

function createSourceElements(video, srcArr, srcTypesArr) {
  srcArr.forEach((src, i) => {
    const source = document.createElement('source');

    source.src = src;
    source.setAttribute('type', srcTypesArr[i]);
    video.appendChild(source);
  });
  return video;
}

function handleSlowNetwork(message, time) {
  window.setTimeout(() => {
    import('./createPlayButtonForVideo').then(({default: createPlayButtonForVideo}) => createPlayButtonForVideo())
  }, 1e3);
  return console.error(message, time);
}

function loadVideo() {
  const videoContainer = document.getElementById(VIDEO_CONTAINER_ID);
  // `data-*=""` attributes built into the HTML contain the settings for the video sources, types, and poster
  const data = videoContainer.querySelector(`#${VIDEO_PLACEHOLDER_ID}`).dataset; // This element is a placeholder div for the video w/ it's data-attributes representing video settings
  let [ srcArr, srcTypesArr, poster ] = [ data.videos.split(','), data.videoTypes.split(','), data.poster ]; /** @var {array} srcArr - array of video-sources separated by a comma + space -- each source corresponds to a video file @var {array} srcTypesArr - array of video-types separated by a comma + space -- each type matches a source in srcArr @var {string} poster - The location of the poster image for the video */
  const videoAttributes = { // Settings for our video player
    'autoplay': '',
    'muted': '',
    'loop': '',
    'playsinline': '',  // <https://developer.apple.com/documentation/webkit/safari_tools_and_features/delivering_video_content_for_safari>
    'poster': poster,
    'id': 'videoElement',
    'class': 'width__full'
  };
  const video = createVideoElement(videoAttributes);

  Promise.resolve()
    .then(() => createSourceElements(video, srcArr, srcTypesArr))
    .then(() => {
      if (arguments[0] != undefined) { // If an argument comes through this loadVideo module, it is a time-mark for performance
        const t0 = arguments[0];
        const t1 = performance.now();
        // Tested by simulating slow connections speeds:
        // Over a fast-ish 3G network, t1 - t0 comes to an average around 600ms
        // Over a slow 3G connection it can be anywhere from 1000ms to 2000ms+
        if (t1 - t0 > 1000) { // If 750ms is too aggressive (i.e. if too many users encounter the `handleSlowNetwork()` func, then try 1000ms or higher)
          handleSlowNetwork('Slow network speeds:', t1 - t0);
        } else {
          t1 - t0 > 675 ? console.info(`Performance: ${t1 - t0}ms`) : null; // Log performance if speed is flakey
          videoContainer.innerHTML = '';
          // We need to "flatten" the video element to inject it as HTML for autoplay to work.
          videoContainer.innerHTML = video.outerHTML; // Autoplay does not work if the video element were injected directly via `appendChild(video)`
        }
      } else {
        videoContainer.innerHTML = '';
        videoContainer.appendChild(video); 
      }
    })
    .then(() => {
      import('./createVideoControls').then(({default: createVideoControls}) => createVideoControls())
    })
}

export default loadVideo;
