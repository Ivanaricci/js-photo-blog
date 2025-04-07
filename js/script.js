
const card = document.getElementById('card')


function createCard(card) {
    return `<div class="col-lg-4 my-2">
                <div class="square">
                    <img src="${card.url}" alt="">
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

