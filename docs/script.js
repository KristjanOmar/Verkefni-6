const x = document.getElementById("prufa");

console.log('a');

/*function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}*/

/*
const lat = 64.1100;
const long = -21.8788;

async function getVedurData() {
  try {
    let response = await fetch("https://api.vedur.is/cap/v1/lat/64.1100/long/-21.8788/srid/4326/distance/10/", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    let responseData = await response.json();
    //console.log("API request body:", requestBody)
    console.log("API svar:", responseData["is"]);
  
    return responseData.data;
  } catch (error) {
    console.error("Error: ", error);
  }

}

console.log(getVedurData());
*/

fetch("https://xmlweather.vedur.is/?op_w=xml&type=forec&lang=is&view=xml&ids=1");
