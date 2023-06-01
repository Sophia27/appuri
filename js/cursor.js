const cursor = document.querySelector('div.cursor')
const videoContainers = document.querySelectorAll('div.cursor-container')
const moveCursor = function(x, y) {
  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
}

videoContainers.forEach(container => {
  const video = container.querySelector('video')
  const btn = container.querySelector('div.btn')

  container.addEventListener('mousemove', function(client) {
    moveCursor(client.pageX, client.pageY)
  })

  video.addEventListener('click', function() {
    if (video.paused == false) {
      this.pause()
      cursor.innerHTML = 'Play'
      btn.innerHTML = 'Play'
//       btn.style.display = 'block'
    } else {
      this.play()
      cursor.innerHTML = 'Pause'
      btn.innerHTML = ''
//       btn.style.display = 'none'
    }
  })

  video.addEventListener('mouseover', function() {
    if (video.paused == false) {
      cursor.innerHTML = 'Pause'
    } else {
      cursor.innerHTML = 'Play'
    }
  })
})
