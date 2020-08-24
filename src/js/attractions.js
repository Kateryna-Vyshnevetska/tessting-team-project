// import { refs, options } from "./refsAndOptions.js";
import { debounce } from "../../node_modules/debounce";
// import { refs } from "./refsAndOptions";
// import { searchLocationID } from "./searchLocationID.js";

// ======================================options======================================
const refs = {
  attractItems: document.getElementById("attraction-items"),
  attractDetails: document.getElementById("attraction-details"),
};

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key": "62518e01dbmsh4668cb3dc15d955p11e1b0jsnd48c0b453df6",
  },
};

let id;
function searchLocationID(name) {
  return fetch(
    `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${name}`,
    options
  )
    .then((data) => data.json())
    .then((response) => {
      response.data.forEach((el) => {
        if (el.result_type === "geos") {
          id = el.result_object.location_id;
        }
      });
      return id;
    })
    .catch((err) => {
      console.log(err);
    });
}

// =======================================================================================

const input = prompt("Where are you going?");
const locationId = searchLocationID(input);

locationId.then((data) => attractList(data));

const attractList = (data) => {
  fetch(
    `https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&location_id=${data}`,
    options
  )
    .then((data) => data.json())
    .then((response) => {
      response.data.forEach((el) => {
        createHtml(el.location_id, el.name);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

refs.attractItems.addEventListener("click", getValue);

function createHtml(id, name) {
  refs.attractDetails.innerHTML += `<li data-id=${id}>${name}</li>`;
}

function getValue(event) {
  const id = event.target.dataset.id;
  showItem(id);
}

function showItem(id) {
  fetch(
    `fetch("https://tripadvisor1.p.rapidapi.com/attractions/get-details?currency=USD&lang=en_US&location_id=${id}&`,
    options
  )
    .then((data) => data.json())
    .then((response) => {
      const attractObj = response.data[0];
      drownHTML(
        attractObj.name,
        attractObj.location_string,
        attractObj.photo,
        attractObj.web_url,
        attractObj.reviews,
        attractObj.description,
        attractObj.address,
        attractObj.lowest_price,
        attractObj.lowest_ticket_price
      );
      console.log(attractObj);
    });
}

function drownHTML(
  name,
  location_string,
  photo,
  web_url,
  reviews,
  description,
  address,
  lowest_price,
  lowest_ticket_price
) {
  refs.attractDetails.innerHTML += `<li>Name: ${name}</li><li>Location: ${location_string}</li><li>Photo: ${photo}</li><li>Web url: ${web_url}</li><li>Reviews: ${reviews}</li><li>Description: ${description}</li><li>Address: ${address}</li><li>Lowest price: ${lowest_price}</li><li>Lowest ticket price: ${lowest_ticket_price}</li>`;
}
