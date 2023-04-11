function storeAndReturn(obj) {
  for (let key in obj) {
    let val = obj[key];
    let data = JSON.stringify(val);
    localStorage.setItem(key, data);
  }

  let newObj = {};
  for (let key in obj) {
    let data = localStorage.getItem(key);
    let val = JSON.parse(data);
    newObj[key] = val;
  }

  return newObj;
}

let person = {
  name: "Bob",
  age: 30,
  hobbies: ["gaming", "cooking", "traveling"]
};

let newPerson = storeAndReturn(person);
console.log(newPerson);