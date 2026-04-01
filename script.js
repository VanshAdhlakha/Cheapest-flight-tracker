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


    const index = Math.floor(Math.random() * data.length);
const show = data[index].show;
const airline = show.name;
 const price = show.id ;

resultEl.innerHTML =
          "<div class='card'>" +
     "<div class='price'>₹" +
                                price +
"</div>" +
        "<div><b>Airline:</b> " +
                                  airline +
 "</div>" +
"</div>";



    statusEl.textContent = "done";
  } catch (err) {
    statusEl.textContent = "error";
  }
}