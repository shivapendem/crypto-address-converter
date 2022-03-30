const TronWeb = require('tronweb');
const tronWeb = new TronWeb(
  'http://127.0.0.1:9090',
  'http://127.0.0.1:9090',
  'http://127.0.0.1:9090',
  'd6fbbf6eecffdb32172e391363a401f89617acb9dd01897b9fa180830a8a46b2',
);
var WAValidator = require('multicoin-address-validator');

const bs58 = require('bs58');


function EthereumtoTRON(ethadddress) {
    const addressInHexFormat = ethadddress.replace('0x', '41');
    const addressInBase58 = tronWeb.address.fromHex(addressInHexFormat);
    return addressInBase58;
};
function TRONtoETH(TronAdddress) {
  const bytes = bs58.decode(TronAdddress)
  var addressbuffer=Buffer.from(bytes).toString('hex');
  return ("0x"+addressbuffer.substring(2, 42));
};
function trontowelups(address) {
  if(address.startsWith("T") || address.startsWith("t"))
  {
    address1= address.split("T").join('!');
    address2= address1.split("W").join('@');
    address3= address2.split("t").join('#');
    address4= address3.split("w").join('$');
    address5= address4.split("!").join('W');
    address6= address5.split("@").join('T');
    address7= address6.split("#").join('w');
    address= address7.split("$").join('t');
  }
  return address;
}
function welupstotron(address) {
  if(address.startsWith("W") || address.startsWith("w"))
  {
    address1= address.split("T").join('!');
    address2= address1.split("W").join('@');
    address3= address2.split("t").join('#');
    address4= address3.split("w").join('$');
    address5= address4.split("!").join('W');
    address6= address5.split("@").join('T');
    address7= address6.split("#").join('w');
    address= address7.split("$").join('t');
  }
  return address;
}
function xinfintoethereum(address) {
    if(address.startsWith("xdc"))
    {
        return "0x"+address.slice(3);
    } else {
        return address;
    }
}
function ethereumtoxinfin(address) {
    if(address.startsWith("0x"))
    {
        return "xdc"+address.slice(2);
    } else {
        return address;
    }
}
function convertaddress(address, from, to)
{
  if(from ==to)
    return address;
  else
  {
    switch(from) {
      case "EVM":
        var valid = WAValidator.validate(address, 'Ethereum');
        if(!valid)
              return "";
        else
            switch(to) 
            {
                case "TRON":
                    return EthereumtoTRON(address);
                break;
                case "WELUPS":
                  return trontowelups(EthereumtoTRON(address));
                break;
                case "XINFIN":
                  return ethereumtoxinfin(address);
                break;
                default:
                return "";
            }
        break;
      case "TRON":
        var valid = WAValidator.validate(address, 'Tron');
        if(!valid)
              return "";
        else
            switch(to) 
            {
                case "EVM":
                    return TRONtoETH(address);
                break;
                case "WELUPS":
                  return trontowelups(address);
                break;
                case "XINFIN":
                  return ethereumtoxinfin(TRONtoETH(address));
                break;
                default:
                return "";
            }
        break;
      case "WELUPS":
        var valid = WAValidator.validate(welupstotron(address), 'Tron');
        if(!valid)
              return "";
        else
            switch(to) 
            {
                case "EVM":
                    return TRONtoETH(welupstotron(address));
                break;
                case "TRON":
                  return welupstotron(address);
                break;
                case "XINFIN":
                  return ethereumtoxinfin(TRONtoETH(welupstotron(address)));
                break;
                default:
                return "";
            }
        break;  
      case "XINFIN":
        var valid = WAValidator.validate(xinfintoethereum(address), 'Ethereum');
        if(!valid)
              return "";
        else
            switch(to) 
            {
                case "EVM":
                    return xinfintoethereum(address);
                break;
                case "TRON":
                  return EthereumtoTRON(xinfintoethereum(address));
                break;
                case "WELUPS":
                  return trontowelups(EthereumtoTRON(xinfintoethereum(address)));
                break;
                default:
                return "";
            }
        break;  
      default:

        return "";
        // code block
    }
  }
}    
module.exports = {privateKeyToTronAddress}
