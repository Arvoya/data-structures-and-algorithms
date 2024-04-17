class AnimalShelter {
     constructor() {
          this.dogs = [];
          this.cats = [];
     }

     enqueue(animal) {
          if (animal.type === "dog") {
               this.dogs.unshift(animal);
          } else if (animal.type === "cat") {
               this.cats.unshift(animal);
          } else {
               return "We only accept dogs and cats";
          }
     }

     dequeueAny(pref) {
          if (pref === "dog" && this.dogs.length > 0) {
               return this.dogs.pop();
          } else if (pref === "cat" && this.cats.length > 0) {
               return this.cats.pop();
          } else {
               return null;
          }
     }
}

module.exports = AnimalShelter;
