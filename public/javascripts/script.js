document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

// const key = myKey
const functionName = 'TIME_SERIES_DAILY';
const symbolName = document.getElementById('symbol-name').innerText; // replazar por variable introducida por el usuario
// const symbolName = 'MSFT'; // replazar por variable introducida por el usuario
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;

axios
.get(apiUrl)
.then(response => {
  printTheChart(response.data) // en vez de console.log -> function printTheChart
})

function printTheChart(stockData) {
  const dailyData = stockData['Time Series (Daily)']
  const stockDates = Object.keys(dailyData)
  const stockPrices = stockDates.map(date => dailyData[date]['4. close'])

  const ctx = document.getElementById('my-chart').getContext('2d')
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockDates,
      datasets: [
        {
          label: symbolName,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: stockPrices
        }
      ]
    }
  }); // closes chart = new Chart()
}