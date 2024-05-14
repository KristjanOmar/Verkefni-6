console.log("Script loaded");

// Reyndi að sækja gögn frá veðurstofunni en fékk tómt JSON
// (Sækja þarf "CAP message identifier" áður en hægt er að sækja rétt gögn)
/*
const lat = 64.1100;
const long = -21.8788;

async function getID() {
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

console.log(getID());
*/


// Reyndi einnig að sækja gögn frá veðurstofunni í XML-formi en fékk CORS error í hvert skipti
// Reyndi eftirfarandi aðferðir: live server, node.js local server, VS Code port forwarding, GitHub pages
/*
async function getVedurData() {
  try {
    console.log("Byrjar fetch...");
    await fetch("https://xmlweather.vedur.is/?op_w=xml&type=forec&lang=is&view=xml&ids=1", {
      method: "GET",
      headers: { "Content-Type": "application/xml" }
    });
    console.log("Fetch tókst!");
  } catch (error) {
    console.error("Error: ", error);
  }
}

getVedurData();
*/


// Nota tilbúin JSON gögn fyrir veður
let timi = new Date().toLocaleTimeString();
let nuverandiTimi = new Date(`2013-09-17T${timi}`); // Gefum okkur að nuverandiTimiinn í dag sé 17/09/2013

async function getVedurData() {
  let response = await fetch("./data.json")
  let json = await response.json();

  // !!! Þarf að implement-a Geolocation API !!!
  json['results'].forEach(stadur => {
    if(stadur.name === "Reykjavík") {
      spaDagsTimar = [];

      stadur.forecast.forEach(spa => {
        spaTimi = new Date(spa.ftime);
        if (spaTimi.toLocaleDateString() == nuverandiTimi.toLocaleDateString()) {
          spaDagsTimar.push(spaTimi);
        }
      });

      console.log(mismunurTima);
    }
  });
}
getVedurData();

//getVedurData().then(json => console.log(json));



//import anime from 'animejs/lib/anime.es.js';

const rays = document.getElementsByClassName("rays")[0];
const rayArray = Array.from(document.getElementsByClassName('ray'));

/*
const baseX = 0;
const baseY = 0;
let x = 0;
let y = 0;
let radianMultiplicationFactor = 0;
rays.forEach(element => {
  if (radianMultiplicationFactor != 6) {
    if (radianMultiplicationFactor > 0) {
      radianMultiplicationFactor *= -1;
    } else if (radianMultiplicationFactor < 0) {
      radianMultiplicationFactor *= -1;
      radianMultiplicationFactor++;
    }
  }
});*/

/*anime({
  targets: '.square',
  translateX: 250,
  rotateZ: 360,
  scale: 3,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
  loop: true
})*/
/*anime({
  targets: '.square',
  keyframes: [
    {translateX: 250, scale: 1},
    {translateY: 50, scale: 1.5},
    {translateX: -250, scale: 2},
    {translateY: -50, scale: 2.5}
  ],
  duration: 3000,
  loop: true
});*/

// ----- Sól -----
let stor = true;
let i = 0;
rayArray.forEach((ray, index) => {
  const angle = index * (360 / rayArray.length);
  let x = Math.cos(angle * (Math.PI / 180)) * 70;
  const y = Math.sin(angle * (Math.PI / 180)) * 70;

  ray.style.transform = `translate(${x}px, ${y}px) rotate(${angle+90}deg)`;
  if (stor) {
    ray.style.background = "yellow";
    stor = false;
  } else {
    stor = true;
  }
  i++;
});

anime({
  targets: ".ray",
  //rotateZ: 360,
  keyframes: [
    {scaleY: 1.2},
    {scaleY: 1},
    {scaleY: 1.2},
    {scaleY: 1},
    {scaleY: 1.2},
    {scaleY: 1},
    {scaleY: 1.2},
    {scaleY: 1},
    {scaleY: 1.2},
    {scaleY: 1}
  ],
  //translateY: 5,
  duration: 10000,
  easing: "linear",
  //direction: "alternate",
  loop: true
})
anime({
  targets: ".rays",
  //rotateZ: 360,
  duration: 10000,
  easing: "linear",
  loop: true
})
// ----- Sól -----

/*rays.forEach((ray, index) => {
  const angle = index * (360 / rays.length);
  anime({
    targets: ray,
    rotate: angle + 'deg',
    translateX: '50%',
    translateY: '-50%',
    easing: 'linear',
    duration: 5000,
    loop: true
  });
});*/
