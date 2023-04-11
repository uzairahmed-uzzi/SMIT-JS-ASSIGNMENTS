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