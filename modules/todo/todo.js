let user = JSON.parse(localStorage.getItem("user"));

let taskList = user.taskList;

class Task {
  constructor(title, description, isActive, date, fullname) {
    this.title = title;
    this.description = description;
    this.isActive = isActive;
    this.avatarLetter = fullname[0];
    this.date = date;
  }
  toElement = () => {
    return `<li>
        <div class="taskCard">
          <div class="avatarOnCard">
            <div id="taskAvatar" class="avatar" >
              ${this.avatarLetter}
            </div>
            <div class="taskCardDone">
              <button id="taskCardBtn">
                <img class="tick" src="img/tick.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="taskTitle">
            <p id="task">${this.title}</p>
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
  constructor(taskList){
    this.taskList = taskList;
    this.update();
  }
  active = [];
  done = [];
  activeStr = "";
  doneStr = "";
  addTask = (task) => {
    taskList.unshift(task);
    this.update();
  };
  removeTask=()=>{
  }
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
  };
}


