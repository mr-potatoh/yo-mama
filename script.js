fetch("jokes.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("joke").innerText = `${
      data[Math.floor(Math.random() * data.length)]
    } :]`;
  })
  .catch((err) => document.querySelector('#joke').innerText = `(T-T) Can't load the Jokes, yo momma ate 'em all (T-T)`);

const copyBtn = document.querySelector("#copy");
function copyJoke() {
  navigator.clipboard
    .writeText(document.getElementById("joke").innerText)
    .then((copyBtn.innerHTML = "copied"));
}

copyBtn.addEventListener("click", copyJoke);
