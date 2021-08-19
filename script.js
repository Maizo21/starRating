"use strict";

let starsContainer = document.querySelector("#stars");
let commentContainer = document.querySelector("#comment");
let emptyStar = `<img src="img/star-e.svg" alt="star empty">`;

starsContainer.insertAdjacentHTML(
  "beforeend",
  `${'<img src="img/star-e.svg" alt="star stars" class="star ">'.repeat(5)}`
);

document.querySelectorAll("#stars img").forEach((btn, key) => {
  btn.setAttribute("id", key);

  btn.addEventListener("click", (e) => {
    document.querySelectorAll("#stars img").forEach((btn) => {
      btn.src = "img/star-e.svg";
      if (btn.id <= e.target.id) {
        btn.src = "img/star.svg";
      }
    });
    let stars = e.target.id;
    evaluateRating(stars);
  });
});

function evaluateRating(e) {
  let start = +e + 1;

  switch (start) {
    case 1:
      commentContainer.textContent = `You didn't like it 😧`;
      break;

    case 2:
      commentContainer.textContent = `Could be better 🤷‍♂️`;
      break;

    case 3:
      commentContainer.textContent = `I'ts okay 🙂`;
      break;

    case 4:
      commentContainer.textContent = `You liked it 😁`;
      break;

    case 5:
      commentContainer.textContent = `You loved it 🤩`;
      break;
  }
}
