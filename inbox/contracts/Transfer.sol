pragma solidity ^0.4.17;

contract Transfer {
    address public sender;
    address[] public recievers;

    function Transfer() public {
        sender = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);

        recievers.push(msg.sender);
    }

    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, recievers));
    }

    function pickWinner() public restricted {
        uint index = random() % recievers.length;
        recievers[index].transfer(this.balance);
        recievers = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == sender);
        _;
    }

    function getRecievers() public view returns (address[]) {
        return recievers;
    }
    
    function setSender() public{
        sender = msg.sender;
    }
}

