const btn = document.getElementById("btn");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

btn.addEventListener("click", getFlights);

async function getFlights() {
  const from = document.getElementById("from").value.trim().toUpperCase();
  const to = document.getElementById("to").value.trim().toUpperCase();

  if (!from || !to) {
    statusEl.textContent = "please enter departure and destination city";
    resultEl.innerHTML = "";
    return;
  }

  statusEl.textContent = "loading...";
  resultEl.innerHTML = "";

  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    const list = data.users;

    const flights = list.map(function (u, index) {
      return {
        airline: u.company.name,
        from: index % 2 === 0 ? "DEL" : "BOM",
        to: index % 2 === 0 ? "BOM" : "DEL",
        price: u.age * 200
      };
    });

    const filtered = flights.filter(function (f) {
      return (
        (f.from === from && f.to === to) ||
        (f.from === to && f.to === from)
      );
    });

    const sorted = filtered.sort(function (a, b) {
      return a.price - b.price;
    });

    if (sorted.length === 0) {
      statusEl.textContent = "no flights";
      return;
    }

    sorted.map(function (f) {
      resultEl.innerHTML +=
        "<div class='card'>" +
        "<div class='price'>₹" + f.price + "</div>" +
        "<div><b>Airline:</b> " + f.airline + "</div>" +
        "<div><b>Route:</b> " + f.from + " → " + f.to + "</div>" +
        "</div>";
    });

    statusEl.textContent = "done";

  } catch (err) {
    statusEl.textContent = "error";
    console.log(err);
  }
}
