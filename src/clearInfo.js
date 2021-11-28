const clearInfo = ()=>{
    document.getElementsByClassName('btn btn-outline-danger')[0].addEventListener('click', ()=>{
       let result = document.querySelector('.result');
       result.parentNode.removeChild(result);
    })

}
export default clearInfo;