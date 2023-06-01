document.addEventListener("DOMContentLoaded", function () {


    /******************************* Navigation ******************************/
      const overlay = document.querySelector(".overlay")
      const openOverlay = document.querySelector(".toggle-open");
      const closeOverlay = document.querySelector(".toggle-close");
    
    
      openOverlay.addEventListener("click", () => {
        overlay.classList.toggle("overlay-open");
      });
    
      closeOverlay.addEventListener("click", () => {
        overlay.classList.remove("overlay-open");
      });
    
    
       
    
    })