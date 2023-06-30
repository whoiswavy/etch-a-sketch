const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

// Get the grid element
const grid = document.getElementById('grid');
const sizeValue = document.getElementById('sizeValue')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setCurrentSize(newSize) {
    currentSize = newSize
}

  function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
  }
  
  function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }
  
  function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
  }
  
  function clearGrid() {
    grid.innerHTML = ''
  }
  
// Create a loop to generate the grid
function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    // Create a new div element
    const gridElement = document.createElement('div')

    // Add a class to the div for styling
    gridElement.classList.add('grid-element')
        
    // Append the div to the grid
    grid.appendChild(gridElement);
  }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }


window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    // activateButton(DEFAULT_MODE)
  }