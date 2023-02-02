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
  //curl --location --request GET 'https://www.cheapshark.com/api/1.0/games?title={variable}'