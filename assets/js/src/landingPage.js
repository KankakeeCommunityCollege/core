const GET_STARTED_BUTTON_QUERYSELECTOR = 'a[href="#page-top"]';  // call-to-action Button at the bottom of landing pages
// Custom JS to smooth-scroll the user to the Jotform

function clickHandler(e) {
  const targetId = e.target.getAttribute('href').replace(/^#/, '');
  const targetEl = document.getElementById(targetId);
  const distanceToTop = Math.floor(targetEl.getBoundingClientRect().top) - 50; // `- 50` is an offset for fixed navigation bar

  e.preventDefault();
  window.scrollBy({ top: distanceToTop, left: 0, behavior: 'smooth' });
}

function landingPage() {
  const button = document.querySelector(GET_STARTED_BUTTON_QUERYSELECTOR);

  button.addEventListener('click', clickHandler);
}

export default landingPage;
