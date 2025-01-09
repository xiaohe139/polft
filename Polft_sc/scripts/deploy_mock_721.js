const hre = require("hardhat");
const {ethers, upgrades} = require("hardhat");
async function main() {
    const mock721Contract = await hre.ethers.getContractAt("ERC721Mock", '0xFA0bF8c359e83191b017Bb8f8383BBF915F6Ad39');


    // for (let i = 0; i < 10; i++) {
    //       await mock721Contract.safeMint('0xA6cBf5d84c2A1032E6aB55DFdA4a4916A8D8aaf3','https://silver-obedient-kangaroo-214.mypinata.cloud/ipfs/bafkreiensdvoxqkzsup2kcjyicpdxgiuqwiwox35fonh4disdo2umtzj7i')
    // }


    let LendContract = await hre.ethers.getContractAt("PolftRent", '0x1b54ff158684402D9a8E15C11b3076ADDAF695Fd');


    let token = await hre.ethers.getContractAt('Usdt', '0x571C02E1F981EEd9b241be144949a8E85C2fa683');
    // tx = await token.approve(LendContract.address,'1000000000000000000');
    // tx = await mock721Contract.setApprovalForAll(LendContract.address, true);
    // await  LendContract.setCurrencyAddress('0xAE13B6797A08634592EB289E20D5BD0b56B4AaD7');
    // tx = await LendContract.lend(
    //     [mock721Contract.address],
    //     [3],
    //     [1],
    //     [2 * 86400],
    //     [50],
    //     [500],
    //     ['0x571C02E1F981EEd9b241be144949a8E85C2fa683']
    // );
    // await tx.wait();


    const [a, renter] = await hre.ethers.getSigners();



    // token = await hre.ethers.getContractAt('Usdt', '0x571C02E1F981EEd9b241be144949a8E85C2fa683',renter);
    // token.approve(LendContract.address,'10000000000000000');
    //
    LendContract = await hre.ethers.getContractAt("PolftRent", '0x1b54ff158684402D9a8E15C11b3076ADDAF695Fd',renter);



    tx = await LendContract.rent(
        [mock721Contract.address],
        [5],
        [3],
        [2 * 86400]
    )
}



main()