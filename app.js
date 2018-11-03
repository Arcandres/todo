// DOM
const toDo = document.getElementById('toDo'),
  tasks = document.getElementById('tasks'),
  task = document.getElementById('addTask')


// Models
class ToDo {
  constructor(name) {
    this.name = name,
    this.tasks = []

    // Fix this pointing
      this.newTask = this.newTask.bind(this)
  }

  newTask(e) {
    // No reload
      e.preventDefault()

    // New task
      const newTask = new Task(task.value)

    // Add Task
      this.tasks.push(newTask)

      this.update()
  }

  update() {
    console.log(this.tasks)
  }

  delete() {
    // 
  }
}

class Task {
  constructor(id, name) {
    this.id = id,
    this.name = name
  }
}

// Init
const myList = new ToDo('My List')

// Listener
toDo.addEventListener('submit', myList.newTask)