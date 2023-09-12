// SPDX-License-Identifier: GPL-3.0
        
pragma solidity >=0.4.22 <0.9.0;

import "../contracts/SafeSmartContract.sol";

contract TestSafeSmartContract {
    SafeSmartContract safeSmartContract;

    constructor() {
        safeSmartContract = new SafeSmartContract();
    }

    function test() public {
        // Test 1: Token kilidini acma
        safeSmartContract.unlockTokens();
        
        // Test 2: Token kilitleme
        safeSmartContract.lockTokens(100, 1); // Kilit süresini 1 olarak ayarla
        (uint256 amount,,) = safeSmartContract.lockers(address(this));
        assert(amount == 100);

        // Test 3: Ödül hesaplama
        (,,uint256 reward) = safeSmartContract.lockers(address(this));
        assert(reward == 1); // 1 günlük kilit süresi için ödül

        // Test 4: Token kilidini acma
        safeSmartContract.unlockTokens();
        (amount,,) = safeSmartContract.lockers(address(this));
        assert(amount == 0);
    }
}

