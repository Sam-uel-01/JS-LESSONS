// DOM - Document Object Model

// methods of accessing DOM element

// 1. getElementById
let firstBox = document.getElementById('box-one')
firstBox.style.height = '200px'
firstBox.style.backgroundColor = 'red'

// 2.getElementsByClassName - this returns an array
let Box = document.getElementsByClassName('box-two')
for (let i = 0; i < Box.length; i++) {
  Box[i].style.backgroundColor = 'black'
}

// // 3. getElementsByTagName - returns as an array
let lang = document.getElementsByTagName('h1')
for (let i = 0; i < lang.length; i++) {
  lang[1].style.color = 'green'
}

// // 4. querySelector() - to select class, an ID, a TAG
document.querySelector('p').style.backgroundColor = 'red'
document.querySelector('#el').style.height = '50px'

// // 5. querySelectorAll() -returns an array
let items = document.querySelectorAll('.list-items')
console.log(items)
// items[items.length - 1].style.fontSize = '30px'

// 6. getElementsByName()

//

// DOM MANIPULATION - ADDING AND DELETING ELEMENTS
// 1. Creating Elements - createElement()
// 2. Removing Elements - removeChild()
// 3. Appending Elements - appendChild()
// 4. Replacing Elements - replace(new, old)
// 5. Writing in an Element - write()

// 4 METHODS OF MODIFYING ELEMENTS ATTRIBUTES
// 1. Checking if an element has attribute - .hasAttribute()
// 2. Fetching the attribute Value of an element - getAttribute()
// 3. Setting a new Attribute - setAttribute()
// 4. Removing an Attribute - removeAttribute()

// MODIFYING CLASSES
// 1. Getting or setting className - className
// 2. Add one or more class values - classList.add()
// 3. Toggle class ON and OFF - classList.toggle()
// 4. Check if class value exits - classList.contains()
// 5. Replacing an existing class value with a new class value - classList.replace()
// 6. Removing a class value - classList.remove()
