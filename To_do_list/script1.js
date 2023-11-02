const inputBox = document.getElementById("input_id");
const listContainer = document.getElementById("listcont");
function addTask(){
    if(input_id.value === ''){
        alert("Please! Write your task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_id.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_id.value="";
    savaData();
}

listContainer.addEventListener("click", function(e)
{ 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        savaData();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      savaData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listcont.innerHTML);
    }
    function showTask(){
    listcont.innerHTML = localStorage.getItem("data");
    }
    showTask();