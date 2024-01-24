//1.
   async function drawCard(){
    let res = await $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
    let card = res.cards[0]
    console.log(`${card.value} of ${card.suit}`)
   }
   drawCard()

//2.
   async function drawTwoCards() {
    let firstCard = await $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
    let deckId = firstCard.deck_id
    let secondCard = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
    let firstCardData = firstCard.cards[0]
    let secCardData = secondCard.cards[0]
    console.log(`${firstCardData.value} of ${firstCardData.suit}`)
    console.log(`${secCardData.value} of ${secCardData.suit}`)
   }
   drawTwoCards()

//3.


   async function drawFromDeck() {
    let $btn = $('button')
    let deck = await $.getJSON("https://deckofcardsapi.com/api/deck/new/")
    let deckId = deck.deck_id;

    $btn.on('click', async function(){
        let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
        let cardImg = card.cards[0].image
        $('#card-area').append(
            $('<img>',{
                src: cardImg
            })
           )
           if (card.remaining === 0 ) $('button').remove()
    })
   }
   drawFromDeck()

