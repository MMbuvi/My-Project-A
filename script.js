const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d7af6e27ee729d2bdb078dda2e27569c&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/original";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=d7af6e27ee729d2bdb078dda2e27569c&query="

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
        
        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    }); 
});
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
    
    const searchTerm = search.value;
