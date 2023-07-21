
let user = JSON.parse(localStorage.getItem("user"));
let taskList = user.taskList;

class Task {
  constructor(title, description, isActive, date=null) {
    this.title = title;
    this.description = description;
    this.isActive = isActive;
    this.avatarLetter = user.fullname[0];
    this.date = date;
  }
  toElement = () => {
    return `<li>
        <div class="taskCard">
          <div class="avatarOnCard">
            <div class="avatar" >
              ${this.avatarLetter}
            </div>
            <div class="taskCardDone">
              <button>
                <img class="tick" src="img/tick.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="taskTitle">
            <p>${this.title}</p>
          </div>
          <hr />
          <div class="taskDescription">
            <p class="desTitle">Description</p>
            <p class="description">
              ${this.description}
            </p>
          </div>
        </div>
      </li>`;
  };
}

class Tasks {
  constructor(taskList) {
    this.taskList = taskList;
    this.update();
  }
  active = [];
  done = [];
  activeStr = "";
  doneStr = "";
  fullname = user.fullname;
  addTask = (task) => {
    taskList.unshift(task);
    this.update();
  };
  saveTaskList=()=>{
    user.taskList = this.taskList;
    localStorage.setItem("user",JSON.stringify(user));
  }
  removeTask = () => {};
  update = () => {
    this.active = [];
    this.done = [];
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isActive) {
        this.active.unshift(taskList[i]);
        // converting activelist to element
        this.activeString += taskList[i].toElement();
      } else {
        this.done.unshift(taskList[i]);
        this.doneString += taskList[i].toElement();
      }
    }
    this.saveTaskList();
  };
}

let tasks = new Tasks(taskList);

// when clicked on addTask toggle the btn
addTaskBtn.addEventListener("click", () => {
  let img = addTaskBtn.children[0];
  if (img.src.lastIndexOf("add.svg") != -1) {
    img.src = "img/tick.svg";
    img.style.width = "45px";
    addTaskForm.style.display = "block";
  } else {
    if (addTitle.value.length == 0 || addDescription.value.length == 0) return;
    
    if (addTaskBtn.children[0].src.lastIndexOf("tick.svg") != -1) {
      if(addTitle.value.length == 0 || addDescription.value.length ==0)
        return;
  
      // now add this task as new active task
      tasks.addTask(new Task(addTitle.value,addDescription.value,true));
      console.log("work");
      // update all data
      tasks.update();
    }

    img.style.width = "25px";
    img.src = "img/add.svg";
    addTaskForm.style.display = "none";
  }
});

