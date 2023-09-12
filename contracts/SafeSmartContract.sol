// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;


contract SafeSmartContract {
    // Token Kilitleme ve Ödül Mekanizması
struct Locker {
    uint256 amount; // Kilitlenen token miktarı
    uint256 unlockTime; // Token kilidinin açılacağı zaman
    uint256 reward; // Kullanıcının kazanacağı ödül miktarı
}

    // Her kullanıcının Locker yapısını saklayan mapping
mapping(address => Locker) public lockers;

// Token kilitleme fonksiyonu
function lockTokens(uint256 _amount, uint256 _durationInDays) public {
    require(lockers[msg.sender].amount == 0, "Zaten kilitli tokenleriniz var");
    // Token transfer işlemleri (Kilitlenen tokenleri sözleşmeye transfer etme )
    lockers[msg.sender] = Locker({
        amount: _amount,
        unlockTime: block.timestamp + _durationInDays * 1 days,
        reward: calculateReward(_amount, _durationInDays) // Ödül miktarını hesaplama

    });
}

// Token kilidini açma fonksiyonu
function unlockTokens() public {
     require(lockers[msg.sender].unlockTime <= block.timestamp , "Henuz kilidin acilma zamani gelmedi");
        // Token transfer işlemleri (Kilit süresi sonunda kilitli tokenleri kullanıcıya geri transfer etmek)
    lockers[msg.sender].amount = 0;
}
// Ödül hesaplama fonksiyonu
 function calculateReward(uint256 _amount, uint256 _durationInDays) internal pure returns (uint256) {
        // Ödül miktarını hesaplama
        return _amount * _durationInDays / 100;
    }

}
