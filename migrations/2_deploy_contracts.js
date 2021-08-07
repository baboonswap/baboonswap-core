const BaboFactory = artifacts.require("BaboFactory");
const BaboERC20 = artifacts.require("BaboERC20");

module.exports = async function (deployer, _network, addresses) {
    const FEE_ADDRESS = addresses[0];

    console.log('Started Deploying BaboERC20')
    await deployer.deploy(BaboERC20);
    const baboERC20 = await BaboERC20.deployed();
    console.log('Finished Deploying  BaboERC20')

    console.log('Started Deploying BaboFactory')
    await deployer.deploy(BaboFactory, FEE_ADDRESS);
    const baboFactory = await BaboFactory.deployed();
    console.log('Finished Deploying  BaboFactory')
};
