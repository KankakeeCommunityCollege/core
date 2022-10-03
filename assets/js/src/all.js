/**
 *
 *  Custom JS written by Wesley Zajicek for
 * @copyright © 2021 Kankakee Community College
 * @author Wesley Zajicek - <https://github.com/wdzajicek>
 *
 *
 */
import '../../scss/main.scss';

function loadModule(...moduleArgs) {
  const simpleImport = typeof moduleArgs[0] == 'string';
  const module = simpleImport ? moduleArgs[0] : moduleArgs[0].module;
  const moduleTakesArg = !simpleImport && 'arg' in moduleArgs[0];
  let defaultFn;

  simpleImport ? defaultFn = moduleArgs[0]
    : 'default' in moduleArgs[0] ? defaultFn = moduleArgs[0].default
    : defaultFn = module;

  return import(`./${module}`).then(({ default: defaultFn }) => {
    moduleTakesArg ? defaultFn(moduleArgs[0].arg) : defaultFn();
  });
}

const t0 = performance.now();

window.addEventListener('load', () => {
  const PLAY_VIDEO_SETTING_IS_ON = window.localStorage.getItem('playVideoOnHomePageSetting') != 'false'
  const path = window.location.pathname;
  const mobileMediaQueryList = window.matchMedia('(max-width: 768px)'); // 768px is the Bootstrap tablet breakpoint

  if (!mobileMediaQueryList.matches && PLAY_VIDEO_SETTING_IS_ON && path == '/') loadModule({ module: 'loadVideo', arg: t0 });

  if (path == '/' && mobileMediaQueryList.matches) loadModule('createPlayButtonForVideo');

  if (path == '/') {
    Promise.resolve()
      .then(() => loadModule('getNewsFeed'))
      .then(() => mobileMediaQueryList.matches ? loadModule('toggleSettingVisibilityOnScrollBottom') : null)
  }
  path == '/settings/' ? loadModule('userSettings') : null;
});