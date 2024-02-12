const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveToLocalStorage() {
  localStorage.setItem("user", JSON.stringify(user));
}

saveToLocalStorage()