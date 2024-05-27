<template>
  <div class="">
      <form action="">
        <div class="mb-2">
          <label for="login" class="form-label">Login</label>
          <input type="text" name="login" id="login" class="form-control" placeholder=""/>
        </div>
        <div class="mb-2">
          <label for="password" class="form-label">Password</label>
          <input type="password" name="password" id="password" class="form-control" placeholder=""/>
        </div>
        <div class="mb-4">
          <label for="re_password" class="form-label">Re Password</label>
          <input type="password" name="re_password" id="re_password" class="form-control" placeholder=""/>
        </div>
        <div>
          <input type="submit" value="Sign Up" class="btn"/>
        </div>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .form-control {
    background-color: #16161E !important;
    border-color: #16161E !important;
  }

  .btn {
    color: #fff;
    background: linear-gradient(70deg, rgba(24,200,255,1) 0%, rgba(147,63,254,1) 100%);
  }

  .btn:hover {
    color: #000
  }
</style>