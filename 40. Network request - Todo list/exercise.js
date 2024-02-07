async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    return data;
}

getTodos()
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log("End of program"))