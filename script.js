const btn = document.getElementById("btn");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

btn.addEventListener("click", getFlights);


async function getFlights() {
  statusEl.textContent = "loading...";
  resultEl.innerHTML = "";

}