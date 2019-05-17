
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
          likesTag.id = 'likesTag'
      let btnTag = document.createElement('button')
          likesTag.innerText = toy.likes
          btnTag.id = 'likesBtn'
          btnTag.innerText = '<3'
          btnTag.dataset.objId = toy.id
          btnTag.addEventListener('click', function(){
            incLikes(btnTag,likesTag)
          })
          nameH2.innerText = toy.name 
          imgTag.src = toy.image
          
          
          
          
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

    
function incLikes(btnTag,likesTag){
   
    let btnId = btnTag.dataset.objId //"number"
    let newLike = parseInt(likesTag.innerText) + 1
          
    fetch(`http://localhost:3000/toys/${parseInt(btnId)}`,{ 
        method: 'PATCH',//pathing to data base
        headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
        
          "likes": newLike
          
        })
      })
        .then(response => response.json())
        .then(newToy => {
          likesTag.innerHTML = newLike
        })
    
}



