'use strict';

const HOUR_BLOCKS = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const TOTAL_COOKIES_EACH_HOUR = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let storeContainer = document.getElementById('salesDiv');

// creates table with header row
// blank first cell, then times in sequence
function createStoreTable() {
  let storeTable = document.createElement('table');
  storeTable.setAttribute('id', 'storeTable');
  storeContainer.appendChild(storeTable);
  let storeTableHead = document.createElement('thead');
  storeTable.appendChild(storeTableHead);
  let storeTableHeaderRow = document.createElement('tr');
  storeTableHead.appendChild(storeTableHeaderRow);
  let tdHeaderBlank = document.createElement('td');
  tdHeaderBlank.textContent = '\u00A0';
  storeTableHeaderRow.appendChild(tdHeaderBlank);
  let tdHeaderHours = document.createElement('td');
  for (let i = 0; i < HOUR_BLOCKS.length; i++) {
    let tdHeaderHours = document.createElement('td');
    tdHeaderHours.textContent = `${HOUR_BLOCKS[i]}`;
    storeTableHeaderRow.appendChild(tdHeaderHours);
  }
  let storeTableBody = document.createElement('tbody');
  storeTableBody.setAttribute('id', 'storeTableBody');
  storeTable.appendChild(storeTableBody);
}
createStoreTable();

// constructor to create each store as an object
function SalmonStore (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.id = `${this.name}StoreId`;
  this.cookiesThisHourArray = [];
  this.getRandomNumberOfCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.calculateCookiesThisHour = function() {
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let cookiesThisHour = Math.round(this.avg * this.getRandomNumberOfCustomers());
      this.cookiesThisHourArray.push(cookiesThisHour);
      TOTAL_COOKIES_EACH_HOUR[i] += cookiesThisHour;
    };
  };
  this.renderDataRow = function() {
    let storeTableBody = document.getElementById('storeTableBody');
    this.calculateCookiesThisHour();
    let storeTableDataRow = document.createElement('tr');
    storeTableBody.appendChild(storeTableDataRow);
    let storeTableDataRowLabel = document.createElement('td');
    storeTableDataRowLabel.textContent = `${this.name}`;
    storeTableDataRow.appendChild(storeTableDataRowLabel);
    let cookieTotal = 0;
    for (let i = 0; i < HOUR_BLOCKS.length; i++) {
      let storeTableDataCell = document.createElement('td');
      storeTableDataCell.textContent = `${this.cookiesThisHourArray[i]}`;
      storeTableDataRow.appendChild(storeTableDataCell);
      cookieTotal += this.cookiesThisHourArray[i];
    };
  };
}

// empty array to contain instantiated SalmonStore objects
const storeArray = [];

// create SalmonStore object from constructor prototype
let seattle = new SalmonStore (
  'Seattle',
  23,
  65,
  6.3
);
// then add it to storeArray to use later
storeArray.push(seattle);
// add the store's row to the table
seattle.renderDataRow();

let tokyo = new SalmonStore (
  'Tokyo',
  3,
  24,
  1.2
);
storeArray.push(tokyo);
tokyo.renderDataRow();

let dubai = new SalmonStore (
  'Dubai',
  11,
  38,
  3.7
);
storeArray.push(dubai);
dubai.renderDataRow();

let paris = new SalmonStore (
  'Paris',
  20,
  38,
  2.3
);
storeArray.push(paris);
paris.renderDataRow();

let lima = new SalmonStore (
  'Lima',
  2,
  16,
  4.6
);
storeArray.push(lima);
lima.renderDataRow();

function createStoreFooterRow() {
  let storeTable = document.getElementById('storeTable');
  let storeTableFoot = document.createElement('tfoot');
  storeTable.appendChild(storeTableFoot);
  let storeTableFooterRow = document.createElement('tr');
  storeTableFoot.appendChild(storeTableFooterRow);
  let tdFooterTotal = document.createElement('td');
  tdFooterTotal.textContent = 'Totals';
  storeTableFooterRow.appendChild(tdFooterTotal);
  let tdFooterCalculatedTotals = document.createElement('td');
  for (let i = 0; i < HOUR_BLOCKS.length; i++) {
    let tdFooterCalculatedTotals = document.createElement('td');
    tdFooterCalculatedTotals.textContent = `${TOTAL_COOKIES_EACH_HOUR[i]}`;
    storeTableFooterRow.appendChild(tdFooterCalculatedTotals);
  }
}
createStoreFooterRow();
