/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AllianceBlockToken,
  AllianceBlockTokenInterface,
} from "../../../contracts/token/AllianceBlockToken";

const _abi = [
  {
    inputs: [],
    name: "SnapshotInvalidRole",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenTransferToThisContract",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenTransferWhilePaused",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Snapshot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentSnapshotId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "snapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612741806100206000396000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c80635c975abb1161012a578063981b24d0116100bd578063ca15c8731161008c578063d547741f11610071578063d547741f146104bb578063dd62ed3e146104ce578063e63ab1e91461050757600080fd5b8063ca15c87314610481578063d53913931461049457600080fd5b8063981b24d014610440578063a217fddf14610453578063a457c2d71461045b578063a9059cbb1461046e57600080fd5b80639010d07c116100f95780639010d07c146103cc57806391d14854146103f757806395d89b41146104305780639711715a1461043857600080fd5b80635c975abb1461037c57806370a082311461038857806379cc6790146103b15780638456cb59146103c457600080fd5b8063313ce567116101bd57806340c10f191161018c5780634cd88b76116101715780634cd88b761461034e5780634ee2cd7e146103615780635439ad861461037457600080fd5b806340c10f191461032857806342966c681461033b57600080fd5b8063313ce567146102eb57806336568abe146102fa578063395093511461030d5780633f4ba83a1461032057600080fd5b806318160ddd116101f957806318160ddd1461029057806323b872dd146102a2578063248a9ca3146102b55780632f2ff15d146102d857600080fd5b806301ffc9a71461022b57806306fdde0314610253578063095ea7b3146102685780630e07f8541461027b575b600080fd5b61023e610239366004612154565b61052e565b60405190151581526020015b60405180910390f35b61025b610559565b60405161024a91906121a2565b61023e6102763660046121ec565b6105eb565b61028e6102893660046122b9565b610603565b005b60cb545b60405190815260200161024a565b61023e6102b036600461233e565b6107b8565b6102946102c336600461237a565b60009081526065602052604090206001015490565b61028e6102e6366004612393565b6107dc565b6040516012815260200161024a565b61028e610308366004612393565b610806565b61023e61031b3660046121ec565b610892565b61028e6108d1565b61028e6103363660046121ec565b610977565b61028e61034936600461237a565b610a1d565b61028e61035c3660046123bf565b610a2a565b61029461036f3660046121ec565b610b3e565b610294610b98565b61012d5460ff1661023e565b610294610396366004612423565b6001600160a01b0316600090815260c9602052604090205490565b61028e6103bf3660046121ec565b610ba7565b61028e610bbc565b6103df6103da36600461243e565b610bcc565b6040516001600160a01b03909116815260200161024a565b61023e610405366004612393565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61025b610beb565b610294610bfa565b61029461044e36600461237a565b610c2b565b610294600081565b61023e6104693660046121ec565b610c57565b61023e61047c3660046121ec565b610d01565b61029461048f36600461237a565b610d0f565b6102947f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61028e6104c9366004612393565b610d26565b6102946104dc366004612460565b6001600160a01b03918216600090815260ca6020908152604080832093909416825291909152205490565b6102947f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216635a05180f60e01b1480610553575061055382610d4b565b92915050565b606060cc80546105689061248a565b80601f01602080910402602001604051908101604052809291908181526020018280546105949061248a565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905090565b6000336105f9818585610d80565b5060019392505050565b600054610100900460ff16158080156106235750600054600160ff909116105b8061063d5750303b15801561063d575060005460ff166001145b6106a55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156106c8576000805461ff0019166101001790555b6106d28585610ea4565b6106da610f28565b6106e2610f93565b6106ed60008461100b565b6107177f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68461100b565b6107417f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a8461100b565b61076b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68361100b565b80156107b1576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b6000336107c6858285611015565b6107d18585856110a7565b506001949350505050565b6000828152606560205260409020600101546107f7816110db565b61080183836110e5565b505050565b6001600160a01b03811633146108845760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c660000000000000000000000000000000000606482015260840161069c565b61088e8282611107565b5050565b33600081815260ca602090815260408083206001600160a01b03871684529091528120549091906105f990829086906108cc9087906124da565b610d80565b6108fb7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610405565b61096d5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e706175736500000000000000606482015260840161069c565b610975611129565b565b6109a17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610405565b610a135760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e7400000000000000000000606482015260840161069c565b61088e828261117c565b610a273382611249565b50565b600054610100900460ff1615808015610a4a5750600054600160ff909116105b80610a645750303b158015610a64575060005460ff166001145b610ac75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161069c565b6000805460ff191660011790558015610aea576000805461ff0019166101001790555b610af48383611389565b8015610801576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6001600160a01b03821660009081526101c36020526040812081908190610b66908590611410565b9150915081610b8d576001600160a01b038516600090815260c96020526040902054610b8f565b805b95945050505050565b6000610ba261150d565b905090565b610bb2823383611015565b61088e8282611249565b610bc4611519565b610a276115bd565b6000828152609760205260408120610be49083611618565b9392505050565b606060cd80546105689061248a565b6000610c068133610405565b610c23576040516301a60a8b60e41b815260040160405180910390fd5b610ba26115bd565b6000806000610c3c846101c4611410565b9150915081610c4d5760cb54610c4f565b805b949350505050565b33600081815260ca602090815260408083206001600160a01b038716845290915281205490919083811015610cf45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161069c565b6107d18286868403610d80565b6000336105f98185856110a7565b600081815260976020526040812061055390611624565b600082815260656020526040902060010154610d41816110db565b6108018383611107565b60006001600160e01b03198216637965db0b60e01b148061055357506301ffc9a760e01b6001600160e01b0319831614610553565b6001600160a01b038316610de25760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161069c565b6001600160a01b038216610e435760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161069c565b6001600160a01b03838116600081815260ca602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600054610100900460ff16610f0f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161069c565b60cc610f1b838261253b565b5060cd610801828261253b565b600054610100900460ff166109755760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161069c565b600054610100900460ff16610ffe5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161069c565b61012d805460ff19169055565b61088e82826110e5565b6001600160a01b03838116600090815260ca602090815260408083209386168352929052205460001981146110a157818110156110945760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161069c565b6110a18484848403610d80565b50505050565b306001600160a01b038316036110d05760405163b87ae0f360e01b815260040160405180910390fd5b61080183838361162e565b610a278133611813565b6110ef8282611888565b6000828152609760205260409020610801908261192a565b611111828261193f565b600082815260976020526040902061080190826119c2565b6111316119d7565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166111d25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161069c565b6111de60008383611a2a565b8060cb60008282546111f091906124da565b90915550506001600160a01b038216600081815260c960209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166112a95760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161069c565b6112b582600083611a2a565b6001600160a01b038216600090815260c96020526040902054818110156113295760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161069c565b6001600160a01b038316600081815260c960209081526040808320868603905560cb80548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b600054610100900460ff166113f45760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161069c565b6113fe8282610ea4565b611406610f93565b61088e8282611a5a565b600080600084116114635760405162461bcd60e51b815260206004820152601660248201527f4552433230536e617073686f743a206964206973203000000000000000000000604482015260640161069c565b61146b61150d565b8411156114ba5760405162461bcd60e51b815260206004820152601d60248201527f4552433230536e617073686f743a206e6f6e6578697374656e74206964000000604482015260640161069c565b60006114c68486611b24565b845490915081036114de576000809250925050611506565b60018460010182815481106114f5576114f56125fb565b906000526020600020015492509250505b9250929050565b6000610ba26101c65490565b6115437f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610405565b6115b55760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f207061757365000000000000000000606482015260840161069c565b610975611bd1565b60006115ce6101c680546001019055565b60006115d861150d565b90507f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb678160405161160b91815260200190565b60405180910390a1919050565b6000610be48383611c0f565b6000610553825490565b6001600160a01b0383166116aa5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161069c565b6001600160a01b03821661170c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161069c565b611717838383611a2a565b6001600160a01b038316600090815260c96020526040902054818110156117a65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161069c565b6001600160a01b03808516600081815260c9602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906118069086815260200190565b60405180910390a36110a1565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1661088e5761184681611c39565b611851836020611c4b565b604051602001611862929190612611565b60408051601f198184030181529082905262461bcd60e51b825261069c916004016121a2565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1661088e5760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556118e63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610be4836001600160a01b038416611df4565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff161561088e5760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610be4836001600160a01b038416611e43565b61012d5460ff166109755760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161069c565b611a35838383611f36565b61012d5460ff161561080157604051632d5fbc6760e11b815260040160405180910390fd5b600054610100900460ff16611ac55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161069c565b611ad060003361100b565b611afa7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361100b565b61088e7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361100b565b81546000908103611b3757506000610553565b82546000905b80821015611b84576000611b518383611f89565b60008781526020902090915085908201541115611b7057809150611b7e565b611b7b8160016124da565b92505b50611b3d565b600082118015611bb0575083611bad86611b9f600186612692565b600091825260209091200190565b54145b15611bc957611bc0600183612692565b92505050610553565b509050610553565b611bd9611fa4565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861115f3390565b6000826000018281548110611c2657611c266125fb565b9060005260206000200154905092915050565b60606105536001600160a01b03831660145b60606000611c5a8360026126a5565b611c659060026124da565b67ffffffffffffffff811115611c7d57611c7d612216565b6040519080825280601f01601f191660200182016040528015611ca7576020820181803683370190505b509050600360fc1b81600081518110611cc257611cc26125fb565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611cf157611cf16125fb565b60200101906001600160f81b031916908160001a9053506000611d158460026126a5565b611d209060016124da565b90505b6001811115611da5577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611d6157611d616125fb565b1a60f81b828281518110611d7757611d776125fb565b60200101906001600160f81b031916908160001a90535060049490941c93611d9e816126bc565b9050611d23565b508315610be45760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161069c565b6000818152600183016020526040812054611e3b57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610553565b506000610553565b60008181526001830160205260408120548015611f2c576000611e67600183612692565b8554909150600090611e7b90600190612692565b9050818114611ee0576000866000018281548110611e9b57611e9b6125fb565b9060005260206000200154905080876000018481548110611ebe57611ebe6125fb565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611ef157611ef16126d3565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610553565b6000915050610553565b611f41838383611ff8565b6001600160a01b038316611f6057611f5882612003565b610801612037565b6001600160a01b038216611f7757611f5883612003565b611f8083612003565b61080182612003565b6000611f9860028484186126e9565b610be4908484166124da565b61012d5460ff16156109755760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161069c565b610801838383612046565b6001600160a01b03811660009081526101c36020908152604080832060c990925290912054610a2791906120c0565b6120c0565b6109756101c461203260cb5490565b61012d5460ff16156108015760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c652070617573656400000000000000000000000000000000000000000000606482015260840161069c565b60006120ca61150d565b9050806120d68461210a565b1015610801578254600180820185556000858152602080822090930193909355938401805494850181558252902090910155565b8054600090810361211d57506000919050565b8154829061212d90600190612692565b8154811061213d5761213d6125fb565b90600052602060002001549050919050565b919050565b60006020828403121561216657600080fd5b81356001600160e01b031981168114610be457600080fd5b60005b83811015612199578181015183820152602001612181565b50506000910152565b60208152600082518060208401526121c181604085016020870161217e565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461214f57600080fd5b600080604083850312156121ff57600080fd5b612208836121d5565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261223d57600080fd5b813567ffffffffffffffff8082111561225857612258612216565b604051601f8301601f19908116603f0116810190828211818310171561228057612280612216565b8160405283815286602085880101111561229957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080608085870312156122cf57600080fd5b843567ffffffffffffffff808211156122e757600080fd5b6122f38883890161222c565b9550602087013591508082111561230957600080fd5b506123168782880161222c565b935050612325604086016121d5565b9150612333606086016121d5565b905092959194509250565b60008060006060848603121561235357600080fd5b61235c846121d5565b925061236a602085016121d5565b9150604084013590509250925092565b60006020828403121561238c57600080fd5b5035919050565b600080604083850312156123a657600080fd5b823591506123b6602084016121d5565b90509250929050565b600080604083850312156123d257600080fd5b823567ffffffffffffffff808211156123ea57600080fd5b6123f68683870161222c565b9350602085013591508082111561240c57600080fd5b506124198582860161222c565b9150509250929050565b60006020828403121561243557600080fd5b610be4826121d5565b6000806040838503121561245157600080fd5b50508035926020909101359150565b6000806040838503121561247357600080fd5b61247c836121d5565b91506123b6602084016121d5565b600181811c9082168061249e57607f821691505b6020821081036124be57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610553576105536124c4565b601f82111561080157600081815260208120601f850160051c810160208610156125145750805b601f850160051c820191505b8181101561253357828155600101612520565b505050505050565b815167ffffffffffffffff81111561255557612555612216565b61256981612563845461248a565b846124ed565b602080601f83116001811461259e57600084156125865750858301515b600019600386901b1c1916600185901b178555612533565b600085815260208120601f198616915b828110156125cd578886015182559484019460019091019084016125ae565b50858210156125eb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161264981601785016020880161217e565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161268681602884016020880161217e565b01602801949350505050565b81810381811115610553576105536124c4565b8082028115828204841417610553576105536124c4565b6000816126cb576126cb6124c4565b506000190190565b634e487b7160e01b600052603160045260246000fd5b60008261270657634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122027091b4208d690a988d5c4d0408cdc86032119c64402d73eb7b708d3f984ee0064736f6c63430008110033";

type AllianceBlockTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AllianceBlockTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AllianceBlockToken__factory extends ContractFactory {
  constructor(...args: AllianceBlockTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AllianceBlockToken> {
    return super.deploy(overrides || {}) as Promise<AllianceBlockToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AllianceBlockToken {
    return super.attach(address) as AllianceBlockToken;
  }
  override connect(signer: Signer): AllianceBlockToken__factory {
    return super.connect(signer) as AllianceBlockToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AllianceBlockTokenInterface {
    return new utils.Interface(_abi) as AllianceBlockTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllianceBlockToken {
    return new Contract(address, _abi, signerOrProvider) as AllianceBlockToken;
  }
}