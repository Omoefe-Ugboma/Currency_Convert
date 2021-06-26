import { format } from 'date-fns';
// We have a set of sample rates
const SAMPLE_RATES = {
    AUD: 1.5756,
    BGN: 1.9558,
    BRL: 5.9041,
    CAD: 1.4678,
    CHF: 1.0967,
    CNY: 7.7193,
    CZK: 25.423,
    DKK: 7.4362,
    GBP: 0.85883,
    HKD: 9.2675,
    HRK: 7.4993,
    HUF: 350.52,
    IDR: 17249.38,
    ILS: 3.8791,
    INR: 88.5020,
    ISK: 146.20,
    JPY: 132.20,
    KRW: 1351.07,
    MXN: 23.9678,
    MYR: 4.9654,
    NOK: 10.1740,
    NZD: 1.6903,
    PHP: 58.051,
    PLN: 4.5245,
    RON: 4.9245,
    RUB: 86.2638,
    SEK: 10.1133,
    SGD: 1.6039,
    THB: 38.016,
    TRY: 10.3802,
    USD: 1.1919,
    ZAR: 17.0028,
    EUR:0.83825,
    NGN:412.975,
  };

export const api = (_path = "") => {
    const [path] = _path.split("?"); 

    if(path.length === 0){
        return Promise.reject(new Error("Path is required."));
    }

    if(path !== "/latest"){
        return Promise.reject(new Error("Invalid path."));
    }

    const baseCurrency = _path.split("base=")[1];
    console.log(baseCurrency);

    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            base: baseCurrency,
            date: format(new Date(), 'yyyy-MM-dd'),
            rates: {
              ...SAMPLE_RATES,
              [baseCurrency]: 1,
            },
          });
        }, 500);
      });
}; 