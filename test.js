// requires, etc
var RestClient = require("deribit-api").RestClient;
var restClient = new RestClient('HYhnLyH9qEvs', 'COMKFBE2B3AWWCHREXOIGPGFYTOMLZLF', 'https://test.deribit.com');
restClient.buy('BTC-PERPETUAL', 138, 3544.5, false).then((result) => {
   console.log(result);
});