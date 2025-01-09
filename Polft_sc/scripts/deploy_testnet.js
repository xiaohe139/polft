const hre = require("hardhat");
const {ethers, upgrades} = require("hardhat");

// const OWNER_ADDRESS = "0xb8e28e6187B30aA816816e399Bcc711835251E78";
// const FIXED_DAI_ADDRESS_ERC20 = "0xd555d9CF3fd5F0C5F806EF7B5D9236E04CF938EA";

async function main() {
    let data = {};
    const Whitelist = await hre.ethers.getContractFactory("Whitelist");
    const whitelistProxy = await upgrades.deployProxy(Whitelist, [], {
        kind: "uups",
    });
    const Marketplace = await hre.ethers.getContractFactory("Marketplace");
    const marketplaceProxy = await upgrades.deployProxy(
        Marketplace,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    );
    const Offer = await hre.ethers.getContractFactory("Offer");
    const offerProxy = await upgrades.deployProxy(
        Offer,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    );
    const Treasury = await hre.ethers.getContractFactory("Treasury");
    const treasuryProxy = await upgrades.deployProxy(
        Treasury,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    );
    const Polft721 = await hre.ethers.getContractFactory("Polft721");
    const Polft721Proxy = await upgrades.deployProxy(
        Polft721,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    );
    const Polft1155 = await hre.ethers.getContractFactory("Polft1155");
    const Polft1155Proxy = await upgrades.deployProxy(
        Polft1155,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    );

    const Currency = await hre.ethers.getContractFactory("Currency");
    const currencyProxy = await upgrades.deployProxy(
        Currency,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    );

    let tx;

    tx = await whitelistProxy.addGrantRole('0xA6cBf5d84c2A1032E6aB55DFdA4a4916A8D8aaf3');
    await tx.wait();

    // Offer setting
    tx = await offerProxy.setCurrencyAddress(currencyProxy.address);
    await tx.wait();
    tx = await offerProxy.setTreasuryAddress(treasuryProxy.address);
    await tx.wait();

    // Marketplace setting
    tx = await marketplaceProxy.setCurrencyAddress(currencyProxy.address);
    await tx.wait();
    tx = await marketplaceProxy.setTreasuryAddress(treasuryProxy.address);
    await tx.wait();


    /// Token Fee
    const TokenFee = await hre.ethers.getContractFactory("Usdt");
    const TokenFee_contract = await TokenFee.deploy();

    tx = await TokenFee_contract.mint('1000000000000000000000000000000');
    await tx.wait();


    tx = await currencyProxy.addCurrency(
        TokenFee_contract.address,
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/binance-coin-bnb-7266775-5978349.png?f=avif&w=256"
    ); // Token_Fee Address
    await tx.wait();

    // Setting Polftnft
    tx = await Polft721Proxy.setContractURI(
        "http://ipfs/QmU5HWmp2g3qhJ2F3NqbvSzqqBJrLuFmZFRZNPhr5NrJqL"
    );
    await tx.wait();
    tx = await Polft1155Proxy.setContractURI(
        "http://ipfs/QmcSm65qpdPoSfUifT7uDskJhuMn85Fwbr41pAxCkrNeKt"
    );
    await tx.wait();

    // Deploy Rent Contract
    let PolftRentContract =  await hre.ethers.getContractFactory("PolftRent");
    let PolftRent = await PolftRentContract.deploy(whitelistProxy.address);

    await PolftRent.setCurrencyAddress(currencyProxy.address);

    await PolftRent.setTreasuryAddress(treasuryProxy.address);

    let PolftLendContract =  await hre.ethers.getContractFactory("PolftLend");
    let PolftLendProxy = await upgrades.deployProxy(
        PolftLendContract,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    )

    await PolftLendProxy.setCurrencyAddress(currencyProxy.address);





    data.marketplace = {
        address: marketplaceProxy.address,
        hash: marketplaceProxy.deployTransaction.hash,
        arguments: [],
    };
    data.offer = {
        address: offerProxy.address,
        hash: offerProxy.deployTransaction.hash,
        arguments: [],
    };
    data.Polft721 = {
        address: Polft721Proxy.address,
        hash: Polft721Proxy.deployTransaction.hash,
        arguments: [],
    };
    data.Polft1155 = {
        address: Polft1155Proxy.address,
        hash: Polft1155Proxy.deployTransaction.hash,
        arguments: [],
    };
    data.currency = {
        address: currencyProxy.address,
        hash: currencyProxy.deployTransaction.hash,
        arguments: [],
    };
    data.whitelist = {
        address: whitelistProxy.address,
        hash: whitelistProxy.deployTransaction.hash,
        arguments: [],
    };
    data.token = {
        address: TokenFee_contract.address,
        hash: TokenFee_contract.deployTransaction.hash,
    }
    data.PolftLend = {
        address: PolftLendProxy.address,
        hash: PolftLendProxy.deployTransaction.hash,
    }
    data.PoftRent = {
        address: PolftRent.address,
        hash: PolftRent.deployTransaction.hash,
    }

    console.log("Data", data);
    console.log(
        "--------------------------------------------------------------------------"
    );

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
//
// Data {
//     marketplace: {
//         address: '0xc9086Ba53c16Ba646a4c5bc94aD23B4f47b52784',
//             hash: '0xc141887cc89c49ecf6abf27679ee3e1b6a3934213d0c69deebe1124af8b32277',
//             arguments: []
//     },
//     offer: {
//         address: '0xfE007B96Ba8253AC0046650144915eFBa8DA188A',
//             hash: '0xdbd45b720e96afaf8380708799feaad914441e72672f4708ade0540578ccf5f9',
//             arguments: []
//     },
//     Polft721: {
//         address: '0xC5D0d654fD359723647ee83D53abaCe9133b9b5b',
//             hash: '0x4356caa147ef24f132e72980aa5aa75a07c6a0ad1ed7d7087e11613b64bfd8ae',
//             arguments: []
//     },
//     Polft1155: {
//         address: '0xb8C1c784aa548538ff65774EfcD5574dB3836e73',
//             hash: '0x5cac1409f3930a856aa64f6b301c316787e1ad4b39c3bb196f5f24f5c12ceab8',
//             arguments: []
//     },
//     currency: {
//         address: '0xAE13B6797A08634592EB289E20D5BD0b56B4AaD7',
//             hash: '0x9ec4be4099b8718e5b26ac20e074f99b373cf3cb9ab9caa7e94d42f96613e883',
//             arguments: []
//     },
//     whitelist: {
//         address: '0x9F84bb19fBd1BD8B7222eb6B890927C50872a871',
//             hash: '0x4573b9fd77560dd959f2a5dd8bf55b9e430f963db098bc30bf7024fbc1183664',
//             arguments: []
//     },
//     token: {
//         address: '0x571C02E1F981EEd9b241be144949a8E85C2fa683',
//             hash: '0xdc39e5ef2b7ee5076bf17c53374628db5c191cadb9c9f5f2e63ec5e68c211f65'
//     },
//     PolftLend: {
//         address: '0x7Fb55f3c57afea7BCC500722B23B8aE3Ad39E96c',
//             hash: '0xc0db0dccdc01b5145faf3acdf65a3999b4c1fff72590faeb1895ed65d7416db9'
//     },
//     PoftRent: {
//         address: '0x1b54ff158684402D9a8E15C11b3076ADDAF695Fd',
//             hash: '0x320eee54d4e302fb1b1790033378fb365a6817d3317885614970aef559bf9f56'
//     }
// }
// --------------------------------------------------------------------------
