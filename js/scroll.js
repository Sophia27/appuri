const app = document.querySelector('.app img')
const appuri = document.querySelector('.app')
const intro = document.querySelector('.intro')
const images = document.querySelector('.images')
const imagesHeight = document.querySelector('.images').clientHeight;
const bodyTag = document.querySelector('.inhalt')



document.addEventListener('scroll', function () {
  const scroll = window.pageYOffset
  // const height = imagesHeight
  
  if  (scroll > 10) {
    appuri.classList.add('scrolled')
    // intro.classList.add('scrolled')
  }
  else if (scroll > 800) {
    app.classList.add("nofilter");
    images.classList.add("filter");
    
  } else {
   // app.style.filter = `blur(${percentage}%)`
   app.classList.remove("nofilter");
   images.classList.remove("filter");
   appuri.classList.remove('scrolled')
  }
})


app.addEventListener('mouseover', function() {
  if (app.classList.contains('nofilter')) {
    app.classList.remove("nofilter");
    images.classList.remove("filter");
  } else {
    app.classList.add("nofilter");
    images.classList.add("filter");
  }
})



app.addEventListener('touchmove', function() {
  if (app.classList.contains('nofilter')) {
    app.classList.remove("nofilter");
    images.classList.remove("filter");
  } else {
    app.classList.add("nofilter");
    images.classList.add("filter");
  }
})

images.addEventListener('touchmove', function() {
  if (app.classList.contains('nofilter')) {
    app.classList.add("nofilter");
    images.classList.add("filter");
  } else {
    app.classList.remove("nofilter");
    images.classList.remove("filter");
  }
})


