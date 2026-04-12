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
      return {
        airline: u.company.name,
        from: index % 2 === 0 ? "DEL" : "BOM",
        to: index % 2 === 0 ? "BOM" : "DEL",
        price: u.age * 200
      };
    });

    const sorted = flights.sort(function (a, b) {
      return a.price - b.price;
    });

    resultEl.innerHTML = "";

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