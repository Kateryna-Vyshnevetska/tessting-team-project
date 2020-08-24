import { refs, options } from "./refsAndOptions.js";
import { debounce } from "../../node_modules/debounce";
import { searchLocationID } from "./searchLocationID.js";
import restListItem from "../templates/restListItem.hbs";
import restInfo from "../templates/info.hbs";

// const findOfId = searchLocationID(refs.findCity);
// findOfId.then((data) => restListFetch(data));

function restListFetch(data) {
  const url = `https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=15&currency=USD&lang=en_US&location_id=${data}`;
  return fetch(url, options)
    .then((data) => data.json())
    .then((response) => {
      createElement(response.data);
    });
}

refs.findCity.addEventListener("change", setData);

function setData(event) {
  let findOfId = event.target.value;
  let findrest = searchLocationID(findOfId);
  findrest.then((data) => restListFetch(data));
}

function updateMarcup(param) {
  refs.restElem.insertAdjacentHTML("beforeend", param);
}

function createElement(arr) {
  const marcup = restListItem(arr);
  updateMarcup(marcup);
}

function moreInfo(restId) {
  const url = `https://tripadvisor1.p.rapidapi.com/restaurants/get-details?location_id=${restId}&lang=en_US&currency=USD`;
  return fetch(url, options)
    .then((data) => data.json())
    .then((response) => {
      refs.restRefs.innerHTML = restInfo(response);
    });
}

function getNewRest(event) {
  moreInfo(event.target.dataset.id);
}

refs.restLists.addEventListener("click", getNewRest);

function createInfo(param) {
  refs.restRefs.insertAdjacentHTML("beforeend", param);
}
function newInfo(arr) {
  //   refs.restRefs.innerHTML = restInfo(arr);
  //   const infoRefs = restInfo(arr);
  //   createInfo(infoRefs);
}
