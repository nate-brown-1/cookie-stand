'use strict';

let seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  getRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

console.log(seattleStore.getRandomNumberOfCustomers());
