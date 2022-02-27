const main = document.getElementById('main');


const searchButton = () => {
    const inputValue = document.getElementById('input-value')
    const errorMessage = document.getElementById('error')


    const input = parseInt(inputValue.value)
    if (isNaN(input || input == "")) {
        // alert('Please enter a valid number')
        errorMessage.innerText = "Please enter a valid number"
        inputValue.value = ""
    } else if (input <= 0) {
        error.innerText = "Please give a positive number"
        inputValue.value = ""
    } else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${input}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))
        inputValue.value = ""
    }




}

const cardsDisplay = (cards) => {

    console.log(cards)
    for (const card of cards) {
        console.log(card)
        const div = document.createElement('div')
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.suit}</h5>
    <p class="card-text">${card.code} </p>
    <a href="#" class="btn btn-primary">See Details</a>
  </div>
</div>
        
        
        `

        main.appendChild(div)
    }
}