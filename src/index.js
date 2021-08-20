document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.querySelector('#new-task-description').value)
    console.log(document.querySelector('#priority').value)
  })

function addToDo(todo) {
  let p = document.createElement("p")
  let list = document.querySelector('#list')
  p.textContent = todo;
  let btn = document.createElement('button')
  btn.addEventListener('click', removeToDo)
  btn.textContent = "X"
  let priorityValue = document.querySelector('#priority').value
  if (priorityValue === 'high') {
    p.style="color:red"
  }
  if (priorityValue === 'medium') {
    p.style="color:yellow"
  }
  if (priorityValue === 'low') {
    p.style="color:green"
  }
  p.appendChild(btn)
  list.appendChild(p)
}

function removeToDo(e) {
  e.target.parentNode.remove();
  };

});
