//1.
   async function getNumFact(num){
    let res = await $.getJSON(`http://numbersapi.com/${num}?json`)
    console.log(res)
   }
   getNumFact(7)

//2.
   async function getNumsFact(arr){
    let res = await $.getJSON(`http://numbersapi.com/${arr}?json`)
    console.log(res)
   }
   getNumsFact([21,4,56,7,2])

//3.
   async function getNumFacts(num){
    let res = await Promise.all(
        Array.from({length:4}, () => $.getJSON(`http://numbersapi.com/${num}?json`)))
    res.forEach(fact => $("h1").append(`<h4><i>${fact.text}</i></h4>`))
   }
   getNumFacts(4)