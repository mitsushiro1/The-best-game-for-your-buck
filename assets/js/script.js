//search bar elements
const searchBoxEl = document.querySelector("#default-search");
const searchButtonEl = document.querySelector("#searchBtn");
//checkbox elements
const xboxEl = document.querySelector("#checkbox-item-1");
const playstationEl = document.querySelector("#checkbox-item-2");
const pcEl = document.querySelector("#checkbox-item-3");
const nintendoEl = document.querySelector("#checkbox-item-4");
const fiveStarEl = document.querySelector("#Rating-1");
const fourStarEl = document.querySelector("#Rating-2");
const threeStarEl = document.querySelector("#Rating-3");
const twoStarEl = document.querySelector("#Rating-4");
const oneStarEl = document.querySelector("#Rating-5");
const forKidsEl = document.querySelector("#AgeRating-1");
const pgEl = document.querySelector("#AgeRating-2");
const pg13El = document.querySelector("#AgeRating-3");
const teenEl = document.querySelector("#AgeRating-4");
const matureEl = document.querySelector("#AgeRating-5");
const adultEl = document.querySelector("#AgeRating-6");
const actionEl = document.querySelector("#Genre-1");
const rpgEl = document.querySelector("#Genre-2");
const firstPersonEl = document.querySelector("#Genre-3");
const indyEl = document.querySelector("#Genre-4");
const simulationEl = document.querySelector("#Genre-5");
const sportsEl = document.querySelector("#Genre-6");
const topDownEl = document.querySelector("#Genre-7");
const sideScrollEl = document.querySelector("#Genre-8");
const mmoEl = document.querySelector("#Genre-9");
const mobaEl = document.querySelector("#Genre-10");
const multiEl = document.querySelector("#Genre-11");
const singleEl = document.querySelector("#Genre-12");
const dropSubmitEl = document.querySelector("#dropBtn");


let searchTerm = '';

  //event listener to record searchBox input
searchButtonEl.addEventListener("click", function (event) {
  //prevent default
  event.preventDefault();
  searchTerm = searchBoxEl.value;
  console.log(searchTerm);
  callApi(searchTerm);
})


//call search bar api function
function callApi (keyword) {
  //reset function
  reset();
  console.log(keyword);
  const apiKey = '72423c9bbb7e4173a94ff33fa6307579';
  fetch(`https://rawg.io/api/games?search=${keyword}&exclude_additions=true&search_exact=true&token&key=${apiKey}`) 

  .then(res => res.json())
  //assign data results to object array

  .then (data => {
   //loop through 10 results assigned to variables
    for (let i = 0; i < 10; i++) {
      const gameName = data.results[i].name;
      console.log(gameName);
      const gameImage = data.results[i].background_image;
      console.log(gameImage);
      const gameRating = data.results[i].rating;
      console.log(gameRating);
      //generate card elements in html resultsBoxes from gameName, gameImage, gameRating
      const resultsBoxes = document.querySelector("#resultsBoxes");
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      cardEl.classList.add("col-3");
      cardEl.classList.add("m-2");
      cardEl.classList.add("p-2");
      cardEl.classList.add("bg-dark");
      cardEl.classList.add("text-white");
      cardEl.classList.add("rounded");
      cardEl.classList.add("border");
      cardEl.classList.add("border-warning");
      cardEl.classList.add("shadow");
      cardEl.classList.add("text-center");
      cardEl.innerHTML = 'Name: ' + gameName + 
      ' Game Rating: ' + gameRating;
      let cardElImg = document.createElement('img');
      cardElImg.src = gameImage;
      cardEl.appendChild(cardElImg);

      // //could comment this block of code out for now as it might throw error due to undefined variables
      // let linkEl = document.createElement('a');
      // //set the class for linkEl here
      // linkEl.classList = '';
      // linkEl.setAttribute('href', '../nextpage.html?q=' + searchTerm);
      // linkEl.appendChild(cardEl);
      
      //add image to card
      resultsBoxes.appendChild(cardEl);  
    }   
  })
  .catch(error => console.error('Error:', error));
}

//reset function
function reset () {
  const resultsBoxes = document.querySelector("#resultsBoxes");
  resultsBoxes.innerHTML = '';
}


