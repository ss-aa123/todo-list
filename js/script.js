const myList = document.getElementsByTagName("LI");

//here we are going through each list item by accessing the elements through getElementsByTagName above
for (let i = 0; i < myList.length; i++) {
    const span = document.createElement("SPAN")
    const symbol = document.createTextNode("\u00D7") //is the unicode for how to make an x 
    span.className = "delete"   //delete is now the class name for the specific part aka those "x" buttons beside tasks

    span.appendChild(symbol)
    myList[i].appendChild(span)
}

//implement delete functionality
const remove = document.getElementsByClassName("delete");

//everytime someone clocks delete button, that thing will be deletd
for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        const hide = this.parentElement
        hide.style.display = "none"
    };
}

const list = document.querySelector("ul")

list.addEventListener("click",
  function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
    }
  },
  false
);

//implement input functionality 

function newElement() {
    const task = document.createElement("li")
    const inputValue = document.getElementById("my-input").value
    const addItem = document.createTextNode(inputValue)
    task.appendChild(addItem)

    if (inputValue === "") {
        alert("You must write something!")
    } else {
        document.getElementById("my-list").appendChild(task)  //add this item in this specific place  
    }

    document.getElementById("my-input").value = "";     //basically resets the input box after you type and enter an to do item. so that you dont have to go and clear the input box yourself

    //add the deleting functionality to the new list item
    const span = document.createElement("SPAN");
    const symbol = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(symbol);
    task.appendChild(span);

    for (i = 0; i < remove.length; i++) {
      remove[i].onclick = function () {
        const hide = this.parentElement;
        hide.style.display = "none";
    };
  }
}




