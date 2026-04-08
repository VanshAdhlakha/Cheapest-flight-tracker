const btn = document.getElementById("btn");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

btn.addEventListener("click", getFlights);

async function getFlights() {
   statusEl.textContent = "loading...";
  resultEl.innerHTML = "";

  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    const list = data.users;

    const flights = list.map(function (u, index) {
    });
    resultEl.innerHTML =
      "<div class='card'>" +
      "<div class='price'>₹" +
      cheapest.price +
      "</div>" +
      "<div><b>Airline:</b> " +
      cheapest.airline +
      "</div>" +
      "<div><b>Route:</b> " +
      cheapest.from +
      " → " +
      cheapest.to +
      "</div>" +
      "</div>";

    statusEl.textContent = "done";
  } catch (err) {
    statusEl.textContent = "error";
    console.log(err);
  }
}