const image = (link) =>{
 let img = document.createElement('img');
 img.setAttribute('style', "width: 200px");
 img.setAttribute('style', "height: 200px");
 img.setAttribute('src', link);
 img.setAttribute('alt', 'poster');
 document.querySelector('.result').appendChild(img);
}
export default image;