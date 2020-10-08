import createVideoControls from './createVideoControls.js';

const VIDEO_PLACEHOLDER_ID = 'video';
const VIDEO_CONTAINER_ID = 'videoContainer';

function setElementAttributes(el, attributeArgument) {
  for (var attribute in attributeArgument) {
    if (attributeArgument.hasOwnProperty(attribute)) {
      el.setAttribute(attribute, attributeArgument[attribute]);
    }
  }
}

function createVideoElement(attributesObject) {
  const video = document.createElement('video');

  setElementAttributes(video, attributesObject);
  return video;
}

function appendSourceToVideo(video, videoSource, videoSourceType) {
  const source = document.createElement('source');

  setElementAttributes(source, {'src': videoSource, 'type': videoSourceType});
  video.appendChild(source);
  return source;
}

function createSourceElements(video, videoSourcesArray, videoSourceTypesArray) {
  for (var i = 0, len = videoSourcesArray.length; i < len; i++) {
    const source = document.createElement('source');

    appendSourceToVideo(video, videoSourcesArray[i], videoSourceTypesArray[i]);
  }
  return video;
}

function loadVideo() {
  // Bail-out if the element needed is missing
  if ( ! document.getElementById(VIDEO_PLACEHOLDER_ID) )
    return;

  const t0 = performance.now();
  const videoPlaceholder = document.getElementById(VIDEO_PLACEHOLDER_ID);
  const videoContainer = document.getElementById(VIDEO_CONTAINER_ID);
  // Below are `data-*=""` attributes built into the HTML
  const videoSourcesArray = videoPlaceholder.dataset.videos.split(',');
  const videoSourceTypesArray = videoPlaceholder.dataset.videoTypes.split(',');
  const videoPoster = videoPlaceholder.dataset.poster;

  const videoAttributes = {
    'autoplay': '',
    'muted': '',
    'loop': '',
    'playsinline': '',  // <https://developer.apple.com/documentation/webkit/safari_tools_and_features/delivering_video_content_for_safari>
    'poster': videoPoster,
    'id': 'videoElement',
    'class': 'width__full'
  };

  const video = createVideoElement(videoAttributes);

  window.addEventListener('load', function(){
  const t1 = performance.now();
  if ( t1 - t0 > 6000 ) {
    return console.error('Slow network speeds. Aborting video load');
  } else {
    const source = createSourceElements(video, videoSourcesArray, videoSourceTypesArray);
    
    videoContainer.innerHTML = '';
    videoContainer.innerHTML = video.outerHTML;
    createVideoControls();
  }
  });
}

export default loadVideo;
//  USAGE:
//
//  //Fire immediately. Do NOT fire inside `DOMContentLoaded` watcher
//
//  loadVideo();
//
//  document.addEventListener('DOMContentLoaded', function() {
//    // Normal JS that fires after the DOM has loaded...
//  });
