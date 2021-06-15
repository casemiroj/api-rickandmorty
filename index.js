fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(json => {
    const container = document.querySelector('.container');
    json.results.map(results => {
      container.innerHTML += `
        <div class='card'>
          <div class='card-img-container'>
            <img src='${results.image}'>
          </div>
          <p class='card-name'>${results.name}</p>
          <p class='card-gender'>${results.gender}</p>
          <p class='card-species'>${results.species}</p>
        </div>  
      `
    })
  })