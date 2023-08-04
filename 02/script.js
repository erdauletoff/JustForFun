const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', (event) => {
        event.preventDefault()
    })
    placeholder.addEventListener('dragenter', (event) => {
        placeholder.classList.add('hovered')
    })
    placeholder.addEventListener('dragleave', (event) => {
        placeholder.classList.remove('hovered')

    })
    placeholder.addEventListener('drop', (event) => {
        event.target.append(item)
        placeholder.classList.remove('hovered')
    })
})

item.addEventListener('dragstart', (event) => {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
})

item.addEventListener('dragend', (event) => {
    event.target.className = 'item'
})