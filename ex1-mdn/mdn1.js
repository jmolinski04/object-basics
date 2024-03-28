//Store the value of the name property inside the catName variable, using bracket notation.
//Run the greeting() method using dot notation (it will log the greeting to the browser's console).
//Update the color property value to black.

const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

const cat2 = {
  name: "Bob",
  breed: "Abyssinian",
  color: "white",
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
