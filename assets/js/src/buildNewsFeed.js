const NEWS_FEED_URL = 'https://news.kcc.edu/feed.xml'; // Ummmm...that's just the way this is...
const NEW_FEED_PARENT_ELEMENT_ID_STRING = 'news'; // ID built into the HTML | wrapper element to hold the list
// *_TAG_FROM_NEWS_FEED = The tags that actually get built into our newsroom XML news-feed
const LINK_TAG_FROM_NEWS_FEED = 'link';  // tag built into the XML feed
const TITLE_TAG_FROM_NEWS_FEED = 'title';  // tag built into the XML feed
const PUBLISHED_TAG_FROM_NEWS_FEED = 'published';  // You get the idea...
const SUMMARY_TAG_FROM_NEWS_FEED = 'summary';
const  IMAGE_TAG_FROM_NEWS_FEED = 'media:thumbnail';

function setLinkAttributes(href, a) {
  a.setAttribute('href', href);
  return a;
}

function createTitleEl(title, div) {
  const h3 = document.createElement('h3');

  h3.innerHTML = title;
  h3.classList.add('news__h3');
  div.appendChild(h3);
  return h3;
}

function createSummaryEl(summaryText, div, a) {
  const p = document.createElement('p');

  p.innerHTML = summaryText;
  p.classList.add('news__p');
  div.appendChild(p);
  a.appendChild(div);
  return p;
}

function createImageDiv(imageLocation, a) {
  const div = document.createElement('div');

  div.setAttribute('style', "background-image: url('" + imageLocation + "');");
  div.classList.add('news__div--img');
  a.appendChild(div);
  return div;
}

function createEntryElements(items, a, div, span) {

  if ( items.tagName == LINK_TAG_FROM_NEWS_FEED ) {
    // LINK
    //console.log(items.getAttribute('href'));
    setLinkAttributes(items.getAttribute('href'), a);
  } else if ( items.tagName == TITLE_TAG_FROM_NEWS_FEED ) {
    // TITLE
    //console.log(items.textContent);
    div.appendChild(span);
    createTitleEl(items.textContent, div);
  } else if ( items.tagName == PUBLISHED_TAG_FROM_NEWS_FEED ) {
    // PUBLISHED DATE
    //console.log(items.textContent);
  } else if ( items.tagName == SUMMARY_TAG_FROM_NEWS_FEED ) {
    // SUMMARY
    //console.log('SUMMARY: ' + items.textContent);
    createSummaryEl(items.textContent, div, a);
  } else if ( items.tagName == IMAGE_TAG_FROM_NEWS_FEED ) {
    // IMAGE
    //console.log('IMAGE: ' + items.getAttribute('url'));
    createImageDiv(items.getAttribute('url'), a);
  }
  return a;
}

function loopOverEntryItems(entry, ol, count) {
  //console.log(count);
  let entryItems = entry.childNodes;
  const li = document.createElement('li');
  const a = document.createElement('a');
  const div = document.createElement('div');
  const span = document.createElement('span');

  span.innerHTML = count;
  span.classList.add('news__span');
  div.classList.add('news__div');
  li.classList.add('news__li');
  a.classList.add('news__a');
  li.appendChild(a);
  ol.appendChild(li);

  for (let i = 0, len = entryItems.length; i < len; i++) {
    createEntryElements(entryItems[i], a, div, span);
  }
}

function loopOverFeedEntries(collection, ol) {
  for (let i = 0, len = collection.length; i < len; i++) {
    //console.log(collection[i]);
    let count = i + 1;
    loopOverEntryItems(collection[i], ol, count);
  }
}

function createOrderedList(parent) {
  const ol = document.createElement('ol');

  ol.classList.add('news__ol')
  parent.appendChild(ol);
  return ol;
}

function findFeedEntries(xmlDoc) {
  const parent = document.getElementById(NEW_FEED_PARENT_ELEMENT_ID_STRING);
  const ol = createOrderedList(parent);
  const entries =  xmlDoc.getElementsByTagName('entry');
  //console.log(entries);
  loopOverFeedEntries(entries, ol);
}

function requestListener() {
  if (this.status != 200) { // analyze HTTP status of the response
    console.error(`Error ${this.status}: ${this.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    //console.log(this.responseXML); // responseText is the server
    findFeedEntries(this.responseXML);
  }
}

function errorListener() {
  console.error(`Network Error: unable to make XMLHttpsRequest`);
}

function addEventListeners(el, eventsArray, handlerFunctionArray) {
  for (let i = 0, len = eventsArray.length; i < len; i++) {
    el.addEventListener(eventsArray[i], handlerFunctionArray[i]);
  }
}

function buildNewsFeed() {
  const xhr = new XMLHttpRequest();

  addEventListeners(xhr, ['load', 'error'], [requestListener, errorListener]);
  xhr.open('GET', NEWS_FEED_URL);
  xhr.send();
}

export default buildNewsFeed;
