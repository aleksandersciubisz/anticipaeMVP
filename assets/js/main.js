// Logo image hover substitution
function hoverLogo(element) {
  element.setAttribute('src', 'assets/img/logoGifBlack.gif')
}

function unhoverLogo(element) {
  element.setAttribute('src', 'assets/img/logoGifBlack.gif')
}

// Hamburger menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

// Scroll Up icon
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 250) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Scroll Reveal Animation
const sr = ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 400,
  reset: true,
})

sr.reveal(`.sr-down-fast`, { delay: 200, origin: 'bottom' })
sr.reveal(`.sr-down-slow`, { delay: 400, origin: 'bottom' })
sr.reveal(`.sr-top-fast`, { delay: 200, origin: 'top' })
sr.reveal(`.sr-top-slow`, { delay: 400, origin: 'top' })

// console main page element
consoleText(
  [
    'streamline data collection',
    'find patterns, make decisions, move faster',
    'gain an advantage and win your future',
  ],
  'text',
  ['var(--white-color)', 'var(--white-color)', 'var(--white-color)']
)

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff']
  var visible = true
  var con = document.getElementById('console')
  var letterCount = 1
  var x = 1
  var waiting = false
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift()
        colors.push(usedColor)
        var usedWord = words.shift()
        words.push(usedWord)
        x = 1
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x
        waiting = false
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true
      window.setTimeout(function () {
        x = -1
        letterCount += x
        waiting = false
      }, 5000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x
    }
  }, 80)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false
    } else {
      con.className = 'console-underscore'

      visible = true
    }
  }, 400)
}
