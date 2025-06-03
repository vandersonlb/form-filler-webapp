// index.js
// import '@material/web/button/filled-button.js';
// import '@material/web/button/outlined-button.js';
// import '@material/web/checkbox/checkbox.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';



// import '@material/web/all.js';
import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const steppers = document.querySelectorAll("section.stepper");
const toggles = document.querySelectorAll(".action .toggle");



toggles.forEach(toggle => {
  toggle.addEventListener("click", evt => {
    let toggle = evt.target
    let stepper = toggle.closest(".stepper")
    let isClosed = [...toggle.classList].includes("toggle--closed")

    closeAllSteppers()

    if(isClosed) {
      openStepper(toggle, stepper)
    } else {
      closeStepper(toggle, stepper)
    }
  })
})

function openStepper(toggle, stepper) {
  toggle.classList.remove("toggle--closed")
  toggle.classList.add("toggle--open")
  stepper.classList.remove("stepper--closed")
  stepper.classList.add("stepper--open")
}

function closeStepper(toggle, stepper) {
  toggle.classList.remove("toggle--open")
  toggle.classList.add("toggle--closed")
  stepper.classList.remove("stepper--open")
  stepper.classList.add("stepper--closed")
}

function closeAllSteppers() {
  steppers.forEach(stepper => {
    let toggle = stepper.querySelector(".action .toggle");
    closeStepper(toggle, stepper)
  })
}