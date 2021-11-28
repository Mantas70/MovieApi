import {forms1, forms2} from "./forms";
import clearInfo from "./clearInfo";

const formsRender = () =>{
    let form = document.createElement('form')
    form.innerHTML = forms1();
    document.querySelector('main .card-body').appendChild(form);
    let card = document.querySelector('.card-body')
    card.innerHTML += forms2();
    clearInfo();
}
export default formsRender;