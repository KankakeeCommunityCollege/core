/**
 * 
 * Custom JS written by Wesley Zajicek for:
 * © 2026 Kankakee Community College
 * 
 * @author Wesley Zajicek <https://github.com/wdzajicek>
 * @copyright © 2021 Kankakee Community College
 * 
 */
// =========================================================================================

function createVideoElement(poster) {
  const video = document.createElement('video');

  video.id = 'videoElement';
  video.className = 'width__full';
  video.poster = poster;
  video.muted = true;      // Property must be true for autoplay to work
  video.autoplay = true;   // Property must be true for autoplay to work
  video.loop = true;
  video.playsInline = true; // Required for autoplay in iOS/Mobile Safari, see: <https://developer.apple.com/documentation/webkit/safari_tools_and_features/delivering_video_content_for_safari>
  video.setAttribute('aria-hidden', 'true');
  return video;
}

function createSourceElements(video, srcArr, srcTypesArr) {
  srcArr.forEach((src, i) => {
    const source = document.createElement('source');

    source.src = src;
    source.setAttribute('type', srcTypesArr[i]);
    video.append(source);
  });
  return video;
}

function handleSlowNetwork(message, time) {
  window.setTimeout(() => {
    import('./createPlayButtonForVideo').then(({default: createPlayButtonForVideo}) => createPlayButtonForVideo())
  }, 500);
  return console.error(message, time);
}

function loadVideo() {
  const videoContainer = document.getElementById('videoContainer');
  // `data-*=""` attributes built into the HTML contain the settings for the video sources, types, and poster
  const data = videoContainer.querySelector('#video').dataset; // This element is a placeholder div for the video w/ it's data-attributes representing video settings
  /**
   * @var {array} srcArr - array of video-sources separated by a comma + space -- each source corresponds to a video file
   * @var {array} srcTypesArr - array of video-types separated by a comma + space -- each type matches a source in srcArr
   * @var {string} poster - The location of the poster image for the video
   * */
  let [
    srcArr,
    srcTypesArr,
    poster
  ] = [
    data.videos.split(','),
    data.videoTypes.split(','),
    data.poster
  ];
  const video = createVideoElement(poster);

  Promise.resolve()
    .then(() => createSourceElements(video, srcArr, srcTypesArr))
    .then(() => {
      if (arguments[0] != undefined) { // If an argument comes through this loadVideo module, it is a time-mark for performance
        // If the argument exists the video is being loaded on a large/XL screen otherwise it's mobile
        const t0 = arguments[0];
        const t1 = performance.now();
        // Tested by simulating slow connections speeds:
        // Over a fast-ish 3G network, t1 - t0 comes to an average around 600ms
        // Over a slow 3G connection it can be anywhere from 1000ms to 2000ms+
        if (t1 - t0 > 1000) { // If 750ms is too aggressive (i.e. if too many users encounter the `handleSlowNetwork()` func, then try 1000ms or higher)
          handleSlowNetwork('Slow network speeds:', t1 - t0);
        } else {
          if (t1 - t0 > 675) console.info(`Performance: ${t1 - t0}ms`); // Log performance if speed is flakey
          // preload="auto" attribute is set for desktop viewers ONLY and NOT MOBILE!
          video.setAttribute('preload', 'auto');
          videoContainer.innerHTML = '';
          // We need to "flatten" the video element to inject it as HTML for autoplay to work.
          videoContainer.append(video);
        }
      } else { // Mobile, tablet, and small devices will have `( arguments[0] == undefined )` is true and...
        // ...execute this code:
        videoContainer.innerHTML = '';
        videoContainer.append(video);
      }
    })
    .then(() => {
      import('./createVideoControls').then(({default: createVideoControls}) => createVideoControls())
    })
}

export default loadVideo;
