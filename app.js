var btc = document.getElementById("bitcoin");
var usdt = document.getElementById("tether");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
  "async": true,
  "scroosDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Cdogecoin&vs_currencies=inr",
  "method" : "GET",
  "headers" : {}
}

$.ajax(liveprice).done(function(response){
  btc.innerHTML = response.bitcoin.inr;
  usdt.innerHTML = response.tether.inr;
  eth.innerHTML = response.ethereum.inr;
  doge.innerHTML = response.dogecoin.inr;
});