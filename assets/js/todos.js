let ul = document.querySelector('ul')
let input = document.querySelector('input[type="text"]')
let plusBtn = document.querySelector('.fa-plus')

ul.addEventListener('click', function (e) {
  // check off todo
  if (e.target.nodeName === 'LI') {
    e.target.classList.toggle('completed')
  }

  // delete todo
  if (e.target.matches('span, .fa-trash-alt')) {
    let li = e.target.closest('li') 

     //fadeOut using css transition
    li.classList.add('fadeOut')
    setTimeout(function () {
      li.remove()
    }, 500)
    e.stopPropagation()
  }
})

// add todo after pressing enter
input.addEventListener('keypress', function (e) {
  if (e.which === 13) {
    let todoText = input.value
    input.value = ''
    let li = document.createElement('li')
    li.innerHTML = `<span><i class="fas fa-trash-alt"></i></span>${todoText}`
    ul.appendChild(li)
  }
})

// toggel input box
plusBtn.addEventListener('click', function () {
  fadeToggle(input, 500)
})


function fadeToggle(elem, speed, callback) {
  // check opacity, set fade function
  if (!elem.style.opacity || Number(elem.style.opacity) === 1) {
    elem.style.opacity = 1
    fadeOut = true
  } else {
    fadeOut = false
  }
  // fade out, fade in animation
  let interval = setInterval(function () {
    if (fadeOut) {
      elem.style.opacity -= 0.02
      if (elem.style.opacity <= 0) {
        clearInterval(interval)
        elem.style.display = 'none'
      }
    } else {
      elem.style.display = 'block'
      elem.style.opacity = Number(elem.style.opacity) + 0.02
      if (elem.style.opacity >= 1) {
        clearInterval(interval)
      }
    }
  }, speed/50) 
}
