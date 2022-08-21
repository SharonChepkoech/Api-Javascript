let fetch = require("node-fetch")
fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
        userId: 70,
        title: "Cheko",
        completed: true
    })
})
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
// change
.catch(function (error) {
console.log('error', error);
})