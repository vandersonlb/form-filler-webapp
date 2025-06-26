import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js'
import '@material/web/icon/icon.js'
import '@material/web/iconbutton/icon-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/filled-button.js'
import '@material/web/labs/card/outlined-card.js'
import '@material/web/progress/linear-progress.js'
import '@material/web/textfield/outlined-text-field.js'
import '@material/web/select/filled-select.js'
import '@material/web/select/select-option.js'

const steppers = document.querySelectorAll(".stepper")
const toggles = document.querySelectorAll(".stepper__action .stepper__toggle")

toggles.forEach(toggle => {
  toggle.addEventListener("click", evt => {
    let toggle = evt.target
    let stepper = toggle.closest(".stepper")
    let content = stepper.querySelector(".stepper__content")
    let isClosed = [...toggle.classList].includes("stepper__toggle--closed")

    closeAllSteppers()

    if(isClosed) {
      openStepper(toggle, stepper, content)
    } else {
      closeStepper(toggle, stepper, content)
    }
  })
})

function openStepper(toggle, stepper, content) {
  toggle.classList.remove("stepper__toggle--closed")
  toggle.classList.add("stepper__toggle--open")
  stepper.classList.remove("stepper--closed")
  stepper.classList.add("stepper--open")
  stepper.classList.add("my-16")
  content.classList.remove("hide")
  content.classList.add("show")
}

function closeStepper(toggle, stepper, content) {
  toggle.classList.remove("stepper__toggle--open")
  toggle.classList.add("stepper__toggle--closed")
  stepper.classList.remove("stepper--closed")
  stepper.classList.add("stepper--open")
  stepper.classList.remove("my-16")
  content.classList.remove("show")
  content.classList.add("hide")
}

function closeAllSteppers() {
  steppers.forEach(stepper => {
    let toggle = stepper.querySelector(".stepper__action .stepper__toggle")
    let content = stepper.querySelector(".stepper__content")
    closeStepper(toggle, stepper, content)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  document.adoptedStyleSheets.push(typescaleStyles.styleSheet)
  const stepperTextfield = document.querySelector(".stepper__textfield").shadowRoot;
  const input = stepperTextfield.querySelector(".input-wrapper")
  input.style.paddingTop = "6px";
  input.style.paddingBottom = "6px";
  document.querySelectorAll(".map__select").forEach(mappingSelect => {
    const shadow = mappingSelect.shadowRoot;
    shadow.querySelector("md-filled-field").style.height = "40px";
    shadow.querySelector("#label").style.paddingTop = "8px";
  });
})
