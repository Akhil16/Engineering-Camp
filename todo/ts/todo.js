// "use strict";
// exports.__esModule = true;
var count = 1;
function addToList() {
    var name = document.forms["task-data"]["task-name"].value;
    if (name == "") {
        alert("Task cannot be Empty!");
    }
    else {
        //generating HTML Elements
        var list = document.getElementById("task-list");
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        var h5 = document.createElement("h5");
        var taskname = name + count;
        var i1 = document.createElement("i");
        var i2 = document.createElement("i");
        var div2 = document.createElement("div");
        var data = document.createTextNode(name);
        //Setting Attributes
        li.setAttribute("id", "'" + count + "'");
        li.setAttribute("class", "list-group-item list-group-item-action");
        div1.setAttribute("class", "d-flex w-100 justify-content-between");
        h5.setAttribute("class", "mb-1");
        h5.setAttribute("id", taskname);
        i1.setAttribute("class", "fas fa-edit mar-10");
        i1.setAttribute("onclick", "editData(" + taskname + ")");
        i2.setAttribute("class", "fas fa-trash mar-10");
        i2.setAttribute("onclick", "deleteData(" + count + ")");
        //appending elements
        list.appendChild(li);
        li.appendChild(div1);
        div1.appendChild(h5);
        h5.appendChild(data);
        div1.appendChild(div2);
        div2.appendChild(i1);
        div2.appendChild(i2);
        count++;
    }
}
function editData(nameid) {
    console.log(nameid);
    var elem = document.getElementById(nameid);
    var newName = prompt("Please enter new Task name:", "enter new name");
    console.log(newName);
    if (newName == null || newName == "") {
        alert("task name cannot be empty ! ");
    }
    else {
        document.getElementById(nameid).innerHTML = newName;
    }
}
function deleteData(eid) {
    console.log(eid);
    var element = document.getElementById("task-list");
    element.removeChild(document.getElementById(eid));
}
