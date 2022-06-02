// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const appendLog = (data) => {
  const h2 = document.querySelector('#jokeContainer');
  h2.innerHTML = data.joke;
}


const fetchJoke = () => {
  

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const promise = fetch(API_URL, myObject);
  promise
    .then((response) => response.json())
    .then((data) => {
      appendLog(data);
    });
};

window.onload = () => fetchJoke();