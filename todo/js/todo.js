
var count =1;
function addToList() {
    var name = document.forms["task-data"]["task-name"].value;
    if (name == "" ) {
        alert("Task cannot be Empty!")
    }
    else {
        var list = document.getElementById("task-list");
        var li = document.createElement("li");
        li.setAttribute("id",count)
        li.setAttribute("class","list-group-item list-group-item-action");
        var div1= document.createElement("div");
        div1.setAttribute("class","d-flex w-100 justify-content-between")
        var h5 =document.createElement("h5");
        h5.setAttribute("class","mb-1");
        var taskname= name+count;
        h5.setAttribute("id",taskname);
        var i1=document.createElement("i");
        i1.setAttribute("class","fas fa-edit mar-10");
        i1.setAttribute("onclick","editData("+"'"+taskname+"'"+")");
        //console.log(taskname)
        var i2=document.createElement("i");
        i2.setAttribute("class","fas fa-trash mar-10")
        i2.setAttribute("onclick","deleteData("+count+")");
        var div2= document.createElement("div");
        list.appendChild(li);
        li.appendChild(div1);
        div1.appendChild(h5);
        var data= document.createTextNode(name);
        h5.appendChild(data);
        div1.appendChild(div2);
        div2.appendChild(i1);
        div2.appendChild(i2);
        
        count++;
        
    }
}

function editData(nameid){
    console.log(nameid);
    var elem  = document.getElementById(nameid);
    var newName = prompt("Please enter new Task name:", "enter new name");
    console.log(newName)
    if(newName==null|| newName==""){
        alert("task name cannot be empty ! ");
    }else{
        document.getElementById(nameid).innerHTML=newName;
    }    
}

function deleteData(eid){
    console.log(eid)
    var element=document.getElementById("task-list");
    element.removeChild(document.getElementById(eid));
}