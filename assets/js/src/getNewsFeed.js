/**
// Custom JS written by Wesley Zajicek
//
// Asynchronous code to:
// Fetch the news feed XML file (generated automatically in the newsroom website's build process)...
// Then, build-out all the elements for each list item and inject into the page...
// Finally, use Promise.all to load each articles' preview-image into the div's inline styling...
// Images load one-at-a-time and one-after-another.
//
*/
const NEWS_FEED_URL = 'https://news.kcc.edu/feed.xml'; // Ummmm...that's just the way this is...
const NEWS_FEED_PARENT_ELEMENT_ID = 'news'; // ID built into the HTML | wrapper element to hold the list
const PARENT = document.getElementById(NEWS_FEED_PARENT_ELEMENT_ID);

function createListItem(entry, imageArr, htmlArr, i) {
  const title = entry.querySelector('title').innerHTML;
  const link = entry.querySelector('link').getAttribute('href');
  const summary = entry.querySelector('summary').innerHTML;
  const image = entry.getElementsByTagName('media:thumbnail')[0].getAttribute('url');

  imageArr.push(`${image}`); // populate imageArr in order with the URL for each image
  htmlArr.push(`<li class="news__li">`,
    `<a class="news__a" href="${link}">`,
    `<div class="news__div">`,
    `<span class="news__span">${i + 1}</span>`,
    `<h3 class="news__h3">${title}</h3>`,
    `<p class="news__p">${summary}</p>`,
    `\n</div>\n<div class="news__div--img"></div>\n</a>\n</li>`);
}

function requestHandler() {
  if (this.status != 200) {
    return console.error(`Error ${this.status}: ${this.statusText}`);
  }

  const createListPromise = new Promise((resolve, reject) => {
    const entriesList = this.responseXML.querySelectorAll('entry');
    let imageArr = [];
    let htmlArr = ['<ol class="news__ol">'];

    [...entriesList].forEach((entry, i) => {
      createListItem(entry, imageArr, htmlArr, i);
    });

    htmlArr.push('\n</ol>');
    PARENT.innerHTML = htmlArr.join('');
    resolve(imageArr);
  });

  createListPromise
    .then((imageArr) => {
      const list = PARENT.querySelector('ol');
      const imageDiv = list.querySelectorAll('.news__div--img');

      [...imageDiv].forEach((div, i) => div.style = `background-image: url('${imageArr[i]}')`);
    })

}

function getNewsFeed() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('error', (err) => console.error(`Error fetching the news feed XML-file!`, err));

  xhr.addEventListener('load', requestHandler);
  xhr.open('GET', NEWS_FEED_URL);
  xhr.responseType = 'document';
  xhr.send();
}

export default getNewsFeed;
