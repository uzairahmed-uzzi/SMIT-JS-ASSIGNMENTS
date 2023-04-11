function addItem(content) {
  let item = document.createElement("li");
  item.textContent = content;
  let list = document.querySelector("#my-list");
  list.appendChild(item);
}

addItem("Have it worked properly?....");
