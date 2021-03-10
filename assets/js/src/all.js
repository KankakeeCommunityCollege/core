import buildNewsFeed from './buildNewsFeed.js';
import loadVideo from './loadVideo.js';
import toggleSearch from './toggleSearch.js';
//import './babelTest.js';

loadVideo();  // Do NOT call inside a DOMContentLoaded function!

document.addEventListener('DOMContentLoaded', function() {
  buildNewsFeed();
  toggleSearch();
});
