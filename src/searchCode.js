import ajaxService from "./ajaxService";
import displayResult from "./displayResult";
import image from "./scss/image";
const searchCode = () =>{
    document.querySelector('form').addEventListener('submit',(e)=>{
      e.preventDefault()
        let movie
        movie = document.querySelector(".movie").value
        let searchResponse;
        ajaxService(movie)
            .then(result => searchResponse = result)
            .then(() => {
                let ats = document.createElement('div');
                ats.className = "result"
                document.querySelector(".list-group").appendChild(ats);
            })
            .then(() => {
               displayResult("Movie Title: ", searchResponse.Title)
               displayResult("IMDB Rating: ", searchResponse.imdbRating)
                image(searchResponse.Poster)
            })
    })
}
export default searchCode;