<template>
  <div class="wrapper">
    <div class="page_left_side">
      <router-link to="/"><h1>Crypto Wallet</h1></router-link>
      <router-view></router-view>
    </div>
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .wrapper {
    color: #ffffff;
    text-align: left;
    background: url('@/assets/backgrounds/background.png'), #000000;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-position: bottom left;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
  }

  .page_left_side {
    margin: auto 10% auto 0; 
    width: 40%;
  } 
</style>