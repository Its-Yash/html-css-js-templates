const buttons = document.querySelectorAll(".btn");
const cities = document.querySelectorAll(".city");

function showCity(e, index) {
  //adds the hidden-city class to all image element and removes the active-btn class from all buttons
  for (let i = 0; i < cities.length; i++) {
    cities[i].classList.add("hidden-city");
    buttons[i].classList.remove("active-btn");
  }

  //add the active-btn class to the clicked button
  e.target.classList.add("active-btn");

  // pick the right city and make it visible
  cities[index].classList.remove("hidden-city");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    showCity(e, index);
  });
});
