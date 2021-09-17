const modal = document.getElementById('modal_update');
const close = document.getElementById('cross');
const no = document.getElementById('no');
const task_box = document.getElementById('tasks-box');
const add = document.getElementById('add');
var n_task = document.getElementById('text');
var date = document.getElementById('date');
var reminder = document.getElementById('check');
var invalid = document.getElementById('invalid');
var invalide = document.getElementById('invalide');

const add_up = document.getElementById('add_up');
var n_task_up = document.getElementById('text_up');
var date_up = document.getElementById('date_up');
var reminder_up = document.getElementById('check_up');

close.addEventListener("click", function(){
    modal.style.display = "none";
});


window.addEventListener("click",function (evt) {
    if(evt.target == modal)
    {
      modal.style.display = "none";
    }
});

add.addEventListener("click",()=>{
    no.style.display = "none";    
    if(n_task.value!="" && date.value !=""){
        invalid.innerHTML = "";
        var toggled = reminder.checked; 
        
        var div = document.createElement('div');
        var para1 = document.createElement('p');
        var para2 = document.createElement('p');
        var but_up = document.createElement('button');
        var but_del = document.createElement('button');

        div.className = "task";
        para1.className = "name";
        para1.innerHTML = n_task.value;
        para2.innerHTML = date.value;
        but_up.id = "update";
        but_up.innerHTML = "Update";
        but_del.id = "delete";
        but_del.innerHTML = "&Cross;";

        n_task.value = "";
        date.value = "";

        div.appendChild(para1);
        div.appendChild(para2);
        div.appendChild(but_up);
        div.appendChild(but_del);
        
        but_del.addEventListener("click",()=>{
             div.style.display = "none";
        });

        but_up.addEventListener("click",function () {
            modal.style.display = "flex";
        
            add_up.addEventListener("click",()=>{

                if(n_task_up.value!="" && date_up.value !=""){
                    invalide.innerHTML = "";
                    var toggled_up = reminder_up.checked; 
                    para1.innerHTML = n_task_up.value;
                    para2.innerHTML = date_up.value;

                    n_task_up.value = "";
                    date_up.value = "";

                    if (toggled_up == true) {
                        div.style.borderLeft = "10px solid rgb(20, 101, 250)";
                    }
                    else{
                        div.style.borderLeft = "none";
                    }
                    modal.style.display = "none";
                }
                else{
                    invalide.innerHTML = "Invalid syntax!!!";
                 }
            
            });
       });

        if (toggled == true) {
            div.style.borderLeft = "10px solid rgb(20, 101, 250)";
        }
        task_box.appendChild(div);
    }
    else{
       invalid.innerHTML = "Invalid syntax!!!";
    }
});



