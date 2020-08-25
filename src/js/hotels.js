import { refs, options } from "./refsAndOptions.js";
import { debounce } from "../../node_modules/debounce";
import { searchLocationID } from "./searchLocationID.js";

const input = prompt("Enter place:");
const inputNights = prompt("Enter nights:");
const id = searchLocationID(input);
id.then((data) => restList(data));

const restList = (data) => {
  fetch(
    `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${data}&adults=1&checkin=2020-09-07&rooms=1&nights=${inputNights}`,
    options
  )
    .then((data) => data.json())
    .then((respons) => {
      respons.data.forEach((element) => {
        madeHtml(element.location_id, element.name);
      });
    });
};
refs.hotelsProp.addEventListener("click", getValue);

function madeHtml(id, name) {
  refs.hotelsProp.innerHTML += `<li data-id=${id}>${name}</li>`;
}

function getValue(event) {
  const id = event.target.dataset.id;
  showItem(id);
}

function showItem(id) {
  fetch(
    `https://tripadvisor1.p.rapidapi.com/hotels/get-details?adults=1&nights=2&currency=USD&lang=en_US&child_rm_ages=7%252C10&checkin=2020-09-07&location_id=${id}`,
    options
  )
    .then((data) => data.json())
    .then((response) => {
      const hotelObj = response.data[0];
      drowHtml(
        hotelObj.name,
        hotelObj.address,
        hotelObj.description,
        hotelObj.email,
        hotelObj.hotel_class,
        hotelObj.price,
        hotelObj.ranking_geo,
        hotelObj.web_url
      );
      console.log(hotelObj);
    });
}

function drowHtml(
  name,
  address,
  description,
  email,
  hotel_class,
  price,
  ranking_geo,
  web_url
) {
  refs.hotelInfo.innerHTML += `<li>Name: ${name}</li><li>Address: ${address}</li><li>Description: ${description}</li><li>Email: ${email}</li><li>Hotel class: ${hotel_class}</li>
    <li>Price: ${price}</li><li>Ranking geo: ${ranking_geo}</li><li>Web url: ${web_url}</li>`;
}
