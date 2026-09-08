const button = document.getElementById("myButton");
const heading = document.getElementById("heading");

button.addEventListener("click", function () {
    heading.textContent = "You clicked the button!";

    console.log("Button was clicked");
});