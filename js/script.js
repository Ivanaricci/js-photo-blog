
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

endopoint = `https://lanciweb.github.io/demo/api/pictures/`

axios.get(endpoint).then((resp) =>{
    const cards = resp.data.response;

    
})

