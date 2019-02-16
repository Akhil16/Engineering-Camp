let count = 0;
let callerBtn = document.getElementById("fetchBtn");
let resetBtn = document.getElementById("resetBtn");


function fetchCountriesDatafromlink() {
  let newRequest = new XMLHttpRequest();
  newRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
  newRequest.onload = function () {
    let dataFetched = JSON.parse(newRequest.responseText)
    console.log(dataFetched.length)
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

let containDiv = document.getElementById("fetchedCountry");

function addToHtml(dataPassed) {
  let newCard = `
        <div class="card col-5  mb-5"   >
            <div class="p-3">
                Country Name: <span id="CountryName`+ count + `">
                    </span>
                <hr class="hr">
            </div>
            <div class="p-3">
                Capital :<span id="capital`+ count + `">
                    </span>
                <hr class="hr">
            </div>
            <div class="p-3">
                Region: <span id="region`+ count + `">
                    </span>
                <hr class="hr">
            </div>
            <div class="p-3">
                Population <input type="text" name="population" id="population`+count+`" disabled="true">
            </div>
            <div class="p-3">
                currencies :
                <span>

                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample`+ count + `"
                        aria-expanded="false" aria-controls="collapseExample">
                        Show Acceepted Currencies
                    </button>
                </span>
                <div class="collapse" id="collapseExample`+ count + `">
                    <div class="card card-body"  id="currency`+ count + `">
                        asdasd
                    </div>
                    <div class="card card-body">
                        asd
                    </div>
                    <div class="card card-body">
                        a
                    </div>
                </div>
            </div>
        </div>
        <div class="col-5">
            <div class="card">
                <h2>Flag</h2>
                <div class="p-3">
                  <img id="flag`+count+`" src="" alt="" width=90%>
                </div>
            </div>
        </div>
        <div class="col-1">
            <div class="row mb-5 ">
                <button id="editBtn`+ count + `" class="editBtn btn btn-secondary " onclick="editPopulation(population`+count +`)">
                        <i class="fab fa-edit"> </i>
                </button>
            </div>
            <div class="row mb-5">
                <button id="deleteBtn`+count+ `" class="deleteBtn btn btn-danger " onclick="deleteRow("col`+count+`")" >
                    <i class="fab fa-trash"> </i>
                </button>
            </div>
        </div>
    </div>`
  console.log(dataPassed)
  containDiv.insertAdjacentHTML("afterbegin", newCard);
  document.getElementById("CountryName" + count).innerHTML = dataPassed.name;
  document.getElementById("capital" + count).innerHTML = dataPassed.capital;
  document.getElementById("region" + count).innerHTML = dataPassed.region;
  document.getElementById("population" + count).value = dataPassed.population;
  // flagImg.setAttribute("alt",dataPassed.flag);
  document.getElementById("flag" + count).setAttribute("src", dataPassed.flag);
  document.getElementById("flag" + count).setAttribute("alt", dataPassed.flag);

  let currencyCount =dataPassed.currencies.length
  console.log(currencyCount)
  for(let x=0;x,currencyCount;x++){
    // let currencyDiv =`<div class="card card-body">`+dataPassed.currencies[x].symbol+`</div>`;
    console.log(dataPassed.demonym  )
    // document.getElementById("currency"+count).insertAdjacentElement("afterbegin", currencyDiv)
  }

}

function resetPage() {
  count = 0;
  containDiv.innerHTML = ""
}


let i=0;
function editPopulation(populationId){
  console.log("id"+populationId)
  var populationField  = populationId.value;
  console.log("fi"+populationField)
  if(i==1){
    populationId.setAttribute("disabled","true");
    // console.log(populationField.value)
    i=0;
  }else{
    populationId.disabled = false;
    console.log(populationField)
    i=1;
    
  }
  // let newPop = document.populationField.value
}

function deleteData(eid){
  console.log(eid)
  var element=document.getElementById("task-list");
  element.removeChild(eid);
}