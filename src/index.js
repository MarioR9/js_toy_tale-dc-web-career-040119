const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
addToyInfo()


// YOUR CODE HERE
function addToyInfo(){
    let toyCollection = document.querySelector('#toy-collection')
    let cardDiv = document.createElement('div')
        cardDiv.className = 'card'
      let nameH2 = document.createElement('h2')
      let imgTag = document.createElement('img')
        imgTag.className = 'toy-avatar'
        imgTag.src = "toy_image_url"//not real URL 
      let likesTag = document.createElement('p')
      let btnTag = document.createElement('button')
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
