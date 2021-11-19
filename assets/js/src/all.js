import '../../scss/main.scss';
/**
 *
 *  Custom JS written by Wesley Zajicek - https://github.com/wdzajicek
 *  for Kankakee Community College
 *
 */
const VIDEO_ELEMENT_ID = 'video'; // ID is built into the HTML
const path = window.location.pathname;
let mobileMediaQueryList = window.matchMedia('(max-width: 768px)'); // 768px is the Bootstrap tablet breakpoint

function loadModule(...moduleArgs) {
  const module = moduleArgs[0];
  let defaultFn;
  
  moduleArgs.length > 1 ? defaultFn = moduleArgs[1] : defaultFn = moduleArgs[0];
  return import(`./${module}`).then(({ default: defaultFn }) => defaultFn());
}

if (
    path == '/' &&
    !mobileMediaQueryList.matches &&
    document.getElementById(VIDEO_ELEMENT_ID) &&
    window.localStorage.getItem('playVideoOnHomePageSetting') != 'false'
  ) {
  loadModule('loadVideo');
} else if (
    path == '/' &&
    mobileMediaQueryList.matches
) {
  loadModule('createPlayButtonForVideo');
}

document.addEventListener('DOMContentLoaded', () => {
  if (path === '/settings/') {
    loadModule('userSettings');
  }
});

window.addEventListener('load', function () {
  path == '/' ? loadModule('getNewsFeed') : null;
  if (path == '/' && mobileMediaQueryList.matches) {
    loadModule('toggleSettingVisibilityOnScrollBottom');
  }
});