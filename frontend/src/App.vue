<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import Web3 from 'web3'

export default {
  components: {
    
  },
  data() {
    return {
      web3: new Web3(Web3.givenProvider || "http://localhost:7545")
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
