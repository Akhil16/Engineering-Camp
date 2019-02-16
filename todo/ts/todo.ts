
let count :number =1;
function addToList():void {
    let name :string= document.forms["task-data"]["task-name"].value;
    if (name == "" ) {
        alert("Task cannot be Empty!")
    }
    else {
        //generating HTML Elements
        let list :HTMLElement = document.getElementById("task-list");
        let li :HTMLElement = document.createElement("li");
        let div1 :HTMLElement= document.createElement("div");
        let h5 :HTMLElement =document.createElement("h5");
        let taskname :string = name+count;
        let i1 :HTMLElement=document.createElement("i");
        let i2 :HTMLElement=document.createElement("i");
        let div2 :HTMLElement= document.createElement("div");
        let data :Text= document.createTextNode(name);
       
       //Setting Attributes
        li.setAttribute("id","'"+count+"'")
        li.setAttribute("class","list-group-item list-group-item-action");
        div1.setAttribute("class","d-flex w-100 justify-content-between")
        h5.setAttribute("class","mb-1");
        h5.setAttribute("id",taskname);
        i1.setAttribute("class","fas fa-edit mar-10");
        i1.setAttribute("onclick","editData("+taskname+")");
        i2.setAttribute("class","fas fa-trash mar-10")
        i2.setAttribute("onclick","deleteData("+count+")");
        
        
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

function editData(nameid : string):void{
    console.log(nameid);
    let elem :HTMLElement = document.getElementById(nameid);
    let newName :string = prompt("Please enter new Task name:", "enter new name");
    console.log(newName)
    if(newName==null|| newName==""){
        alert("task name cannot be empty ! ");
    }else{
        document.getElementById(nameid).innerHTML=newName;
    }    
}

function deleteData(eid : string):void{
    console.log(eid)
    let element :HTMLElement =document.getElementById("task-list");
    element.removeChild(document.getElementById(eid));
}