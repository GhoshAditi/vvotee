var Voting = artifacts.require("Voting")

module.exports = function(deployer) {
  deployer.deploy(Voting)
}

var Migrations = artifacts.require("Migrations")

module.exports = function(deployer) {
  deployer.deploy(Migrations)
}