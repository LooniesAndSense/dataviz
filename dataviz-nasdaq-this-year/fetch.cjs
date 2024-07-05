// fetchData.js
const axios = require('axios');
const fs = require('fs');

const API_KEY = 'faa75a0d31894db7b2ad6c4b1534f64c';
const NASDAQ100_SYMBOLS = [
        "MSFT",
        "AAPL",
        "NVDA",
        "GOOGL",
        "GOOG",
        "AMZN",
        "META",
        "AVGO",
        "TSLA",
        "ASML",
        "COST",
        "NFLX",
        "AMD",
        "AZN",
        "QCOM",
        "ADBE",
        "PEP",
        "LIN",
        "TMUS",
        "PDD",
        "AMAT",
        "CSCO",
        "TXN",
        "INTU",
        "AMGN",
        "MU",
        "ISRG",
        "CMCSA",
        "HON",
        "LRCX",
        "BKNG",
        "INTC",
        "VRTX",
        "ADI",
        "REGN",
        "KLAC",
        "PANW",
        "ADP",
        "ABNB",
        "CRWD",
        "SNPS",
        "SBUX",
        "MDLZ",
        "CDNS",
        "GILD",
        "MELI",
        "CTAS",
        "NXPI",
        "MAR",
        "CEG",
        "PYPL",
        "MRVL",
        "CSX",
        "ORLY",
        "ROP",
        "PCAR",
        "WDAY",
        "MRNA",
        "CPRT",
        "MNST",
        "MCHP",
        "ADSK",
        "ROST",
        "TTD",
        "FTNT",
        "AEP",
        "KDP",
        "DXCM",
        "DASH",
        "PAYX",
        "TEAM",
        "IDXX",
        "CHTR",
        "DDOG",
        "KHC",
        "VRSK",
        "ODFL",
        "LULU",
        "EA",
        "FAST",
        "EXC",
        "GEHC",
        "CCEP",
        "BIIB",
        "FANG",
        "CTSH",
        "BKR",
        "ON",
        "CSGP",
        "CDW",
        "XEL",
        "ANSS",
        "ZS",
        "GFS",
        "TTWO",
        "DLTR",
        "WBD",
        "ILMN",
        "MDB",
        "WBA",
        "SIRI"
]

async function fetchDailyClosePrices(symbol) {
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}&outputsize=2500&type=stock&start_date=2024-01-01&format=JSON`;
    const response = await axios.get(url);
    return response.data;
}

async function fetchAllData() {
    const allData = {};
    for (const symbol of NASDAQ100_SYMBOLS) {
        const data = await fetchDailyClosePrices(symbol);
        allData[symbol] = data.values; // Assuming 'values' contains the time series data
	sleep(1000);
    }
    fs.writeFileSync('nasdaq100_data.json', JSON.stringify(allData, null, 2));
}

fetchAllData().catch(console.error);

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
