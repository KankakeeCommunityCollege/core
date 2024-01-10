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

  if (document.querySelector('.pathways__slider')) {
    $('.pathways__slider').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',  // TODO: change to <button> el
      nextArrow: '<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>',  // TODO: change to <button> el
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
});
