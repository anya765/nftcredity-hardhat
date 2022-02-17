
async function main() {
  const NFTCerts = await ethers.getContractFactory('NFTCerts')
  const nftCerts = await NFTCerts.deploy()
  await nftCerts.deployed()

  console.log('Contract address: ', nftCerts.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });