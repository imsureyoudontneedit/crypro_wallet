<template>
  <div class="wrapper">
    <div class="page_left_side">
      <h1>Crypto Wallet</h1>
      <form action="">
        <div class="">
          <label for="login" class="form-label">Login</label>
          <input type="text" name="login" id="login" class="form-control" placeholder="Login" aria-describedby="helpId"/>
        </div>
        <div>
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div>
          <label for="password" class="form-label">Re Password</label>
          <input type="password" class="form-control" placeholder="Re Password">
        </div>
        <div>
          <input type="submit" value="Sign Up" class="btn btn-success">
        </div>
      </form>
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