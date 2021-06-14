fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(json => {
    const container = document.querySelector('.container');
    json.results.map(results => {
      container.innerHTML += `
        <div> 
          <img src='${results.image}'>
          <p>${results.name}</p>
          <p>${results.gender}</p>
          <p>${results.species}</p>
        </div>  
      `
    })
  })