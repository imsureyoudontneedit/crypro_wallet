<template>
  <div class="wrapper">
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <button v-if="connected" @click="callContract">Call contract</button>

    {{ contractResult }}
    <router-view></router-view>
  </div>
</template>

<script>
import Web3 from 'web3'

import BankAbi from "@/assets/Bank.json";

export default {
  components: {
    
  },
  data() {
    return {
      web3: new Web3(window.ethereum),
      contractAddress: "0x05B1BDfEB940218E143C75711Ab9313aDfd8127d",
      abi: BankAbi,
      // contract: this.web3.Contract(this.abi, this.contractAddress),
      connected: false,
      contractResult: ''
    }
  },
  methods: {

    connect: function () {
      let ethereum = window.ethereum;
      if (ethereum) {
        ethereum.request({ method: 'eth_requestAccounts' })
          .then(() => { this.connected = true; });
      }
    },

    callContract: function () {
        // method for calling the contract method
      let web3 = new Web3(window.ethereum);

      let contract = new web3.eth.Contract(this.abi, this.contractAddress);

      contract.methods.getSender().call()
        .then(result => this.contractResult = result);
    }
  }
}
</script>

<style>

@font-face {
  font-family: 'Montserrat Regular';
  src: url('@/assets/fonts/Montserrat-Regular.ttf');
}

@font-face {
  font-family: 'Montserrat Bold';
  src: url('@/assets/fonts/Montserrat-Bold.ttf');
}

@font-face {
  font-family: 'Montserrat Medium';
  src: url('@/assets/fonts/Montserrat-Medium.ttf');
}

@font-face {
  font-family: 'Montserrat SemiBold';
  src: url('@/assets/fonts/Montserrat-SemiBold.ttf');
}

@font-face {
  font-family: 'Montserrat ExtraBold';
  src: url('@/assets/fonts/Montserrat-ExtraBold.ttf');
}

#app {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat SemiBold"
}

h1 {
  font-family: 'Montserrat Bold';
}

h4 {
  font-family: 'Montserrat SemiBold';
}

a {
  text-decoration: none;
  color: #fff;
}

</style>
