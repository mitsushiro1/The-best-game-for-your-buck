let searchBoxEl = document.querySelector()
let title;

function getDealsUrl(title){
    //api call url
    let cheapShark = `https://www.cheapshark.com/api/1.0/deals?exact=${title}&sortBy=${Price}&desc=false`;
    apiDeals(cheapShark);
}

function apiDeals(url){
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

function printDeals(deals){

    for(let i=0; i<deals.length; i++){

        var resultCard = document.createElement('div');
        resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
      
        var resultBody = document.createElement('div');
        resultBody.classList.add('card-body');
        resultCard.append(resultBody);
      
        var pEl = document.createElement('p');
        pEl.textContent = title + "Store Name: " + deals.store +"Price: "deals.price;

        let buttonEl = document.createElement('button');
        // redirects the user to the website when the button is clicked 
        buttonEl.innerHTML = <a href = "">Take me to it!</a>;

        let link = document.createElement
        
        resultBody.append(pEl);
        resultContentEl.append(resultCard);

    }
}


function redirectUser(){
    

}

function init(){

}

init();