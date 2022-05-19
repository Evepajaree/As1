import axios from "axios";
const url1 = 'https://ftx.com/api/markets/BTC/USDT';
const url2 = 'https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
let a: number=0;
let b: number=0;

axios.get(url1).then(response => {
    console.log("Binance BTC Price:"+ response.data.result.price+"USDT")
    a=response.data.result.price;
    axios.get(url2).then(response => {
        console.log("FTX BTC Price:"+ response.data.price+"USDT")
        b=response.data.price
        const sum = a - b;
        console.log(sum);
    });
});

