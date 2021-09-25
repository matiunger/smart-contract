const ApprovalContract = artifacts.require('../../ApprovalContract.sol')

contract('ApprovalContract', function(accounts){

    it('initiates contract', async function(){
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, 0x34fa4769088c2dadF20f2b917864275c1Be2D1cb, "approvers don't match")
    })

    it('takes a deposit', async function(){
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], {value: 1e+18, from: accounts[1]});
        web3.eth.getBalance(contract.address).then(function (balance) {
            assert.equal(balance, 1e+18, "amount did not match in "+contract.address+" :")
        }).catch(function(e) {
            console.log(e);
        });
        
    })

})