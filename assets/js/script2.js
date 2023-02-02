let resultContentEl = document.querySelector('#resultContent');
let TitleEl = document.querySelector("#GameTitle");
let title;
let logoUrl;

// // haven't tweaked this function
// function renderHistory(){
  
//   historyList.innerHTML = "";
//   for (let i = 0; i < his.length; i++) {
//     let li = document.createElement("button");
//     li.textContent = his[i];
//     historyList.append(li);
//   }
// }

// // haven't tweaked this function
// function storeHistory() {

//   //store the game title, and image 
//   //if user clicks on the image or title, do an api call for the deals on the game, and display results
//   let input = searchInput.value.trim();
//   let value = [input];

//   his.push(value);
//   localStorage.setItem("searchHistory",JSON.stringify(his));
//   renderHistory();

// }

function getDealsUrl(title) {
 
  // This is coming from the URL search bar in the browser. It is what comes after the `?`.
  let queryString = document.location.search;
  console.log(queryString);
  let parameters = queryString.split('=');
  title = parameters[1];
  console.log(title);

  if (title) {
    // ShowSearchResultEl.textContent = title;
    //api call url
    let cheapShark = `https://www.cheapshark.com/api/1.0/deals?title=${title}&exact=1&sortBy=Price&desc=0`;
    apiDeals(cheapShark);
  } else {
    // This will run and return to the homepage if there was nothing in the URL query parameter.
    // document.location.replace('../../index.html');
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
        // resultContentEl.textContent = '';
        printDeals(locRes);
      }
    })
    .catch(function (error) {
      console.error(error);
    });

}

function printDeals(deals) {
  console.log(title);
  console.log(TitleEl);
  TitleEl.textContent = title;

  console.log(deals);
  console.log(typeof deals);
  for (let i = 0; i < deals.length; i++) {

    let resultCard = document.createElement('div');
    // resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    let resultBody = document.createElement('div');
    // resultBody.classList.add('card-body');
    resultCard.append(resultBody);


    let imageEl = document.createElement('img');
    imageEl.setAttribute("src", logoUrl);
    resultBody.append(imageEl);

    let pEl = document.createElement('p');
    console.log(deals[i].storeID);
    sName = apiStore(deals[i].storeID);
    console.log(sName);
    pEl.textContent = "Store Name: " +  sName + "Price: " + deals[i].salePrice;


    // let buttonEl = document.createElement('button');
    // redirects the user to the website when the button is clicked 
    // buttonEl.innerHTML = <a href="">Take me to it!</a>;

    // let link = document.createElement

    resultBody.append(pEl);
    resultContentEl.append(resultCard);

  }
}

function apiStore(storeID){
  
  fetch("https://www.cheapshark.com/api/1.0/stores")
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
      // console.log('No results found!');
      // resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
    } else {
      console.log(locRes);
      // // resultContentEl.textContent = '';

      let storeIndex = storeID - 1;
      let sName = locRes[storeIndex].storeName;
      console.log(sName);
      // return sName;

      logoUrl = "https://www.cheapshark.com"+ locRes[storeIndex].images.logo;
      
    }
  })
  .catch(function (error) {
    console.error(error);
  });


}





function init() {
  renderHistory();
}

// init();
getDealsUrl();
