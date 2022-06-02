const url = `https://api.coincap.io/v2/assets`;

async function fetchCoin () {
  try {
    const promise = await fetch(url);
    const data = await promise.json();
    // return data;
    appendCoin(data);
  } catch (error) {
    
  }
}

async function convertCoin () {
  try {
    const convertPromise = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
    const convertData = await convertPromise.json();
    return convertData;
  } catch (error) {
    
  }
}

async function appendCoin (dados) {
  // const fetchCoin = await fetchCoin();
  // const converCoin = await convertCoin();
  // console.log(dados);
  // const converCoin = await conversor;
  // console.log(dados, converCoin);
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

appendCoin(fetchCoin());





// ##################################### GABARITO #####################################
// // api.js
// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());

//   return coins;
// };

// const fetchUsdCurrencies = async () => {
//   const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
//   const usdEndpoint = '/currencies/usd.min.json'
//   const url = baseUrl.concat(usdEndpoint);

//   const usdCurrencies = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.usd)
//     .catch((error) => error.toString());

//   return usdCurrencies;
// };

// const setCoins = async () => {
//   const coins = await fetchCoins();
//   const usdCurrencies = await fetchUsdCurrencies();

//   const coinsList = document.getElementById('coins-list');

//   coins
//     .filter((coin) => Number(coin.rank) <= 10)
//     .forEach((coin) => {
//       const newLi = document.createElement('li');
//       const usdPrice = Number(coin.priceUsd);
//       const brlPrice = usdPrice * usdCurrencies.brl;

//       newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

//       coinsList.appendChild(newLi);
//     });
// };

// window.onload = () => setCoins();