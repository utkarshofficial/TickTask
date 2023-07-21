// for removing wish
setTimeout(()=>{
    wish.style.display="none";
},2000);

// when clicked on addTask
addTaskBtn.addEventListener('click',()=>{
    let img = addTaskBtn.children[0];
    if(img.src.lastIndexOf("add.svg")!=-1){
        img.src = "img/tick.svg";
        img.style.width = "45px";
        addTaskForm.style.display = "block";
    }else{
        img.style.width = "25px";
        img.src = "img/add.svg";
        addTaskForm.style.display = "none";
    }
});

cancelTask.onclick = ()=>{
    addTaskBtn.children[0].style.width = "25px";
    addTaskBtn.children[0].src = "img/add.svg";
    addTaskForm.style.display = "none";
}