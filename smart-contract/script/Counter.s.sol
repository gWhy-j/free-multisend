// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/Counter.sol";

contract CounterScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    function setUp() public {
        deployerPrivateKey = vm.envUint("DEPLOYER");
        deployer = payable(address(vm.addr(deployerPrivateKey)));
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        Counter counter = new Counter();

        counter.increment();
        vm.stopBroadcast();
    }
}
