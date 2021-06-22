// Since mobile users cannot hover over the settings link to make it visible:
// This JS makes the setting-link visible when mobile users hit the bottom of the page.
const SETTINGS_LINK_QUERY = '.setting__link'; // Built into HTML DOM

function stopObserving(el, observer) {
  observer.disconnect();
  observer.unobserve(el);
}

function toggleLinkVisibility(link) {
  link.classList.toggle('setting__link--visible');
}

function runFuncAfterXMilliseconds(x, el, toggleCb) {
  return new Promise(resolve => {
    window.setTimeout(() => {
      toggleCb(el);
      resolve();
    }, x);
  });
}

async function toggleVisibilitySequence(el, observer) {
  await runFuncAfterXMilliseconds(300, el, toggleLinkVisibility);
  await runFuncAfterXMilliseconds(4000, el, toggleLinkVisibility);
  stopObserving(el, observer);
}

function intersectHandler(entries, observer) {
  entries.forEach(entry => {
    let target = entry.target;
    
    entry.isIntersecting ? toggleVisibilitySequence(target, observer) : null;
  });
};

function toggleSettingVisibilityOnScrollBottom() {
  const settingLink = document.querySelector(SETTINGS_LINK_QUERY);
  const intersectOptions = {
    threshold: 0.9
  }
  let observer = new IntersectionObserver(intersectHandler, intersectOptions);

  observer.observe(settingLink);
}

export default toggleSettingVisibilityOnScrollBottom;