import"./main-BudKLvj8.js";/* empty css             */async function s(){return(await(await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=200")).json()).prices}async function r(){return(await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")).json()).bitcoin.usd}function i(t){return t.reduce((n,o)=>n+o[1],0)/t.length}async function a(){const t=document.querySelector("body"),c=await s(),e=i(c),n=await r(),o=n/e;document.querySelector("#moving-average").textContent=e.toFixed(2)+" USD",document.querySelector("#current-price").textContent=n.toFixed(2)+" USD",document.querySelector("#mayer-multiple").textContent=o.toFixed(2),o>1?(t.classList.add("violet"),t.classList.remove("green")):(t.classList.add("green"),t.classList.remove("violet"))}a();
