//import test from './test.js';
//import createVideoControls from './createVideoControls.js';
import buildNewsFeed from './buildNewsFeed.js';
import loadVideo from './loadVideo.js';
import buildSliders from './sliders.js';
//import './babelTest.js';

loadVideo();  // Do NOT call inside a DOMContentLoaded function!

document.addEventListener('DOMContentLoaded', function() {
  //test();
  buildNewsFeed();
  buildSliders();
  //createVideoControls();
});
