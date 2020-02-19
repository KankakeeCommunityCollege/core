//import test from './test.js';
import createVideoControls from './createVideoControls.js';
import buildNewsFeed from './buildNewsFeed.js';
//import './babelTest.js';

document.addEventListener('DOMContentLoaded', function() {
  //test();
  buildNewsFeed();
  createVideoControls();
});
