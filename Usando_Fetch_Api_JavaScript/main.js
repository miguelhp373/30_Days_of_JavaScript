function search() {
    var search 
    var categories

    search = document.getElementById("searchfield").value;
    categories = document.getElementById("categories").value;



    if((search != null) && (categories != null) && (categories != '')){
        fetch(`https://swapi.dev/api/${categories}/?search=${search}`)
        .then(function (response) {
          if (!response.ok) {
            throw new Error(
              "Erro Ao Tentar Se Comunicar com o Servidor! Status " +
                response.status
            );
          } else {
            return response.json();
          }
        })

        .then(function (data) {


          var  count = 0

          DivResult = document.getElementById('result')

          DivResult.innerHTML =
       `
         <div class="results" id="results">
         <h2>${categories}</h2>
         <hr>
         <p>Title :</p>
         <span class="title" id="title"></span>
         <br>
         <p>Release_date:</p>
         <span class="result2" id="result2"></span>
          </div>
         `
    
          if(categories = 'people'){

           //document.getElementById('title').innerHTML = data.results[count].name
          // document.getElementById('result2').innerHTML = data.results[count].birth_year

          }

          if(categories = 'films'){
           document.getElementById('title').innerHTML = data.results[count].title
           document.getElementById('result2').innerHTML = data.results[count].release_date
           }



        })
    
        .catch(function (error) {
          console.log(error.message);
        });
    }

}

