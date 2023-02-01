const searchBoxEl = document.querySelector(".form-control");
const searchButtonEl = document.querySelector(".btn");
let keyword = ("");

  //event listener to record searchBox input
searchButtonEl.addEventListener("click", function (event) {
  keyword = searchBoxEl.value;
  console.log(keyword);
  callApi();
})

//call search bar api function
function callApi (keyword) {
  const apiKey = '72423c9bbb7e4173a94ff33fa6307579';
fetch(`https://rawg.io/api/games?token&key=${apiKey}&search_exact=${keyword}&name=${keyword}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}
  /*function searchBarApi () {
    const getIgdbGames = async url => {
      const API_URL = `https://api.igdb.com/v4/keywords${keyword}`;
      let response = await fetch(
          API_URL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Client-ID': 'mj3wq23qcodxsya5u882j4ac433ebn',
              'Authorization': 'Bearer krpzfaqd8euiddwbx22gmkbasgwywn',
          },
          
         body: "fields name;"
         //data: "fields id,artworks,bundles,category,checksum,collection,cover.*,created_at,first_release_date,follows,game_engines.*,game_modes.*,genres.*,hypes,keywords.*,multiplayer_modes,name,parent_game, platforms.*, platforms.platform_logo.*,player_perspectives.*,popularity,rating,rating_count,screenshots.*, slug,standalone_expansions,status,storyline,summary,tags,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*;sort popularity desc;"
      });
      response = response.json();
      return response;
  }; 
} 
})

//call search bar Api function

/*function searchBarApi () {
axios({
  url: "https://api.igdb.com/v4/keywords",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Client-ID': 'mj3wq23qcodxsya5u882j4ac433ebn',
      'Authorization': 'Bearer krpzfaqd8euiddwbx22gmkbasgwywn',
  },
  data: "fields checksum,created_at,name,slug,updated_at,url;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });
}

//POST: https//api.igdb.com/v4/games
//Client-ID: mj3wq23qcodxsya5u882j4ac433ebn
//Authorization: Bearer krpzfaqd8euiddwbx22gmkbasgwywn
//Body: *fields*
 Reference call, replace Client ID and access_token. Keep 'Bearer" capital
axios({
  url: "https://api.igdb.com/v4/franchises",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Client-ID: Client ID',
      'Authorization: Bearer access_token',
  },
  data: "fields checksum,created_at,games,name,slug,updated_at,url;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });
// variable will be the selected game title
//curl --location --request GET 'https://www.cheapshark.com/api/1.0/games?title={variable}'*/



//POST: https//api.igdb.com/v4/games
//Client-ID: mj3wq23qcodxsya5u882j4ac433ebn
//Authorization: Bearer krpzfaqd8euiddwbx22gmkbasgwywn
//Body: *fields*
/* Reference call, replace Client ID and access_token. Keep 'Bearer" capital
axios({
  url: "https://api.igdb.com/v4/franchises",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Client-ID: Client ID',
      'Authorization: Bearer access_token',
  },
  data: "fields checksum,created_at,games,name,slug,updated_at,url;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });
// variable will be the selected game title
  //curl --location --request GET 'https://www.cheapshark.com/api/1.0/games?title={variable}'*/