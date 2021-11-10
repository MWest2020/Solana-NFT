//Dependencies needed to work with Solana and create SPL-tokens. A NFT is 
//basically an unique token

var web3 = require('@solana/web3.js');
var splToken = require('@solana/spl-token');

//change to mainnet when minting live
(async () => {
  // Connect to cluster
  var connection = new web3.Connection(
    web3.clusterApiUrl("devnet"),
    'confirmed',
  );
})
