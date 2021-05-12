pragma solidity =0.5.16;

import '../DegERC20.sol';

contract ERC20 is DegERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
