
const toggleButton = document.getElementById("img-hamburger");
const mobileView = document.getElementById("mobileView");

  toggleButton.addEventListener('click',()=> {

    mobileView.classList.toggle("second-container-mobile");
    toggleButton.classList.toggle("header-toggle-btn-hamburger");
    toggleButton.classList.toggle("header-toggle-btn-x");
    console.log("click");
    
  });

