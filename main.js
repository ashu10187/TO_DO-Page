const input = document.querySelector('#input-box');
const list = document.querySelector('.list-container');
const button = document.querySelector('.button');
const mainList = document.querySelector('li');




function addTask(){
    if(input.value===''){
        alert('add your task')
    }
    else{
        let newLI = document.createElement('li');
        newLI.textContent=input.value;
        console.log(newLI)
        list.appendChild(newLI);

        let span = document.createElement('span');
        span.textContent='\u00d7';
        newLI.appendChild(span);
    }
    input.value='';
    saveData();
}

list.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked');
        saveData();
    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("tasks",list.innerHTML);
}

function showData(){
    list.innerHTML=localStorage.getItem('tasks')
}

showData();








