const displayResult = (ats, answer) => {   //function for Text creation upon completing search request
    let list = document.createElement('div');
    list.innerHTML = ats;
    list.style.fontSize = "20px";
    list.innerHTML += document.querySelector('.result').value=answer;
    document.querySelector(".result").appendChild(list);
}
export default displayResult