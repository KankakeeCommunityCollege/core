import buildNewsFeed from './buildNewsFeed.js';
//import loadVideo from './loadVideo.js';
import toggleSearch from './toggleSearch.js';
//import './babelTest.js';
const MOBILE_USERAGENT_REGEXP = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
const VIDEO_ELEMENT_ID = 'video';

if ( window.location.pathname == '/' && navigator.userAgent.search(MOBILE_USERAGENT_REGEXP) === -1 && document.getElementById(VIDEO_ELEMENT_ID) && window.localStorage.getItem('playVideoOnHomePageSetting') != 'false') {
  import(/* webpackChunkName: 'loadVideo' */ './loadVideo').then(({ default: loadVideo }) => {
    loadVideo();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  buildNewsFeed();
  toggleSearch();
  if (window.location.pathname === '/settings/') {
    import(/* webpackChunkName: 'userSettings' */ './userSettings').then(({ default: userSettings }) => {
      userSettings();
    });
  }
});
