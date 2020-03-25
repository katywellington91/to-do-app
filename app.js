

function onReady() {
  const storage = JSON.parse(localStorage.getItem('toDos'))
  let toDos = [];
  storage ? toDos.push(...storage) : null
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      toDo.complete ? checkbox.checked = true : checkbox.checked = false

      checkbox.addEventListener('change', function() {
        if (this.checked) {
          console.log(toDo)
          toDo['complete'] = true;
        } else {
          console.log(toDo)
          toDo['complete'] = false;
        }
        localStorage.setItem('toDos', JSON.stringify(toDos))
      })

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });

    localStorage.setItem('toDos', JSON.stringify(toDos))
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
};
