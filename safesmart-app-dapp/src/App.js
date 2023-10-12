// // import {useCallback, useEffect, useMemo, useState,useRef} from "react";
// import './App.css';
// import React, { Component } from 'react' 
// import SafeSmartContract  from './build/SafeSmartContract.json'
// import Header from "./components/Header";
// import TextLinkExample from "./components/TextLinkExample";
// import TextControlsExample from "./components/TextControlsExample";
// import User from "./components/User";
// import Web3 from 'web3';


// class App extends Component {
//   constructor(props) {
//         super(props);
//         this.state = {
//           account: '',
//           amountToLock: '',
//           lockDuration: '',
//           safeSmartContract: null, // safeSmartContract değişkenini null olarak başlatın
//         };
//         this.lockTokens = this.lockTokens.bind(this);
//         this.unlockTokens = this.unlockTokens.bind(this);
//       }
    
//       async componentDidMount() {
//         await this.loadWeb3();
//         await this.loadBlockchainData();
//       }
    
//       async loadWeb3() {
//         if (window.ethereum) {
//           window.web3 = new Web3(window.ethereum);
//           await window.ethereum.enable();
//         } else if (window.web3) {
//           window.web3 = new Web3(window.web3.currentProvider);
//         } else {
//           window.alert('Web3 desteklenmiyor. MetaMask veya başka bir Ethereum tarayıcısı ekleyin.');
//         }
//       }
    
//       async loadBlockchainData() {
//         const web3 = window.web3;
//         const accounts = await web3.eth.getAccounts();
//         const contractAddress  = "0x4f389eae9e303646e8efeabc5dfe6d8d60f83fb8";
//         this.setState({ account: accounts[0] });
    
//         const networkId = await web3.eth.net.getId();
//         const networkData = SafeSmartContract.networks[networkId];
//         if (networkData) {
//           const safeSmartContract = new web3.eth.Contract(SafeSmartContract.abi, contractAddress);
//           this.setState({ safeSmartContract }); // safeSmartContract değişkenini burada tanımlayın
//         } else {
//           window.alert('Smart kontrat ağına bağlanılamıyor.');
//         }
//       }
    
//       lockTokens = async () => {
//         if (!this.state.safeSmartContract) {
//           window.alert('Smart kontrat yüklenemedi.');
//           return;
//         }
    
//         const { amountToLock, lockDuration } = this.state;
//         // Metamask'ten onay al
//         await this.state.safeSmartContract.methods.lockTokens(amountToLock, lockDuration).send({ from: this.state.account });
//       };
    
//       unlockTokens = async () => {
//         if (!this.state.safeSmartContract) {
//           window.alert('Smart kontrat yüklenemedi.');
//           return;
//         }
    
//         // Metamask'ten onay al
//         await this.state.safeSmartContract.methods.unlockTokens().send({ from: this.state.account });
//       };
// render(){
//   return (
//     <div className="App" style={{backgroundImage : 'url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")'}}>
//       {this.state.isConnected ? (
//           <p>Hesap: {this.state.account}</p>
//         ) : (
//           <button onClick={this.loadBlockchainComponent.bind(this)}>
//             Cüzdan Bağla
//           </button>
//         )}


//       {isLoggedIn ? <p>{"Hoşgeldin = " + this.state.account}</p> : "Giriş Yapın"}

//       <TextLinkExample />
//       <h1>Ferit Kaptan Dapp + {this.state.account}</h1>
//       <Header></Header>
//       <TextControlsExample />
//       <User name="Ferit" surname ="Şimşek" age = {29}/>
//     </div>
//   );
// }
// }

// export default App;
// import React, { Component } from 'react';
// import Web3 from 'web3';
// import {myContract}  from './build/SafeSmartContract'

// class DApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       account: '',
//       amountToLock: '',
//       lockDuration: '',
//       safeSmartContract: null, 
//     };
//     this.lockTokens = this.lockTokens.bind(this);
//     this.unlockTokens = this.unlockTokens.bind(this);
//   }

//   async componentDidMount() {
//     await this.loadWeb3();
//     await this.loadBlockchainData();
//   }

//   async loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     } else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//       window.alert('Web3 desteklenmiyor. MetaMask veya başka bir Ethereum tarayıcısı ekleyin.');
//     }
    
//   }

//   async loadBlockchainData() {
//     const web3 = window.web3;
//     const accounts = await web3.eth.getAccounts();
//     this.setState({ account: accounts[0] });

