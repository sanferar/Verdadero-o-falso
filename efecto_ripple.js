/* Ripple effect -----------------------------------*/

const btnVerdaderoRipple = document.querySelector(".btn-ripple-verdadero");
const btnFalsoRipple = document.querySelector(".btn-ripple-falso");

/* Ripple effects */

  // Listen for click event
  btnVerdaderoRipple.onclick = function (e) {

    // Create span element
    let ripple = document.createElement("span");

    // Add ripple class to span
    ripple.classList.add("ripple");

    // Add span to the button
    this.appendChild(ripple);

    // Get position of X
    let x = e.clientX - e.target.offsetLeft;

    // Get position of Y
    let y = e.clientY - e.target.offsetTop;

    // Position the span element
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Remove span after 0.3s
    setTimeout(() => {
      ripple.remove();
    }, 300);

  };

   // Listen for click event
   btnFalsoRipple.onclick = function (e) {

    // Create span element
    let ripple = document.createElement("span");

    // Add ripple class to span
    ripple.classList.add("ripple");

    // Add span to the button
    this.appendChild(ripple);

    // Get position of X
    let x = e.clientX - e.target.offsetLeft;

    // Get position of Y
    let y = e.clientY - e.target.offsetTop;

    // Position the span element
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Remove span after 0.3s
    setTimeout(() => {
      ripple.remove();
    }, 300);

  };