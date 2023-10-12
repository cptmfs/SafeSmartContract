import {Web3} from 'web3';
export const web3 = new Web3(Web3.givenProvider)
export const contractAddress = "0x4f389eAE9E303646e8eFeABC5dFE6d8d60F83fB8"
export const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_durationInDays",
				"type": "uint256"
			}
		],
		"name": "lockTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lockers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unlockTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlockTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export const myContract  = new web3.eth.Contract(contractABI, contractAddress);
myContract.options.networks = {
	97: { // BSC Testnet
	  address: '0x4f389eAE9E303646e8eFeABC5dFE6d8d60F83fB8'
	}
  };
  
