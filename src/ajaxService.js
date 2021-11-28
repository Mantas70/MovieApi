const ajaxService = (term) =>{
    const url = "https://www.omdbapi.com/";
    const key = "c08fafe5";
    const searchEngine = '?t='
    return fetch(`${url}${searchEngine}${term}&apikey=${key}`)
        .then(response => response.json())
}
export default ajaxService;