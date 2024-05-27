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
        <div class="mb-4 href">
            <router-link to="/form/sign_up" class="router_link">Don't have an account?</router-link>
        </div>
        <div>
          <input type="submit" value="Sign In" class="btn"/>
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

  .href {
      text-align: right;;
  }

  .router_link {
    color: #898CA9;
    font-size: 14px;
    text-decoration: none;
  }
</style>