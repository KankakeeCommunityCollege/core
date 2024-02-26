/**
 *
 *  Custom JS written by Wesley Zajicek for
 * @copyright © 2021 Kankakee Community College
 * @author Wesley Zajicek - <https://github.com/wdzajicek>
 *
 *
 */
import '../../scss/main.scss';

const t0 = performance.now();

window.addEventListener('load', () => {
  const PLAY_VIDEO_SETTING_IS_ON = window.localStorage.getItem('playVideoOnHomePageSetting') != 'false'
  const path = window.location.pathname;
  const mobileMediaQueryList = window.matchMedia('(max-width: 768px)'); // 768px is the Bootstrap tablet breakpoint

  if (!mobileMediaQueryList.matches && PLAY_VIDEO_SETTING_IS_ON && path == '/') {
    import('./loadVideo')
      .then(({ default: loadVideo }) => loadVideo(t0));
  }

  if (path == '/' && mobileMediaQueryList.matches) {
    import('./createPlayButtonForVideo')
      .then(({ default: createPlayButtonForVideo }) => createPlayButtonForVideo());
  }

  if (path == '/') {
    import('./getNewsFeed')
      .then(({ default: getNewsFeed }) => getNewsFeed());
    import('./toggleSettingVisibilityOnScrollBottom')
      .then(({ default: toggleSettingVisibilityOnScrollBottom }) => toggleSettingVisibilityOnScrollBottom());
  }

  if (path == '/settings/') {
    import('./userSettings')
      .then(({ default: userSettings }) => userSettings());
  }

  // Use smooth scrolling & prevent altering page URL with hash link
  // Fires on amazon-career-choice page
  if (document.querySelector('a[href="#page-top"]')) {
    import('./landingPage')
      .then(({ default: landingPage }) => landingPage());
  }

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
