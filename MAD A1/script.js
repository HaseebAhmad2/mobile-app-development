const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
  };
  
  const list = document.getElementById("todo-list");
  const itemCountSpan = document.getElementById("item-count");
  const uncheckedCountSpan = document.getElementById("unchecked-count");
  
  function newTodo() {
    /*Add Logic for creating a new Todo Item. */
    var N_item=document.getElementById("Input");
    var ls=document.createElement('ls');
    ls.setAttribute('id',N_item.value)
    
    var chkb=document.createElement("cbox")
    chkb.setAttribute('id','cbx')
    ls.appendChild(document.createTextNode(N_item.value))
    list.appendChild(ls)

      
    /*Below lines can be used to updated the data on frontend */   
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;

    
  }
 
  
  function removeTodo() {
    /*Add Logic for removing an existing TODO Item */
    document.getElementById('todo-list').remove()
    /*Below lines can be used to updated the data on frontend */
    list.innerHTML = " ";
    itemCountSpan.innerHTML = "";
    uncheckedCountSpan.innerHTML = "";
  }