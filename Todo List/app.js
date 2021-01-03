const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
let taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clrBtn = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners(){
  document.addEventListener('DOMContentLoaded', loadItem)
  form.addEventListener('submit',addTask);
  taskList.addEventListener('click',delItem);
  clrBtn.addEventListener('click', clrItems);
  filter.addEventListener('keyup',filterItem);

}

// Add Tasks
function addTask(e){
if(taskInput.value === ''){
  alert('You need to enter an task!!');
}
const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
taskList.appendChild(li);

setItemtoLocalStorage(taskInput.value);

taskInput.value = '';

e.preventDefault();
}

function setItemtoLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadItem(){
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(task));
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
      taskList.appendChild(li);
    })

  }

function delItem(e){
if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();
    
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

}

function removeTaskFromLocalStorage(taskItem){
let tasks;
if(localStorage.getItem('tasks') === null){
  tasks = [];
} else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.forEach(function(task, index){
if(taskItem.textContent === task){
  tasks.splice(index, 1);
}
})
localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clrItems(e){
taskList.innerHTML = '';
e.preventDefault();
clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

function filterItem(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) !== -1){
        task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  })
}