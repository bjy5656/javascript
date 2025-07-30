const addList = document.querySelector("main > button");
const buttons = document.querySelectorAll("main li button");
const checkBox = document.querySelectorAll("main li input");
const taskList = document.getElementById("task-list");
const firstP = document.querySelector("main p");

addList.addEventListener('click', () => {
  // const form = document.createElement("form");
  // const list = document.createElement("li");
  // const input = document.createElement("input");
  // input.setAttribute("checkbox");
  // const p = document.createElement("p");
  // const button = document.createElement("button");
  // button.innerText = "삭제";
  // list.appendChild(input);
  // list.appentChild(p);
  // list.appendChild(button);
  // ul.appendChild(list);
  firstP.innerText = prompt("추가할 할일을 입력하세요:");
  const list = document.querySelector("main li").cloneNode(true);
  taskList.appendChild(list);
  
});

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let answer = confirm("할일을 삭제하시겠습니까?");
  if(answer){
    const lastList = document.querySelector("main li:last-child")
    taskList.removeChild(lastList);
  }
  });
});

checkBox.addEventListener("click", (e) => {
  if(e.target.checked){

  }
});