// Chat Box

function toggleChat() {
  var chatBox = document.getElementById("chatBox");
  chatBox.style.display = (chatBox.style.display === "block") ? "none" : "block";
}


// DOM Elements
const cryptoGrid = document.querySelector('.crypto-grid');

// Fetch crypto data from CoinGecko API
const fetchCryptoPrices = async () => {
  try {
    const response = await fetch("https://my-web-backend-jd40.onrender.com/api/crypto");
    const data = await response.json();
    cryptoData = data.data; // Store the fetched data in cryptoData
    console.log('Fetched crypto prices:', cryptoData);
    renderCryptoList(); // Render the data after fetching
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
  }
};

// Render all crypto data in a section
const renderCryptoList = () => {
  cryptoGrid.innerHTML = cryptoData
    .map(
      (crypto) => `
        <div class="crypto-item">
          <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
          <p><strong>Price (USD):</strong> $${crypto.quote.USD.price.toFixed(2)}</p>
          <p><strong>Market Cap (USD):</strong> $${crypto.quote.USD.market_cap.toFixed(2)}</p>
          <p><strong>Volume (24h):</strong> $${crypto.quote.USD.volume_24h.toFixed(2)}</p>
          <p><strong>24h Change:</strong> ${crypto.quote.USD.percent_change_24h.toFixed(2)}%</p>
          <p><strong>Last Updated:</strong> ${new Date(crypto.quote.USD.last_updated).toLocaleString()}</p>
        </div>
      `
    )
    .join('');
};

// Fetch crypto data on page load
fetchCryptoPrices();

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true, // Enables infinite scrolling
  autoplay: {
    delay: 2000, // Time in milliseconds (2 seconds)
    disableOnInteraction: false, // Keeps autoplay running after user interaction
  },
});





