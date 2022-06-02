const url = `https://api.coincap.io/v2/assets`;

function appendCoin (dados) {
  const ul = document.querySelector('#coinContainer');

  const dataFilter = dados.data.filter(({rank}) => rank <=10);
  const nomePreco = dataFilter.map(({name, priceUsd}) => `A cripto moeda ${name} está de ${priceUsd} dolares.`);
  nomePreco.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = element;
    ul.appendChild(li);
  });
  console.log(nomePreco);
}

async function fetchCoin () {
  try {
    const promise = await fetch(url);
    const data = await promise.json();
    appendCoin(data);
  } catch (error) {
    
  }
  
}

fetchCoin ();