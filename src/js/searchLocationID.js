import {options} from './refsAndOptions.js';
let id;
export function searchLocationID (name) {
  return fetch(`https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${name}`, options)
  .then(data => data.json())
  .then(response => {
    response.data.forEach(el => {
      if(el.result_type === 'geos'){ 
        id = el.result_object.location_id;
      }
    })
    return id;
  })
  .catch(err => {console.log(err)});
}