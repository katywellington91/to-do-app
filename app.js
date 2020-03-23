


function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the newToDoText
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //set the input's type to checkbox
    let checkbox =  document.createElement('input');
    checkbox.type = "checkbox";

//delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      //this.parentElement represents the button's li parent
      toDoList.removeChild(this.parentElement);

    })

    //set the title
    newLi.textContent = title;

    //attach the checkbox to li
    newLi.appendChild(checkbox);

    // attach delete btn
    newLi.appendChild(deleteBtn);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function () {
  onReady();
};
