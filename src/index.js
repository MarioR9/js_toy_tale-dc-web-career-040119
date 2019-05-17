
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

document.addEventListener('DOMContentLoaded', function (){
  fetchAllToys()
  postToy()

})

function fetchAllToys(){
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(toysData => {toysData.forEach(addToyInfo)
  })
}

function addToyInfo(toy){
    let toyCollection = document.querySelector('#toy-collection')
    let cardDiv = document.createElement('div')
        cardDiv.className = 'card'
      let nameH2 = document.createElement('h2')
      let imgTag = document.createElement('img')
        imgTag.className = 'toy-avatar'
        // imgTag.src = "toy_image_url"//not real URL 
      let likesTag = document.createElement('p')
      let btnTag = document.createElement('button')
          nameH2.innerText = toy.name 
          imgTag.src = toy.image
          likesTag.innerText = toy.likes
    toyCollection.append(cardDiv)
    cardDiv.append(nameH2,imgTag,likesTag,btnTag)
}

addBtn.addEventListener('click', () => {
      
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
    
  } else {
    toyForm.style.display = 'none'
    
  }
})



// OR HERE!
function postToy(){
  let btn = document.getElementById('sub')
  btn.addEventListener('click', function(event){
    event.preventDefault()
  let name = document.getElementsByClassName('input-text')[0].value
  let img = document.getElementsByClassName('input-text')[1].value
  fetch('http://localhost:3000/toys',{
    method:"post",
    headers: 
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body:   JSON.stringify({
    
      name: name,
      image: img,
      likes: 0
    })
  })
  .then(response => response.json())
  .then(newToy => {addToyInfo(newToy)
  })
})
}

