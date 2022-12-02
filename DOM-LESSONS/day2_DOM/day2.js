// DOM MANIPULATION - ADDING AND DELETING ELEMENTS

// 1. Creating Elements - createElement()
let container = document.getElementById('container')
// console.log(container)

let list = document.createElement('ul')
let list_items = document.createElement('li')

// list_items.textContent = 'Javascript'
// list.list_items.textContent = 'Javascript'

let listElement = list.appendChild(list_items)
container.appendChild(listElement).textContent = 'Home'

// container.append("hello")

// 2. Removing Elements - removeChild()
let content = document.querySelector('.content')
// console.log(content)
content.removeChild(content.firstElementChild)

// 3. Appending Elements - appendChild()
// 4. Replacing Elements - replace(new, old)
content.replaceChild(p, h2)
// 5. Writing in an Element - write()
