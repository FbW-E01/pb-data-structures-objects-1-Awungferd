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
Create an object and add a method to that object which prints the values of the objects in a string. 
* Example
```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: Paris
}
```
* Example of Expected Output 
"Michael Smith is a 20 year old driver in Paris".
 */

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
profile.print()
