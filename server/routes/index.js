const express = require("express")
const router = express.Router()
const axios = require("axios")

var tasks = [
    {
    id: 1,
    name: 'Hello World',
    completed: false
},
{
    id: 2,
    name: 'Bye World',
    completed: false
},
{
    id: 3,
    name: 'My third task',
    completed: false
}];
// router.all("/:API_HU", (request, response) => {
    // console.log(request.params);
    // response.send({
        // tasks: tasks
    // })
    // response.send(request.params.API_HU + "\n")
// })

// router.all("/:cpAPI", (req, res) => {
//     console.log(req.params.cpAPI)

//     axios.get("http://localhost:3000/" + req.params.cpAPI).then((response) => {
//         res.send(response.data)
//     })
// })

router.get("/tasks", (request, response) => {
    response.send({
        tasks: tasks
    })
})

router.post("/add-task", (request, response) => {
    let newTask = {
        id: 4,
        name: request.body.newTask,
        completed: false
    };
    tasks.push(newTask);
    response.send({
        tasks: tasks
    });
})

router.post("/remove-task", (request, response) => {
    const objWithIdIndex = tasks.findIndex((obj) => obj.id === request.body.id);
    tasks.splice(objWithIdIndex, 1);
    response.send({
        tasks: tasks
    });
})

router.post("/complete-task", (request, response) => {
    const objWithIdIndex = tasks.findIndex((obj) => obj.id === request.body.id);
    tasks[objWithIdIndex].completed = true;
    response.send({
        tasks: tasks
    });
})

// router.all("/user", (request, response) => {
//     console.log("User page called.")
//     response.send();
// })
module.exports = router