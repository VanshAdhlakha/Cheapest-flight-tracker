const btn = document.getElementById("btn");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

btn.addEventListener("click", getFlights);

async function getFlights() {
  statusEl.textContent = "loading...";
  resultEl.innerHTML = "";

  try {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=air");
    const data = await res.json();

    if (!data || data.length === 0) {
      statusEl.textContent = "no data";
      return;
    }
  } catch (err) {
    statusEl.textContent = "error";
  }
}