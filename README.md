## Description
    npm package for address conversion form various chains customized, Currently supported EVM chains, TRON, XINFIN, WELUPS Chains.
## Installation
    `npm i crypto-address-converter --save`
    import {crypto-address-converter} from 'crypto-address-converter';
    ```

## How to use
```js

    const cryptoaddressconverter = require('crypto-address-converter')
    console.log(cryptoaddressconverter.convertaddress("TPBkHycN1Hmr2bFcfjvp2fjkca1hfPbPka","TRON","EVM")); //0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1
    console.log(cryptoaddressconverter.convertaddress("0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1","EVM","TRON")); //TPBkHycN1Hmr2bFcfjvp2fjkca1hfPbPka
    console.log(cryptoaddressconverter.convertaddress("0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1","EVM","XINFIN")); //xdc90f8bf6a479f320ead074411a4b0e7944ea8c9c1
    console.log(cryptoaddressconverter.convertaddress("0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1","EVM","WELUPS")); //WPBkHycN1Hmr2bFcfjvp2fjkca1hfPbPka
    
```


## Support
    
    Happy to add more, and need any updates, do get in touch on my telegram over [@chigovara](#https://t.me/chigovera)
