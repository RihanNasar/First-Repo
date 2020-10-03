var url = "https://api.jikan.moe/v3"
var search = document.querySelector("#search");
var result = document.querySelector('#result')
var select = document.querySelector("#select").value;
function pageLoaded(){
    
    // fetch(`${url}/search/anime?q=${search.value}&page=1`)
    // .then(res => 
    //     res.json()
    // )
    // .then(data => console.log(data))
    // .catch(err => console.log(err.message))
}
function searchAnime(){
    console.log(search.value);
    fetch(`${url}/search/anime?q=${search.value}&page=1`)
    .then(res => res.json())
    .then(updateDom)
    .catch(err => console.log(err.message))
    

}
function updateDom(data) {
    console.log(data.results);
    result.innerHTML =
    data.results.
    sort((a,b) => a.episodes-b.episodes)
    .map(anime => { return `
        <div class="row">
          <div class="col s12 m5">
            <div class="card">
              <div class="card-image">
                <img src="${anime.image_url}">
              </div>
              <div class="card-content">
              <span class="card-title">${anime.title}</span><span>Rating:<strong>${anime.score}</strong></span>

                <p>${anime.synopsis}</p>
              </div>
              <div class="card-action">
                <a href="${anime.url}">Click to find out more..</a>
              </div>
            </div>
          </div>
        </div>`
    });
}


window.addEventListener('load', pageLoaded)
search.addEventListener('input', searchAnime)