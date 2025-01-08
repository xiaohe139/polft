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

    tx = await whitelistProxy.addGrantRole('0xB860f66671B9bb006Ca8425baF12f7dAB0a2Cabb');
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


    // // CURRENCY setting
    // if (FIXED_DAI_ADDRESS_ERC20) {
    // 	tx = await currencyProxy.addCurrency(
    // 		"0xd555d9CF3fd5F0C5F806EF7B5D9236E04CF938EA",
    // 		"https://imgs.search.brave.com/Aq8sa18AW9rN3NN2eCKDW8ZdYy5cGDJSbgR1SehCqk4/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9ibG9j/a29ub21pLTlmY2Qu/a3hjZG4uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEw/L2Jsb2Nrb25vbWkt/ZGFpLXJlYnJhbmQt/MTAyNHgxMDI0LnBu/Zw"
    // 	); // DAI ADDRESS
    // 	await tx.wait();
    // }

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

    await PolftRent.setCurrencyAddress(TokenFee_contract.address);

    await PolftRent.setTreasuryAddress(treasuryProxy.address);

    let PolftLendContract =  await hre.ethers.getContractFactory("PolftLend");
    let PolftLendProxy = await upgrades.deployProxy(
        PolftLendContract,
        [whitelistProxy.address],
        {
            kind: "uups",
        }
    )

    await PolftLendProxy.setCurrencyAddress(TokenFee_contract.address);





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
