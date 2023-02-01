const searchBoxEl = document.querySelector("#default-search");
const searchButtonEl = document.querySelector("#searchBtn");
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

  fetch(`https://rawg.io/api/games?search=${keyword}&search_exact=true${keyword}&token&key=${apiKey}`) 

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
  

// variable will be the selected game title
//curl --location --request GET 'https://www.cheapshark.com/api/1.0/games?title={variable}'*/
