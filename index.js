function getRandomBeer() {
  let beerName1;
  var beer = axios.get('https://api.punkapi.com/v2/beers/random')
    .then(response => {
      let beerExample = response.data[0];
      beerName1 = beerExample.name;
      let beerFood = beerExample.food_pairing;
      let beerPic = beerExample.image_url;
      const empty = "";
      const image = '<img id="bottle" src=' + beerPic + '>';
      const random = '<div id="complete"><strong>Try a <em>' + beerName1 + '</em> tonight.</strong></div>';
      var el2 = document.getElementById('pic');
      var el = document.getElementById('results');
      el2.innerHTML = image;
      el.innerHTML = random;
      return beerExample;
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
}

function getFoodChoice() {
  let userChoice = document.getElementById('food')
    .value;
  var list = axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        food: userChoice
      }
    })
    .then(res => {
      let suggestions = res.data.length;
      let ideaNumber = Math.floor(Math.random() * suggestions);
      let beerExample = res.data[ideaNumber].image_url;
      let beerName2 = res.data[ideaNumber].name;
      console.log(beerName2);
      let foodOptions = res.data[ideaNumber].food_pairing;
      for (let i = 0; i < foodOptions.length; i++) {
        if (foodOptions[i].includes(userChoice)) {
          let foodChoice = foodOptions[i];
          console.log(foodChoice);
          const empty = "";
          console.log(beerExample);
          const image = '<img id="bottle" src=' + beerExample + '>';
          let random = '<div id="complete"><strong>How about a <em>' + beerName2 + '</em> with ' + foodChoice + ' tonight?</strong></div>';
          var el = document.getElementById('results');
          var el2 = document.getElementById('pic');
          el2.innerHTML = image;
          el.innerHTML = random;
          return foodChoice;
        }
      }
    })
    .catch(err => {
      console.error('err', err);
    })
}
document.querySelector(".submit")
  .addEventListener("click", function(e) {
    e.preventDefault();
  });