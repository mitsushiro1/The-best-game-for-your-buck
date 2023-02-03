let resultContentEl = document.querySelector('#resultContent');
let pastSrch = document.getElementById("pastResults");
let TitleEl = document.querySelector("#GameTitle");
let title;
let logoUrl;
let storeName = [];
let response;
let imgUrl;
let pastSearches = [];

//use this to grab info from the past search
//var pastSrch = document.getElementById("pastResults");
// var searchbar = document.getElementById("default-search")
// 
// function addButton() {
//   var btn = document.createElement("button");
//     btn.innerHTML = searchbar.value + "<br>";
//     btn.classList.add("btn", "btn-primary", "btn-lg");
//      pastSrch.appendChild(btn);


// haven't tweaked this function
function renderHistory() {
  // pastSrch.innerHTML = "";

  let ul = document.createElement("ul");
  pastSrch.append(ul);
  console.log(pastSearches);
  for (let i = 0; i < pastSearches.length; i++) {

    let itemName = document.createElement("li");
    itemName.textContent = pastSearches[i].gameTitle;
    let itemImg = document.createElement("img");
    itemImg.setAttribute("src", pastSearches[i].img);

    itemName.append(itemImg);
    ul.append(itemName);

  }
}

// haven't tweaked this function
function storeHistory() {
  if (title)

    if (pastSearches.filter(e => e.gameTitle === title).length > 0) {
      return;
    } else {
      //store the game title, and image 
      console.log(response[0].thumb);
      pastSearches.push({gameTitle: title, img: response[0].thumb });
      console.log(pastSearches);
      localStorage.setItem("searchHistory", JSON.stringify(pastSearches));

    }
}

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
        response = locRes;
        console.log(locRes);
        for (let i = 0; i < response.length; i++) {
          apiStore(i, response[i].storeID);
          title = response[i].internalName;
        }
        storeHistory();
      }
    })
    // .then(function(){
    //   console.log(response);
    //     // printDeals(response);

    // })
    .catch(function (error) {
      console.error(error);
    });

}

function apiStore(i, storeID) {

  fetch("https://www.cheapshark.com/api/1.0/stores")
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      } else {
        return response.json();
      }
    })

    .then(function (locRes) {

      if (!Object.keys(locRes).length) {
        // console.log('No results found!');
        // resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
      } else {
        console.log(locRes);
        // // resultContentEl.textContent = '';

        let storeIndex = storeID - 1;
        console.log(storeIndex);
        Name = locRes[storeIndex].storeName;
        console.log(Name);
        storeName.push(Name);
        console.log(storeName);


        logoUrl = "https://www.cheapshark.com" + locRes[storeIndex].images.logo;
      }
    })
    .then(function () {
      console.log(title);
      console.log(TitleEl);

      camelize = function camelize(str) {
        return str.replace(/\W+(.)/g, function (match, chr) {
          return chr.toUpperCase();
        });
      }

      TitleEl.textContent = camelize(title);

      console.log(response);
      console.log(typeof response);


      let resultCard = document.createElement('div');
      // resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
      
      let resultBody = document.createElement('div');
      // resultBody.classList.add('card-body');
      resultCard.append(resultBody);


      let imageEl = document.createElement('img');
      imageEl.setAttribute("src", logoUrl);
      resultBody.append(imageEl);
      console.log(storeName);
      console.log(response);

      let pEl = document.createElement('p');
      pEl.textContent = "Store Name: " + storeName[i] + " Price: " + response[i].salePrice;
      resultBody.append(pEl);

      let link = document.createElement('a');

      imgUrl = "https://www.cheapshark.com/redirect?dealID=" + response[i].dealID;
      console.log(imgUrl);
      // redirects the user to the website when the button is clicked 
      link.setAttribute("href", imgUrl);
      link.textContent = "Take me to it!";

      resultBody.append(link);
      resultContentEl.append(resultCard);


    })
    .catch(function (error) {
      console.error(error);
    });


}








function init() {
  let storedHistory = JSON.parse(localStorage.getItem("searchHistory"));

  if (storedHistory !== null) {
    pastSearches = storedHistory;
  }

  renderHistory();
}

init();
getDealsUrl();
