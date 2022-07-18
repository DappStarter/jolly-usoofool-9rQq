require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture struggle rifle sad under hunt kiwi army giggle'; 
let testAccounts = [
"0xb554e4e957848233088cb43c9eccc1396f3759df534bcb82348d00be44d2c096",
"0xc37cdd7643c5e60ffe0b0322c9e536669f16dc913964aba5582acdb62e2c9f59",
"0x1d9767f05158af664a05dfc3ee430af4527e205ae62ff6dd63df698626fef9ee",
"0x26b9e3f78b65da1dcafa6aaa141cdb599d95828eb21a2625467012a03fbd923a",
"0x57fcf7fae8cedbd5fdd75c686678d97a7c764acc2723ee0917dea236df871785",
"0x998fc2535dc19a671becb3b1844a251e4280f468eb5130bb3dfbb6439db9aa31",
"0xb1d5710038f62dace790915df7a13355ad86ad6c20706fe2b8cdf8fbb21422cc",
"0x5c1f53e1527b88cfffecf2b38486f80cc83b82e445af6e1aac0994dca35628ee",
"0xa702249a7661d7383c234656b4bce5a36241fc701113eb47d49385c2dc991581",
"0x673f0a14b5e13754be33b6440fd81d553c21f9ecd9223ec06a560394cb233ef6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

