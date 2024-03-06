// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Faucet {
  constructor() payable {}
  
  function withdraw(uint _amount) public {
    // users can only withdraw .001 ETH at a time, feel free to change this!
    require(_amount <= 1000000000000000);
    payable(msg.sender).transfer(_amount);
  }

  // fallback function
  receive() external payable {}
}