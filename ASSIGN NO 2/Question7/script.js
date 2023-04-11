function saveObject(key, object) {
  let json = JSON.stringify(object);
  localStorage.setItem(key, json);
}


let person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "writing", "coding"]
};

saveObject("person", person);

function getFromStorage(key) {
  let data = localStorage.getItem(key);
  let result = JSON.parse(data);
  return result;
}

let personKey = "person";
let personData = getFromStorage(personKey);
console.log(personData);