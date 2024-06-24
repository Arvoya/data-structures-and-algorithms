"use strict";

class HashTable {
     constructor(size) {
          this.size = size;
          this.buckets = new Array(size);
     }

     getHash(key) {
          let arrayKey = key.split("");
          let hash = 0;
          for (let i = 0; i < arrayKey.length; i++) {
               hash += arrayKey[i].charCodeAt(0);
          }
          return (hash * 599) % this.size;
     }
}

let table = new HashTable(1024);

let address = table.getHash("Jacob");

console.log(address);

console.log(table);
