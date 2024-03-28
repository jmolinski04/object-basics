//Store the value of the name property inside the catName variable, using bracket notation.
//Run the greeting() method using dot notation (it will log the greeting to the browser's console).
//Update the color property value to black.

const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

const catName = cat["name"];
console.log(catName);
cat.greeting();
cat.color = "black";
console.log(cat.color);
