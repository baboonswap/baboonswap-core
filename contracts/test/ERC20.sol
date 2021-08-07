pragma solidity =0.5.16;

import '../BaboERC20.sol';

contract ERC20 is BaboERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
