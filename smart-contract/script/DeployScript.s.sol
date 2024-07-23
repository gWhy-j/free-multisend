// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {GasliteDrop} from "../src/GasliteDrop.sol";

contract DeployScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    function setUp() public {
        deployerPrivateKey = vm.envUint("DEPLOYER");
        deployer = payable(address(vm.addr(deployerPrivateKey)));
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        new GasliteDrop{salt: bytes32(0)}();

        vm.stopBroadcast();
    }
}
