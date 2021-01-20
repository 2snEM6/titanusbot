const axios = require('axios');

const getCoinInfo = async (ticker) => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    const apiResponse = response.data;
    const cryptoInfo = apiResponse.find(_crypto => _crypto.symbol.toLowerCase() === ticker.toLowerCase() || _crypto.id.toLowerCase() === ticker.toLowerCase());
    return cryptoInfo;
}

const getCoinPrice = async (coinTicker) => {
    try {
        const { id, symbol } = await getCoinInfo(coinTicker);
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`);
        const price = response.data[`${id}`].usd;
        return { price, ticker: symbol };
    } catch (err) {
        return undefined;
    }
 }

module.exports = {
  getCoinPrice,
}