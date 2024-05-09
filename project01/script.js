const prompt = require("prompt-sync")();
function toDo1() {
    console.log("---------------------------------------")
    let toDo = prompt("Enter what do you want to do: ")
    switch (toDo) {
        case "add":
            console.log("---------------------------------------")
            console.log("")
            return add()
        case "remove":
            console.log("---------------------------------------")
            console.log("")
            return remove()
        case "edit":
            console.log("---------------------------------------")
            console.log("")
            return edit()
        case "conclude":
            console.log("---------------------------------------")
            console.log("")
            return conclude()
        case "exit":
            console.log("")
            console.log("---------------------------------------")
            console.log("Good Bye!")
            console.log("---------------------------------------")
            break
        case "view":
            console.log("---------------------------------------")
            console.log("")
            return view()
        default:
            console.log("---------------------------------------")
            console.log("Enter a valid command!")
            console.log("---------------------------------------")
            console.log("")
            return toDo1()
    }
}

function add() {
    console.log("---------------------------------------")
    let addTaskName = prompt("Enter the name of the new task: ")
    let addTaskDesc = prompt("Enter the description of the new task: ")
    let addTaskDate = prompt("Enter the expriration date of the new task: ")
    let addTaskPrio = Number(prompt("Enter the priority level of the new task (1 to 10): "))
    tasks.push ({
        name: addTaskName,
        desc: addTaskDesc,
        date: addTaskDate,
        prio: addTaskPrio,
        conc: "No" 
    })
    console.log("---------------------------------------")
    console.log("Task added!")
    console.log("---------------------------------------")
    console.log("")
    return toDo1()
}

function remove() {
    console.log("---------------------------------------")
    let id
    let removeTaskName = prompt("Enter the name of the task you want to remove: ")
    if (removeTaskName == "cancel"){
        console.log("---------------------------------------")
        console.log("")
        return toDo1()
    } else {
        tasks.forEach(function (obj, index) {
            if (obj.name == removeTaskName) {
                id = index
            }
        })
        if (id == null || id == undefined){
            console.log("---------------------------------------")
            console.log("Task not found. Try again.")
            console.log("---------------------------------------")
            return remove()
        } else {
            tasks.splice(id, 1)
            console.log("---------------------------------------")
            console.log("Task removed!")
            console.log("---------------------------------------")
        }
        console.log("")
        return toDo1()
    }
}

function edit() {
    console.log("---------------------------------------")
    let editTaskName = prompt("Enter the name of the task you want to edit: ")
    console.log("---------------------------------------")
    let verifyEdit = 0
    for (task of tasks) {
        if (task.name == editTaskName) {
            verifyEdit ++
        }
    }
    if (verifyEdit == 0) {
        console.log("Task not found. Try again.")
        console.log("---------------------------------------")
        console.log("")
        return edit()
    }
    let editWhat = prompt("Enter what you want to edit: ")
    console.log("---------------------------------------")
    while (editWhat != "name" && editWhat != "desc" && editWhat != "date" && editWhat != "prio") {
        console.log("Enter a valid parameter")
        console.log("---------------------------------------")
        editWhat = prompt("Enter what do you want to edit: ")
        console.log("---------------------------------------")
    }
    let change = prompt("Enter what you want to put in place: ")
    console.log("---------------------------------------")
    for (task of tasks) {
        if (task.name == editTaskName) {
            task[editWhat] = change
        }
    }
    console.log("Task edited!")
    console.log("---------------------------------------")
    console.log("")
    return toDo1()
}

function conclude() {
    console.log("---------------------------------------")
    let concludeTaskName = prompt("Enter the name of the task you want to mark as concluded: ")
    let verifyConc = 0
    let tasksNotConclude = []
    let tasksConclude = []
    for (task of tasks) {
        if (task.conc == "No") {
            tasksNotConclude.push(task)
        } else {
            tasksConclude.push(task)
        }
    }
    for (task of tasksNotConclude) {
        if (concludeTaskName == task.name) {
            task.conc = "Yes"
            verifyConc ++
        } 
    }
    if (verifyConc > 0) {
        console.log("---------------------------------------")
        console.log("Task marked as concluded!")
        console.log("---------------------------------------")
        console.log("")
        return toDo1()
    } else {
        console.log("---------------------------------------")
        console.log("Task not found or task is already conclude. Try enter again.")
        console.log("---------------------------------------")
        console.log("")
        return conclude()
    }
}

function view() {
    console.log("---------------------------------------")
    let contAssigned = 0
    let contConclude = 0
    if (tasks.length == 0) {
        console.log("There are no tasks to show.")
        console.log("---------------------------------------")
        console.log("")
        return toDo1()
    } else {
        console.log("TASKS:")
        console.log("---------------------------------------")
        console.log("Assigned:")
        for (task of tasks) {
            if (task.conc == "No") {
                console.log("---------------------------------------")
                console.log("Name: ", task.name)
                console.log("Descriprion: ", task.desc)
                console.log("Date: ", task.date)
                console.log("Priority: ", task.prio)
                console.log("Conclude:", task.conc)
                contAssigned++
            }
        }
        if (contAssigned == 0) {
            console.log("---------------------------------------")
            console.log("There are no tasks assigned")
        }
        console.log("---------------------------------------")
        console.log("Conclude:")
        for (task of tasks) {
            if (task.conc == "Yes") {
                console.log("---------------------------------------")
                console.log("Name: ", task.name)
                console.log("Descriprion: ", task.desc)
                console.log("Date: ", task.date)
                console.log("Priority: ", task.prio)
                console.log("Conclude:", task.conc)
                contConclude++
            }
        }
        if (contConclude == 0) {
            console.log("---------------------------------------")
            console.log("There are no tasks conclude")
        }
    }
    console.log("---------------------------------------")
    console.log("")
    return toDo1()
}

let tasks = []
toDo1()