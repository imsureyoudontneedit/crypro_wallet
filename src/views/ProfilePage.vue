<template>
  <div class="wrapper">
    <div class="left_Side">
        <h2 class="mb-3">Crypto Wallet</h2>
        <div class="profile_navbar">
            <router-link class="btn mb-4" to="/profile/dashboard"><img src="@/assets/icons/dasboard.png" alt="dashbord icon" title="dashboard icon" class="me-2"> Dashboard</router-link>
            <router-link class="btn mb-4" to="/profile/withdraw"><img src="@/assets/icons/trade.png" alt="send token icon" title="send token icon" class="me-2"> Send token</router-link>
            <router-link class="btn mb-4" to="/profile/deposit"><img src="@/assets/icons/donate.png" alt="request icon" title="request icon" class="me-2"> Request token</router-link>
            <router-link class="btn mb-4" to="/profile/user"><img src="@/assets/icons/user.png" alt="profile icon" title="profile icon" class="me-2"> Profile</router-link>
        </div>
        <form action="">
            <input type="button" value="Log out"/>
        </form>
    </div>
    <div>
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
        background-color: #0B0B0F;
        height: 100vh;
    }

    .profile_navbar {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    a {
        color: #ffffff;
        font-size: 18px;
        border-radius: 16px;
    }

    a:hover {
        color: #ffffff;
        background: linear-gradient(51deg, rgba(31,142,190,1) 0%, rgba(68,4,149,1) 39%, rgba(68,4,149,1) 69%, rgba(177,2,205,1) 100%);
    }

    .router-link-active, .router-link-exact-active {
        color: #ffffff;
        background: linear-gradient(51deg, rgba(31,142,190,1) 0%, rgba(68,4,149,1) 39%, rgba(68,4,149,1) 69%, rgba(177,2,205,1) 100%);
    } 
</style>