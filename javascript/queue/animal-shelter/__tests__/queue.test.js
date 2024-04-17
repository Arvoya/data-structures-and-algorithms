const AnimalShelter = require("../AnimialShelter");

let animalShelter = new AnimalShelter();

describe("AnimalShelter", () => {
     it("should return the correct animal", () => {
          animalShelter.enqueue({ type: "dog", time: 1 });
          animalShelter.enqueue({ type: "cat", time: 2 });
          animalShelter.enqueue({ type: "dog", time: 3 });
          animalShelter.enqueue({ type: "cat", time: 4 });
          animalShelter.enqueue({ type: "dog", time: 5 });
          animalShelter.enqueue({ type: "cat", time: 6 });

          expect(animalShelter.dequeueAny("dog")).toEqual({
               type: "dog",
               time: 1,
          });
          expect(animalShelter.dequeueAny("cat")).toEqual({
               type: "cat",
               time: 2,
          });
     });

     it("should return the correct animal when the animal type is not specified", () => {
          animalShelter.enqueue({ type: "dog", time: 1 });
          animalShelter.enqueue({ type: "cat", time: 2 });
          animalShelter.enqueue({ type: "dog", time: 3 });
          animalShelter.enqueue({ type: "cat", time: 4 });
          animalShelter.enqueue({ type: "dog", time: 5 });
          animalShelter.enqueue({ type: "cat", time: 6 });

          expect(animalShelter.dequeueAny("bird")).toEqual(null);
     });
});
