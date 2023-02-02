let searchBoxEl = document.querySelector()
let title;
let platform;

// haven't tweaked this function
function renderHistory(){
  
  historyList.innerHTML = "";
  for (let i = 0; i < his.length; i++) {
    let li = document.createElement("button");
    li.textContent = his[i];
    historyList.append(li);
  }
}

// haven't tweaked this function
function storeHistory() {
  let input = searchInput.value.trim();
  let value = [input];

  his.push(value);
  localStorage.setItem("searchHistory",JSON.stringify(his));
  renderHistory();

}

function getDealsUrl(title) {
 
  // This is coming from the URL search bar in the browser. It is what comes after the `?`.
  let queryString = document.location.search;
  console.log(queryString);
  let parameters = queryString.split('=');
  title = parameters[1];
  platform = parameters[2];


  if (title) {
    // ShowSearchResultEl.textContent = title;
    //api call url
    let cheapShark = `https://www.cheapshark.com/api/1.0/deals?exact=${title}&platform=${platform}&sortBy=${Price}&desc=false`;
    apiDeals(cheapShark);
  } else {
    // This will run and return to the homepage if there was nothing in the URL query parameter.
    document.location.replace('./Develop/index.html');
  }
}

function apiDeals(url) {
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      } else {
        return response.json();
      }
    })

    .then(function (locRes) {
      // may need to change the resultContentEl to something else 
      if (!Object.keys(locRes).length) {
        console.log('No results found!');
        resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
      } else {
        resultContentEl.textContent = '';
        printDeals(locRes);
      }
    })
    .catch(function (error) {
      console.error(error);
    });

}

function printDeals(deals) {

  for (let i = 0; i < deals.length; i++) {

    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    var pEl = document.createElement('p');
    pEl.textContent = title + "Store Name: " + deals.store + "Price: "deals.price;

    let buttonEl = document.createElement('button');
    // redirects the user to the website when the button is clicked 
    buttonEl.innerHTML = <a href="">Take me to it!</a>;

    let link = document.createElement

    resultBody.append(pEl);
    resultContentEl.append(resultCard);

  }
}





function init() {
  renderHistory();
}

init();


//use this to grab info from the past search
//var pastSrch = document.getElementById("pastResults");
// var searchbar = document.getElementById("default-search")
// 
// function addButton() {
//   var btn = document.createElement("button");
//     btn.innerHTML = searchbar.value + "<br>";
//     btn.classList.add("btn", "btn-primary", "btn-lg");
//      pastSrch.appendChild(btn);
    




//optional event.listener for the search again button, could just do the following in html
{/* <div>
<a href="./index.html" class="btn-back">
  Go Back
</a>
</div> */}