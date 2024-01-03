console.log('Hello world!')

const backToTopButton = document.getElementById('pageTop')

const scrollToTop = () => {
    if (window.scrollY > 300) {

        if(!backToTopButton.classList.contains("pageTopEntrance")) {
            backToTopButton.classList.remove("pageTopExit");
            backToTopButton.classList.add("pageTopEntrance");
            backToTopButton.style.display = "flex";
          }
        }
        else { // Hide backToTopButton
          if(backToTopButton.classList.contains("pageTopEntrance")) {
            backToTopButton.classList.remove("pageTopEntrance");
            backToTopButton.classList.add("pageTopExit");
            setTimeout(function() {
              backToTopButton.style.display = "none";
            }, 250);
          }
    }
}

window.addEventListener('scroll', scrollToTop)