//      const networkId = await web3.eth.net.getId();
//      if (networkId) {
//        this.setState({ safeSmartContract: myContract }); 
//      } else {
//        window.alert('Smart kontrat ağına bağlanılamıyor.');
//      }
//   }

//   lockTokens = async () => {
//     if (!this.state.safeSmartContract) {
//       window.alert('Smart kontrat yüklenemedi.');
//       return;
//     }

//     const { amountToLock, lockDuration } = this.state;
//     // Metamask'ten onay al
//     await this.state.safeSmartContract.methods.lockTokens(amountToLock, lockDuration).send({ from: this.state.account });
//   };

//   unlockTokens = async () => {
//     if (!this.state.safeSmartContract) {
//       window.alert('Smart kontrat yüklenemedi.');
//       return;
//     }

//     // Metamask'ten onay al
//     await this.state.safeSmartContract.methods.unlockTokens().send({ from: this.state.account });
//   };

//   render() {
//     return (
//       <div>
//         <h1>SafeSmartContract DApp</h1>
//         <p>Hesap: {this.state.account}</p>
//         <input
//           type="text"
//           placeholder="Kilitleme miktarını girin"
//           onChange={(e) => this.setState({ amountToLock: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Kilitleme süresini girin (gün)"
//           onChange={(e) => this.setState({ lockDuration: e.target.value })}
//         />
//         <button onClick={this.lockTokens}>Tokenları Kilitle</button>
//         <button onClick={this.unlockTokens}>Tokenları Kilidi Aç</button>
//       </div>
//     );
//   }
// }

// export default DApp;
import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import Header from "./components/Header";
import Navbar from "./components/NavbarExample";
import TextControlsExample from "./components/TextControlsExample";
import User from "./components/User";
import { myContract } from './build/SafeSmartContract';
import { FormGroup,Form,Button } from 'react-bootstrap';
class DApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      amountToLock: '',
      lockDuration: '',
      safeSmartContract: null,
    };
    this.lockTokens = this.lockTokens.bind(this);
    this.unlockTokens = this.unlockTokens.bind(this);
  }

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Web3 desteklenmiyor. MetaMask veya başka bir Ethereum tarayıcısı ekleyin.');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    if (networkId) {
      this.setState({ safeSmartContract: myContract });
    } else {
      window.alert('Smart kontrat ağına bağlanılamıyor.');
    }
  }

  lockTokens = async () => {
    if (!this.state.safeSmartContract) {
      window.alert('Smart kontrat yüklenemedi.');
      return;
    }

    const { amountToLock, lockDuration } = this.state;
    // Metamask'ten onay al
    await this.state.safeSmartContract.methods.lockTokens(amountToLock, lockDuration).send({ from: this.state.account });
  };

  unlockTokens = async () => {
    if (!this.state.safeSmartContract) {
      window.alert('Smart kontrat yüklenemedi.');
      return;
    }

    // Metamask'ten onay al
    await this.state.safeSmartContract.methods.unlockTokens().send({ from: this.state.account });
  };

  render() {
    function TextControlsExample() {
      return (
        <Form >
            <Form.Group className="mb-3">
            <Form.Label style={{ color: 'white' }}>Already Staked Token         <Form.Control placeholder="@staked tokens " disabled />
    </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ color: 'white' }}>Tokens To be Locked  <Form.Control type="number" placeholder="123"onChange={(e) => this.setState({ amountToLock: e.target.value })}
 /></Form.Label>
          </Form.Group>
          <FormGroup>
          <Form.Label style={{ color: 'white' }}>Stake Amount
          <Form.Select aria-label="Default select example"onChange={(e) => this.setState({ lockDuration: e.target.value })}
 >
          <option>Stake Time</option>
          <option value="1">1 Month</option>
          <option value="2">3 Month</option>
          <option value="3">6 Month</option>
        </Form.Select>
        </Form.Label>
        </FormGroup>
        <Button className="mt-3" variant="success" onClick={() => this.lockTokens()}>Stake</Button>{' '}
        <Button className="mt-3" variant="warning" onClick={() => this.unlockTokens()}>Unstake</Button>{' '}
    
        </Form>
      );
    }
    return (
      <div className="App" >

             <Navbar />
      <h1 style={{ color: 'white' }}>Ferit Kaptan Dapp + {this.state.account}</h1>
      <hr></hr>
      <Header ></Header>
      <TextControlsExample />
      </div>
    );
  }
}


export default DApp;
