function getRandomBeer(){

var beer = axios.get('https://api.punkapi.com/v2/beers/random')
   .then(response =>{
     let beerExample = response.data[0];
     let beerName = beerExample.name;
    let beerFood = beerExample.food_pairing;
    console.log(beerName, beerFood);
     return beerExample;
   })
   .catch(error => {
    // handle error
    console.log(error);
   })

}

function getUserFood() {
  let userChoice = document.getElementById('food').value;  
  console.log(userChoice);
}



   /* function getMatchedFood(){

        var list = axios.get('https://api.punkapi.com/v2/beers', {
            params: {
                food: `${userChoice}`
            
        }
    })
        .then(response =>{
             console.log(response);
           })
           .catch(error => {
            // handle error
            console.log(error);
           
           })
        }; */