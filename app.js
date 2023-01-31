'use strict';

const HOUR_BLOCKS = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let storeContainer = document.getElementById('salesDiv');

// Seattle (store 1 of 5)
let seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesThisHourArray: [],
  getRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesThisHour: function() {
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let cookiesThisHour = Math.round(this.avg * this.getRandomNumberOfCustomers());
      this.cookiesThisHourArray.push(cookiesThisHour);
    }
  },
  renderList: function() {
    let h3 = document.createElement('h2');
    h3.textContent = 'Seattle';
    seattleStoreArticle.appendChild(h3);
    let ul = document.createElement('ul');
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${HOUR_BLOCKS[i]}: ${this.cookiesThisHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    let cookieSum = 0;
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      cookieSum += this.cookiesThisHourArray[i];
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${cookieSum} cookies`;
    ul.appendChild(li);
    seattleStoreArticle.appendChild(ul);
  }
}

let seattleStoreArticle = document.createElement('article');
seattleStore.calculateCookiesThisHour();
seattleStore.renderList();
storeContainer.appendChild(seattleStoreArticle);

// Tokyo (store 2 of 5)
let tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesThisHourArray: [],
  getRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesThisHour: function() {
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let cookiesThisHour = Math.round(this.avg * this.getRandomNumberOfCustomers());
      this.cookiesThisHourArray.push(cookiesThisHour);
    }
  },
  renderList: function() {
    let h3 = document.createElement('h2');
    h3.textContent = 'Tokyo';
    tokyoStoreArticle.appendChild(h3);
    let ul = document.createElement('ul');
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${HOUR_BLOCKS[i]}: ${this.cookiesThisHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    let cookieSum = 0;
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      cookieSum += this.cookiesThisHourArray[i];
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${cookieSum} cookies`;
    ul.appendChild(li);
    tokyoStoreArticle.appendChild(ul);
  }
}

let tokyoStoreArticle = document.createElement('article');
tokyoStore.calculateCookiesThisHour();
tokyoStore.renderList();
storeContainer.appendChild(tokyoStoreArticle);

// Dubai (store 3 of 5)
let dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesThisHourArray: [],
  getRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesThisHour: function() {
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let cookiesThisHour = Math.round(this.avg * this.getRandomNumberOfCustomers());
      this.cookiesThisHourArray.push(cookiesThisHour);
    }
  },
  renderList: function() {
    let h3 = document.createElement('h2');
    h3.textContent = 'Dubai';
    dubaiStoreArticle.appendChild(h3);
    let ul = document.createElement('ul');
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${HOUR_BLOCKS[i]}: ${this.cookiesThisHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    let cookieSum = 0;
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      cookieSum += this.cookiesThisHourArray[i];
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${cookieSum} cookies`;
    ul.appendChild(li);
    dubaiStoreArticle.appendChild(ul);
  }
}

let dubaiStoreArticle = document.createElement('article');
dubaiStore.calculateCookiesThisHour();
dubaiStore.renderList();
storeContainer.appendChild(dubaiStoreArticle);

// Paris (store 4 of 5)
let parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesThisHourArray: [],
  getRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesThisHour: function() {
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let cookiesThisHour = Math.round(this.avg * this.getRandomNumberOfCustomers());
      this.cookiesThisHourArray.push(cookiesThisHour);
    }
  },
  renderList: function() {
    let h3 = document.createElement('h2');
    h3.textContent = 'Paris';
    parisStoreArticle.appendChild(h3);
    let ul = document.createElement('ul');
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${HOUR_BLOCKS[i]}: ${this.cookiesThisHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    let cookieSum = 0;
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      cookieSum += this.cookiesThisHourArray[i];
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${cookieSum} cookies`;
    ul.appendChild(li);
    parisStoreArticle.appendChild(ul);
  }
}

let parisStoreArticle = document.createElement('article');
parisStore.calculateCookiesThisHour();
parisStore.renderList();
storeContainer.appendChild(parisStoreArticle);

// Lima (store 5 of 5)
let limaStore = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesThisHourArray: [],
  getRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesThisHour: function() {
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let cookiesThisHour = Math.round(this.avg * this.getRandomNumberOfCustomers());
      this.cookiesThisHourArray.push(cookiesThisHour);
    }
  },
  renderList: function() {
    let h3 = document.createElement('h2');
    h3.textContent = 'Lima';
    limaStoreArticle.appendChild(h3);
    let ul = document.createElement('ul');
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${HOUR_BLOCKS[i]}: ${this.cookiesThisHourArray[i]} cookies`;
      ul.appendChild(li);
    }
    let cookieSum = 0;
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      cookieSum += this.cookiesThisHourArray[i];
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${cookieSum} cookies`;
    ul.appendChild(li);
    limaStoreArticle.appendChild(ul);
  }
}

let limaStoreArticle = document.createElement('article');
limaStore.calculateCookiesThisHour();
limaStore.renderList();
storeContainer.appendChild(limaStoreArticle);
