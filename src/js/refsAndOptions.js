export const refs = {
  flightList: document.getElementById("flight-list"),
  inpFrom: document.getElementById("from"),
  selFrom: document.getElementById("from-select"),
  inpTo: document.getElementById("to"),
  selTo: document.getElementById("to-select"),
  btnSearch: document.getElementById("search"),
  form: document.getElementById("js-form"),
  restElem: document.getElementById("restLists"),
  findCity: document.querySelector(".find-city"),
  restLists: document.getElementById("restLists"),
  restRefs: document.getElementById("information"),
};

// export const options = {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
// 		"x-rapidapi-key": "adb3faaf6fmshd013b9156cce1e2p13bfa5jsn787da1a58e9b"
// 	}
// }
export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key": "9404dff7dcmshec76205010e67cep174dfcjsn0f7c43e5d7fb",
  },
};
