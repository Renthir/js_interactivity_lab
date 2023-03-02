//element pulls
let form = document.querySelector('form')
let inputField = document.querySelector('input')
let ul = document.querySelector('ul')
let message = document.querySelector('#message')

//funtions
function addMovie(event){
    event.preventDefault()
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let delButton = document.createElement('button')
    
    //add movie title
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    ul.appendChild(movie)

    //adding x button
    delButton.textContent = 'X'
    delButton.addEventListener('click', deleteMovie)
    movie.appendChild(delButton)
    inputField.value = ''
}

form.addEventListener('submit', addMovie)

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = event.target.parentNode.childNodes[0].textContent + ' deleted!'
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = event.target.textContent + ' watched!'
    } else {
        message.textContent = event.target.textContent + ' added back!'
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

