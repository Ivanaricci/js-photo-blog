
const card = document.getElementById('card')
console.log(card)
const overlay = document.querySelector('.overlay')
const btn = document.querySelector('.btn-overlay')



function createCard(card) {
    return `<div class="col-lg-4 col-md-6 col-sm-12 my-2">
                <div class="square">
                    <img class="point img-fluid" src="./assets_day1/img/pin.svg" alt="">
                    <img class="img img-fluid img-card" src="${card.url}" alt="">
                    <p>${card.date}</p>
                    <h4>${card.title}</h4>
                </div>
            </div>`
}



endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

axios.get(endpoint).then((resp) =>{
    console.log(resp)
    const cards = resp.data;
    console.log(cards)

    for(let i=0; i<cards.length; i++){
        const cardHtml = createCard(cards[i]);
        card.innerHTML += cardHtml;
    }
})


    card.addEventListener('click',() => {
        overlay.classList.remove('d-none')
     })


btn.addEventListener('click', () => {
    overlay.classList.add('d-none')
})


 

