import "./styles.css";

const baseUrl = "https://teclead.de/recruiting/radios";
const radio = document.querySelector(".radio");
const results = document.querySelector(".result");

fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    data.radios.forEach((r) => {
      radio.insertAdjacentHTML(
        "beforeend",
        `<div class="border-bottom">
          <div class="radio-detail">
            <button>${r.name} </button>
            <p>${r.frequency}</p>
          </div>
        </div>
        <div><img class="fit-picture" src="${r.image}"</div>`
      );
    });
  });
