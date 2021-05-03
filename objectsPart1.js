/**1. Object Person.**
Create an object named person. Loop through the object and print both the property and value of the object.*/

const person = {
  firstName: "Awandem",
  lastName: "Nduondia",
  age: 47,
  origin: "Azi",
  profession: "Hired Liar",
};
//To return both properties and values
let entries = Object.entries(person);
console.log(entries);

/* **2. Get Values.** 
Create a function that returns an array of all **values** of an object's properties. 
* Examples:
```javascript
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
* Expected output: 
```javascript
["tea", "coffee", "milk"] 
```
 */
getObjectValues({
  choice1: "Ndu Tea",
  choice2: "Tole Tea",
  choice3: "Djutisa Tea",
  choice4: "Lipton Tea",
  Choice5: "Lemon Grass",
});

function getObjectValues(profiling) {
  let values = Object.values(profiling);
  console.log(values);
}

/* **3. Add A Method.**
Create an object and add a method to that object which prints the values of the objects in a string. */

let profile = {
  firstName: "Michael",
  lastName: "Zaputania",
  age: 25,
  job: "hawker",
  city: "Megapolis",
  print: function () {
    console.log(
      `"${this.firstName} ${this.lastName} is a ${this.age} old ${this.job} of lies on the cobbled streets of ${this.city}"`
    );
  },
};
profile.print();

//## Bonus Questions

/* **1. Convert keys and values into an array.** 
Create a function that converts an object into an array of keys and values. 
* Examples:
```javascript */
objectToArray({
  A: 1,
  B: 2,
  C: 3,
});
function objectToArray(iterate) {
  let entries = Object.entries(iterate);
  console.log(entries);
}

objectToArray2({
  cats: 1,
  dogs: 2,
  turtles: 4,
});

function objectToArray2(arrayed) {
  let entries = Object.entries(arrayed);
  console.log(entries);
}

/**
 
**2. List Properties.**
Create a function that returns an array of **properties** of a javascript object.*/

let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
function print() {
  let keys = Object.keys(student);
  console.log(keys);
}
print();

/*
**3. Merge.**
Create a function that takes two objects as its parameters and merges them together into a new object. 

**Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
 */

let first = { firstName: "John" };
let last = { lastName: "Smith" };
function merger() {
  let givenName = first;
  let surname = last;
  let fullNames = { ...givenName, ...surname };

  console.log(fullNames);
}
merger();

/* **4. Switch Keys and Values.**
Create a function to get a copy of an object. The copy must switch the keys and values.
* Example: 
```javascript */
let personality = {
    name: "John",
    job: "teacher",
   
}
function invertOrder(rev){
  var retobj={};
  for(var key in rev){
    retobj[rev[key]] = key;
  }
  return retobj;
}
personality = invertOrder(personality)
console.log(personality)
//personality.print()

