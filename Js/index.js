//*Selecionar elementos
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancelEditBtn")

let oldInputValue

//**Funções */
const saveTodo = (text) => {

    //*Criar o template
    const todo = document.createElement("div")//*Criar a Div geral(a div pai do template)
    todo.classList.add("todo")//*Colocamos a class "Todo" Na div pai

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn)

    todoList.appendChild(todo) //*Adicionamos o Todo na Lista geral que é #TodoList

    todoInput.value = ""
    todoInput.focus()

}

const toggleForms = () => {
    editForm.classList.toggle("hide") //*Vai esconder o todoForm e mostrar o editForm
    todoForm.classList.toggle("hide") //* Vai esconder o editForm e vai mostrar o todoForm
    todoList.classList.toggle("hide") //* vai esconder o todoList e mostrar o editForm

}


//*Eventos
todoForm.addEventListener("submit", (e => {
    e.preventDefault() //*Para o formulário não ser enviado quando pressionado

    const inputValue = todoInput.value  //*Aqui ele pega o valor do input para poder criar tarefa nova

    if (inputValue) {
        saveTodo(inputValue)

        //*função para salvar To-do
    }
}))

document.addEventListener("click", (e) => {//* colocamos o evento no documento todo 

    const targetEl = e.target //* Pegar o elemento que foi clicado 
    const parentEl = targetEl.closest("div") //*selecionei a div mais proxima do elemento pai
    let todoTitle

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }
    //*Finalizar a tarefa
    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }
    //*Remover a tarefa
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove("todo")
    }
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms()
        editInput.value = todoTitle
        oldInputValue.value = todoTitle
    }
})

//editForm.addEventListener("submit", (e) => {
//  e.preventDefault

//const editInputValue = document.getElementById("edit-Input").innerText

//})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms()
})