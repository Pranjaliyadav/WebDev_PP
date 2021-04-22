let todoInput = document.querySelector(".todo-input");
let addTodoButton = document.querySelector(".add-todo");
let todoList = document.querySelector(".todos-list");

addTodoButton.addEventListener("click" , function(){
    addToDo();
});

todoInput.addEventListener("keypress" , function(event){
    if(event.key == "Enter"){
        addToDo();
    }
});

function addToDo(){
    let todo = todoInput.value;
    //console.log(todo);
    //todoInput.value = "";
    if(todo){//if there's input then only

        //create a list item
        let listItem = document.createElement("li");

        //now add a class to this li element
        listItem.classList.add("todo-item");

        //now add a pTag for this li element
        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;   //it writes html into it

        //now add delete button
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";

        //if delete button pressed
        deleteButton.addEventListener("click" , function(event){
            console.log("delete todo clicked !!!");
            console.log(event);
            event.target.parentNode.remove();  //this deletes 
        });

        //now add these tags to list elemnt
        listItem.append(pTag);
        listItem.append(deleteButton);

        //append this listitem to ul tag todolist
        todoList.append(listItem);
        todoInput.value = "";

    }
    else{
        alert("You haven't entered any todo !!!");
    }
}








/*todoInput.addEventListener("keypress" , function(event){
    console.log(event);
    if(event.key == "Enter"){
        console.log("Enter pressed!!!");
    }
});
*/