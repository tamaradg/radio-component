import "./styles.css";

const baseUrl = "https://teclead.de/recruiting/radios";
const radio = document.querySelector(".radio");
const results = document.querySelector(".result");

radio.addEventListener("click", (event) => {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      data.radios.forEach((radio) => {
        results.insertAdjacentHTML("beforeend", `<li>${radio.image}</li>`);
      });
    });
});
