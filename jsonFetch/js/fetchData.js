let count = 0;
let callerBtn = document.getElementById("fetchBtn");
let resetBtn = document.getElementById("resetBtn")
function fetchDatafromlink() {
  let newRequest = new XMLHttpRequest();
  newRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts')
  newRequest.onload = function () {
    let dataFetched = JSON.parse(newRequest.responseText)
    console.log(count)
    if (count < dataFetched.length) {
      addToHtml(dataFetched[count])
    } else {
      callerBtn.setAttribute("onclick", "alert('No more data to fetch!')");
    }
    count++;
  };
  newRequest.send();
}

let containDiv = document.getElementById("fetched");

function addToHtml(dataFetched) {
  let newCard = "<div class=\"card col-6 mb-5\"><div class=\"p-3\"> User id : <br> <span id=\"printUserId"+count+"\"></span><hr class=\"hr\"></div><div class=\"p-3\">id : <br><span id=\"printId"+count+"\"></span><hr class=\"hr\"></div><div class=\"p-3\">TITLE : <br><span id=\"printTitle"+count+"\"></span><hr class=\"hr\"></div><div class=\"p-3\">BODY : <br><span id=\"printBody"+count+"\"></span></div> </div> ";
  containDiv.insertAdjacentHTML("afterbegin", newCard)
  document.getElementById("printUserId"+count).innerHTML = dataFetched.userId;;
  document.getElementById("printId"+count).innerHTML = dataFetched.id;
  document.getElementById("printTitle"+count).innerHTML = dataFetched.title;;
  document.getElementById("printBody"+count).innerHTML = dataFetched.body;;
  console.log(dataFetched)
}

function resetPage(){
  count=0;
  containDiv.innerHTML=""
}