const NEWS_FEED_URL = 'https://news.kcc.edu/feed.xml';
const NEW_FEED_PARENT_ELEMENT_ID_STRING = 'news';

function createEl(tagName, classes) {
  const el = document.createElement(tagName);

  if ( classes === null ) {
    return el;
  } else if ( typeof classes == 'object' ) {
    for (var i = 0, len = classes.length; i < len; i++) {
      el.classList.add(classes[i]);
    }
  } else if ( typeof classes == 'string' ) {
    el.classList.add(classes);
  }
  return el;
}

function setLinkAttributes(href, a) {
  a.setAttribute('href', href);
  return a;
}

function createTitleEl(title, a) {
  const h3 = document.createElement('h3');

  h3.innerHTML = title;
  a.appendChild(h3);
  return h3;
}

function createSummaryEl(summaryText, a) {
  const p = document.createElement('p');

  p.innerHTML = summaryText;
  a.appendChild(p);
  return p;
}

function createImageDiv(imageLocation, a) {
  const div = document.createElement('div');

  div.setAttribute('style', 'url("' + imageLocation + '")');
  a.appendChild(div);
  return div;
}

function createEntryElements(items, a) {

  if ( items.tagName == 'link' ) {
    // LINK
    //console.log(items.getAttribute('href'));
    setLinkAttributes(items.getAttribute('href'), a);
  } else if ( items.tagName == 'title' ) {
    // TITLE
    //console.log(items.textContent);
    createTitleEl(items.textContent, a);
  } else if ( items.tagName == 'published' ) {
    // PUBLISHED DATE
    console.log(items.textContent);
  } else if ( items.tagName == 'summary' ) {
    // SUMMARY
    console.log('SUMMARY: ' + items.textContent);
    createSummaryEl(items.textContent, a);
  } else if ( items.tagName == 'media:thumbnail' ) {
    // IMAGE
    console.log('IMAGE: ' + items.getAttribute('url'));
    createImageDiv(items.getAttribute('url'), a);
  }
  return a;
}

function loopOverEntryItems(entry, ol) {
  let entryItems = entry.childNodes;
  const li = document.createElement('li');
  const a = document.createElement('a');
  li.appendChild(a);
  ol.appendChild(li);

  for (let i = 0, len = entryItems.length; i < len; i++) {
    createEntryElements(entryItems[i], a);
  }
}

function loopOverHtmlCollection(collection, ol) {
  for (let i = 0, len = collection.length; i < len; i++) {
    //console.log(collection[i]);
    loopOverEntryItems(collection[i], ol);
  }
}

function createOrderedList(parent) {
  const ol = document.createElement('ol');

  parent.appendChild(ol);
  return ol;
}

function findFeedEntries(xmlDoc) {
  const parent = document.getElementById(NEW_FEED_PARENT_ELEMENT_ID_STRING);
  const ol = createOrderedList(parent);
  const entries =  xmlDoc.getElementsByTagName('entry');
  //console.log(entries);
  loopOverHtmlCollection(entries, ol);
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
