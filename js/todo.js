const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input") 
const toDoList = document.getElementById("todo-list")

const TODOS_KEY ="todos"

let toDos = []

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos))
}

function removeDoing(event){
  const list = event.target.parentElement
  list.remove()
  
  toDos = toDos.filter((doit) => doit.id !== parseInt(list.id))
  saveToDos()

}

function paintTodo(doing){
  const list = document.createElement("li")
  list.id = doing.id
  const span = document.createElement("span")
  span.innerText = doing.text
  const closeButton = document.createElement("button")
  closeButton.innerText = "❌"
  closeButton.addEventListener("click",removeDoing)
  list.appendChild(span)
  list.appendChild(closeButton)
  
  toDoList.appendChild(list)
}

function setTodoSubmit(event){
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value =""
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj)
  paintTodo(newTodoObj)
  saveToDos()
} 

toDoForm.addEventListener("submit",setTodoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos !== null){
  const parsedTodos = JSON.parse(savedToDos)
  toDos = parsedTodos
  parsedTodos.forEach(paintTodo)
}