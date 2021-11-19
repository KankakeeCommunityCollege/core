const VIDEO_PLACEHOLDER_ID = 'video';
const VIDEO_CONTAINER_ID = 'videoContainer';
const MOBILE_USERAGENT_REGEXP = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;

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
  return video;
}

function createSourceElements(video, videoSourcesArray, videoSourceTypesArray) {
  videoSourcesArray.forEach((videoSource, i) => {
    appendSourceToVideo(video, videoSourcesArray[i], videoSourceTypesArray[i]);
  })
  return video;
}

function loadVideoForMobile() {
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
  
  createSourceElements(video, videoSourcesArray, videoSourceTypesArray);
  videoContainer.innerHTML = '';
  videoContainer.innerHTML = video.outerHTML;
  import('./createVideoControls').then(({default: createVideoControls}) => {
    createVideoControls();
  })
}

export default loadVideoForMobile;
