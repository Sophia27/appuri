const app = document.querySelector('.app img')
const intro = document.querySelector('.intro')
const images = document.querySelector('.images')
const imagesHeight = document.querySelector('.images').clientHeight;
const bodyTag = document.querySelector('.inhalt')

//When we scroll we want to change the filter
// document.addEventListener('scroll', function () {
//   const pixels = window.pageYOffset
//   const sectionHeight = imagesHeight * 3 
//   const percentage = pixels / sectionHeight
//   //app.style.height = `calc(100% - ${100 * percentage}%)`
//   //app.style.filter = `blur(${100 * percentage}%)`


// })

document.addEventListener('scroll', function () {
  const scroll = window.pageYOffset
  const height = imagesHeight
  
  if (scroll > 800) {
    app.classList.add("nofilter");
    images.classList.add("filter");
    
  } else {
   // app.style.filter = `blur(${percentage}%)`
   app.classList.remove("nofilter");
   images.classList.remove("filter");
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


