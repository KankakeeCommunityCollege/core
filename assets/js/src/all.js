import buildNewsFeed from './buildNewsFeed.js';
import toggleSearch from './toggleSearch.js';

const VIDEO_ELEMENT_ID = 'video'; // ID is built into the HTML
let mobileMediaQueryList = window.matchMedia('(max-width: 768px)'); // 768px is the Bootstrap tablet breakpoint

if (
    window.location.pathname == '/' &&
    !mobileMediaQueryList.matches &&
    document.getElementById(VIDEO_ELEMENT_ID) &&
    window.localStorage.getItem('playVideoOnHomePageSetting') != 'false'
  ) {
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

if ( window.location.pathname == '/' && mobileMediaQueryList.matches ) {
  window.addEventListener('load', function () { // This not-so-important JS should happen after window.onload
    import( /* webpackChunkName: 'toggleSettingVisibilityOnScrollBottom' */ './toggleSettingVisibilityOnScrollBottom').then(({
      default: toggleSettingVisibilityOnScrollBottom
    }) => {
      toggleSettingVisibilityOnScrollBottom();
    });
  });
}