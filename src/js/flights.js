import {refs, options} from './refsAndOptions.js';
import { debounce } from '../../node_modules/debounce';

let userInput;
let from;
let to;

function getFrom(name, type){
  fetch(`https://tripadvisor1.p.rapidapi.com/airports/search?locale=en_US&query=${name}`,options)
  .then(data => data.json())
  .then(response => {
    if(type){
      refs.selFrom.innerHTML = '';
      response.forEach(el => drawHtmlFrom(el.code,el.name))
      refs.selFrom.addEventListener('click', ev => from = ev.target.value)
      }
      else{
        refs.selTo.innerHTML = '';
        response.forEach(el => drawHtmlTo(el.code,el.name))}
        refs.selTo.addEventListener('click', ev => to = ev.target.value)
      })
}

function drawHtmlFrom(code, name){
  refs.selFrom.innerHTML += `<option value="${code}">${name}</option>`;
}

function drawHtmlTo(code, name){
  refs.selTo.innerHTML += `<option value="${code}">${name}</option>`;
}

const checkInput = debounce(function(event) {
  userInput = event.target.value;
  if(userInput.length === 0){
    userInput = '';
  }else if(userInput.length >= 3 && event.target.id === 'from'){
    getFrom(userInput, 1);
  }else if(userInput.length >= 3 && event.target.id === 'to'){
    getFrom(userInput, 0);
  }
}, 500)


function getFlying() {
  const date = '2020-05-15';
  fetch(`https://tripadvisor1.p.rapidapi.com/flights/create-session?currency=USD&ta=1&c=0&d1=${from}&o1=${to}&dd1=${date}`, options)
  .then(data => data.json())
  .then(response => {
    // console.log(response.summary.sh);
    console.log(response);
  })
}

refs.form.addEventListener('input',checkInput);
refs.btnSearch.addEventListener('click', getFlying);