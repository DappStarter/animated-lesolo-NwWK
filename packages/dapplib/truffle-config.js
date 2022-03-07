require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember million inflict kiwi bridge general'; 
let testAccounts = [
"0x745faf89d320a909733f18a3af7f15469e14accd5282a7fac95359522db6e7e9",
"0x4b2d6bea9b7ac647aacd64ea34e610501ccb7aa284f9406d32d351a9e302a161",
"0xdbdec9439865c31bc57a3f0f68ee3533079b4684db9e098f96511718f963c95d",
"0xd6eb6a928c74e595b5b114ec46e387c292ae31070e1a8b7261543c8e1c6c01d3",
"0x1d723f961160f63a3c766b8c893d0a0417b1745e35d88d1989fed1d7577fe69a",
"0xaaca5ce1d0e2e1b3bd97ad7e3155f5f4273739b21d523ddf541669e0fe003324",
"0x28e3a5786e2cfa0286999faaf3c95919a8d6ebea07b5611cff741d21f8f5321c",
"0xe46fcbaaaf1a0c249fe4336df6aabf97d3c8dab21de4fe6677563bfc5f1f6c3a",
"0x469184bc94c0fa23a1a4cc6dff4b2020c7b04b797240705e7c58db908a2925bc",
"0x8673a897d1e2f96367783a0859f3f788895ac8653facbb69cbbc1b4cacd1b3fe"
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

