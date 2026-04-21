const [red, green, blue] = [204, 0, 0]
const section1 = document.querySelector('.section1')
var audio;
 
window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 100
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

