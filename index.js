let arr = [];
let input = document.querySelector("input");
let addBtn = document.querySelector("button");
let todoContainer = document.querySelector(".todoList");
document.querySelector("body").addEventListener('keypress',e =>{
    key = e.key;
    if(key === 'Enter'){
            let newTodo = input.value.trim();
        if (newTodo === "") return;
        arr.push(newTodo);
        input.value = "";
        renderTodoList();
    }
})
function renderTodoList() {
    let todoListHtml = '';
    arr.forEach((element, index) => {
        todoListHtml += `
            <div class="todoContent">
                <p>
                    ${element} 
                    
                </p>
                <button class="delButton" data-index="${index}"><i class="fa-solid fa-trash"></i> </button>
            </div>`
            ;
    });
    todoContainer.innerHTML = todoListHtml;
    document.querySelectorAll(".delButton").forEach(btn => {
        btn.addEventListener("click", (e) => {
            let index = e.target.getAttribute("data-index");
            arr.splice(index, 1);
            renderTodoList(); 
        });
    });
}

function addTodo() {
    addBtn.addEventListener("click", () => {
        let newTodo = input.value.trim();
        if (newTodo === "") return;
        arr.push(newTodo);
        input.value = "";
        renderTodoList();
    });
}

addTodo();
