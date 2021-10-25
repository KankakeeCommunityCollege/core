import '../../scss/main.scss';
/**
 *
 *  Custom JS written by Wesley Zajicek - https://github.com/wdzajicek
 *  for Kankakee Community College
 *
 */

const VIDEO_ELEMENT_ID = 'video'; // ID is built into the HTML
let mobileMediaQueryList = window.matchMedia('(max-width: 768px)'); // 768px is the Bootstrap tablet breakpoint

function loadModule(...moduleArgs) {
  const module = moduleArgs[0];
  let defaultFn;
  
  moduleArgs.length > 1 ? defaultFn = moduleArgs[1] : defaultFn = moduleArgs[0];
  return import(`./${module}`).then(({ default: defaultFn }) => defaultFn());
}

if (
    window.location.pathname == '/' &&
    !mobileMediaQueryList.matches &&
    document.getElementById(VIDEO_ELEMENT_ID) &&
    window.localStorage.getItem('playVideoOnHomePageSetting') != 'false'
  ) {
  loadModule('loadVideo');
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/settings/') {
    loadModule('settings');
  }
});

window.addEventListener('load', function () {
  window.location.pathname == '/' ? loadModule('getNewsFeed') : null;
  if (window.location.pathname == '/' && mobileMediaQueryList.matches) {
    loadModule('toggleSettingVisibilityOnScrollBottom');
  }
});