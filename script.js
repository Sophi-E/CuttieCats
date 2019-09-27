const log = console.log;
const url = "https://api.thecatapi.com/v1/images/search?limit=12&page=";
let pageNum = 0;
const container = document.querySelector("#container");
const btn = document.querySelector('#btn');

function getCats(){
  fetch(url+pageNum, {
    headers: {
      'x-api-key': '3eda3968-66d6-4170-9df4-582d0f353716'
    } 
  })
  .then(response => {
    if(!response.ok){
      throw Error(response.statusText)
    }
    return response.json();
  })
  .then(data => {
    log(data);
    container.innerHTML = '';
      const catUrl = data.map(catUrl => {
        const img = document.createElement('img');
        img.src = catUrl.url;
        return img;
      });
      catUrl.forEach(element => container.appendChild(element).classList.add('img'))
      pageNum++;
    }) 
  .catch(error => log(error));
}
getCats();

  btn.addEventListener('click', getCats)