//add event listener to dropSubmitBtn IN WORKS
/*dropSubmitEl.addEventListener("click", function (event) {
  //prevent default
  event.preventDefault();
  //check if checked boxes are checked
  platformCheck();
  function platformCheck () {
    if (xboxEl.checked) {
      console.log("xbox checked");
      platform = "xbox";
    } else if (playstationEl.checked) {
      console.log("playstation checked");
      platform = "playstation";
    } else if (pcEl.checked) {
      console.log("pc checked");
      platform = "pc";
    } else if (nintendoEl.checked) {
      console.log("nintendo checked");
      platform = "nintendo";
    } else {
      console.log("no platform selected");
      platform = "";
  }}
  ratingCheck();
  function ratingCheck () {
    if (fiveStarEl.checked) {
      console.log("5 star checked");
      rating = "5";
    } else if (fourStarEl.checked) {
      console.log("4 star checked");
      rating = "4";
    } else if (threeStarEl.checked) {
      console.log("3 star checked");
      rating = "3";
    } else if (twoStarEl.checked) {
      console.log("2 star checked");
      rating = "2";
    } else if (oneStarEl.checked) {
      console.log("1 star checked");
      rating = "1";
    } else {
      console.log("no rating selected");
      rating = "";
    }}
  ageRatingCheck();
  function ageRatingCheck () {
    if (forKidsEl.checked) {
      console.log("for kids checked");
      ageRating = "forkids";
    } else if (pgEl.checked) {
      console.log("pg checked");
      ageRating = "pg";
    } else if (pg13El.checked) {
      console.log("pg13 checked");
      ageRating = "pg13";
    } else if (teenEl.checked) {
      console.log("teen checked");
      ageRating = "teen";
    } else if (matureEl.checked) {
      console.log("mature checked");
      ageRating = "mature";
    } else if (adultEl.checked) {
      console.log("adult checked");
      ageRating = "adult";
    } else {
      console.log("no age rating selected");
      ageRating = "";
    }}
  genreCheck();
  function genreCheck () {
    if (actionEl.checked) {
      console.log("action checked");
      genre = "action";
    } else if (rpgEl.checked) {
      console.log("rpg checked");
      genre = "rpg";
    } else if (firstPersonEl.checked) {
      console.log("first person checked");
      genre = "firstperson";
    } else if (indyEl.checked) {
      console.log("indy checked");
      genre = "indy";
    } else if (simulationEl.checked) {
      console.log("simulation checked");
      genre = "simulation";
    } else if (sportsEl.checked) {
      console.log("sports checked");
      genre = "sports";
    } else if (topDownEl.checked) {
      console.log("top down checked");
      genre = "topdown";
    } else if (sideScrollEl.checked) {
      console.log("side scroll checked");
      genre = "sidescroll";
    } else if (mmoEl.checked) {
      console.log("mmo checked");
      genre = "mmo";
    } else if (mobaEl.checked) {
      console.log("moba checked");
      genre = "moba";
    } else if (multiEl.checked) {
      console.log("multi checked");
      genre = "multi";
    } else if (singleEl.checked) {
      console.log("single checked");
      genre = "single";
    } else {
      console.log("no age rating selected");
      ageRating = "";
    }}
  //call api function
callApi2(platform, rating, ageRating, genre);
})

//call drop down api function
/*function callApi2 (keyword1, keyword2, keyword3, keyword4) {
    //reset function
    reset();
    console.clear();
    console.log(platform);
    console.log(rating);
    console.log(ageRating);
    console.log(genre);
    const apiKey = '72423c9bbb7e4173a94ff33fa6307579';
    const url = `https://rawg.io/api/games?genre=${keyword4}&tags=${keyword2}&tags=${keyword3}&platforms=6&token&key=${apiKey}`;
    console.log(url);
    fetch(url) 
    
  //
    .then(res => res.json())
    
    .then (data => {
     //loop through 10 results assigned to variables
      for (let i = 0; i < 10; i++) {
        const gameName = data.results[i].name;
        console.log(gameName);
        const gameImage = data.results[i].background_image;
        console.log(gameImage);
        const gameRating = data.results[i].rating;
        console.log(gameRating);
        //generate card elements in html resultsBoxes from gameName, gameImage, gameRating
        const resultsBoxes = document.querySelector("#resultsBoxes");
        const cardEl = document.createElement("div");
        cardEl.classList.add("card");
        cardEl.classList.add("col-3");
        cardEl.classList.add("m-2");
        cardEl.classList.add("p-2");
        cardEl.classList.add("bg-dark");
        cardEl.classList.add("text-white");
        cardEl.classList.add("rounded");
        cardEl.classList.add("border");
        cardEl.classList.add("border-warning");
        cardEl.classList.add("shadow");
        cardEl.classList.add("text-center");
        cardEl.innerHTML = 'Name: ' + gameName + 
        ' Game Rating: ' + gameRating;
        let cardElImg = document.createElement('img');
        cardElImg.src = gameImage;
        cardEl.appendChild(cardElImg);
  
        // //could comment this block of code out for now as it might throw error due to undefined variables
        // let linkEl = document.createElement('a');
        // //set the class for linkEl here
        // linkEl.classList = '';
        // linkEl.setAttribute('href', '../nextpage.html?q=' + searchTerm + '=' + platform);
        // linkEl.appendChild(carEl);
        
        //add image to card
        resultsBoxes.appendChild(cardEl);  
      }   
    })
    .catch(error => console.error('Error:', error));
  }

  //function to assign platform variable to checked box value
 
  //function to assign rating variable to checked box value


  //function to assign age rating variable to checked box value


  //function to assign genre variable to checked box value




// variable will be the selected game title
//curl --location --request GET 'https://www.cheapshark.com/api/1.0/games?title={variable}';*/
