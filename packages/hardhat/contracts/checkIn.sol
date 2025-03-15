//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


interface ICheckIn {
    function checkIn() external;
}

contract CheckIn {
    
    ICheckIn public batchRegistry; // State variable to store BatchRegistry contract reference

    // Constructor receives the address of BatchRegistry and assigns it to `batchRegistry`
    constructor(address _batchRegistryAddress) {
        require(_batchRegistryAddress != address(0), "Invalid address");
        batchRegistry = ICheckIn(_batchRegistryAddress);
    }

    // Function to call `checkIn` on the BatchRegistry contract
    function checkInUser() external {
        batchRegistry.checkIn();
    }
    
}