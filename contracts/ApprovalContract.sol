pragma solidity ^0.4.8;

contract ApprovalContract {
    
    address public sender;
    address public receiver;
    address public constant approver = 0x34fa4769088c2dadF20f2b917864275c1Be2D1cb;

    function deposit(address _receiver) external payable {
        require(msg.value > 0);
        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns(address) {
        return(approver);
    }

    function approve() external payable {
        require (msg.sender == approver);
        receiver.transfer(address(this).balance);
    }

}