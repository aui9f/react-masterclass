export function fetchCoins(){
    return fetch('https://api.coinpaprika.com/v1/coins').then(res=>{
        return res.json();
    })
}