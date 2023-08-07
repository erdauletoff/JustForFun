const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('#screen')
const timeList = document.querySelector('#time-list')
const timeRemaining = document.querySelector('#time-remaining')
const board = document.querySelector('#board')

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        const circle = document.querySelector('.circle')
        circle.classList.remove('circle')
        createRandomCircle()
    } else if (event.target.classList.contains('replay-btn')) {
        event.preventDefault()
        score = 0
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function finishGame() {
    timeRemaining.parentElement.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = '0' + current
        }
        setTime(current)
    }
}

function setTime(value) {
    timeRemaining.innerHTML = `00:${value}`    
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(15, 50)
    const {width, height} = board.getBoundingClientRect()
    const posX = getRandomNumber(0, width - size)
    const posY = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${posY}px`
    circle.style.left = `${posX}px`
    
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}