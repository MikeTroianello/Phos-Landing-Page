async function setCardsToStorage(){
  await localStorage.setItem('cards', JSON.stringify(cardArray));
  cards = localStorage.getItem('cards');

  cards= JSON.parse(cards)
  showCard(cards)
}

function showCard(cards){

  let cardData = cards[Math.floor(Math.random()*cards.length)]
  console.log(cardData)

  let theCard = document.getElementById('the-card')

  // theCard.append(JSON.stringify(cardData))

  document.getElementById('type').innerHTML = cardData.type
  document.getElementById('title').innerHTML = cardData.title
  document.getElementById('description').innerHTML = cardData.description
  document.getElementById('example').innerHTML = cardData.example
  // document.getElementById('reference').innerHTML = cardData.reference
  document.getElementById('tags').innerHTML = cardData.tags.toString()



  
}

setCardsToStorage()



// (async ()=>{
//   console.log("STARTING")
//   try{
//   let notes = await fetch('https://phos-backend.herokuapp.com/collections/create',{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//   })
//   notes = notes.json()
//   console.log("HERE?")
// }catch(err){
//   console.log("Sumpin went rawng", err)
// }
// })()