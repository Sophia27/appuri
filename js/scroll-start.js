const appuri = document.querySelector('.app img')
//const sentence = document.querySelector('.intro')

document.addEventListener('scroll', function () {
  const scroll = window.pageYOffset
  
  if (scroll > 100) {
    appuri.classList.add("scrolled");
    
  } else {
   // app.style.filter = `blur(${percentage}%)`
   appuri.classList.remove("scrolled");
  
  }
})
