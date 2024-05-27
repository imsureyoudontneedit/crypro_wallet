<template>
  <div class="wrapper d-flex">
    <div class="left_Side">
        <h4 class="mb-3">Crypto Wallet</h4>
        <div class="profile_navbar">
            <router-link class="btn mb-4" to="/profile/dashboard"><img src="@/assets/icons/dasboard.png" alt="dashbord icon" title="dashboard icon" class="me-2"> Dashboard</router-link>
            <router-link class="btn mb-4" to="/profile/withdraw"><img src="@/assets/icons/trade.png" alt="send token icon" title="send token icon" class="me-2"> Send token</router-link>
            <router-link class="btn mb-4" to="/profile/deposit"><img src="@/assets/icons/donate.png" alt="request icon" title="request icon" class="me-2"> Request</router-link>
            <router-link class="btn mb-4" to="/profile/user"><img src="@/assets/icons/user.png" alt="profile icon" title="profile icon" class="me-2"> Profile</router-link>
        </div>
        <form action="" class="logout_form">
            <button type="submit" class="log_out"> 
                <img src="@/assets/icons/logout.png" alt="logout icon" title="logout icon">
                Log Out
            </button>
        </form>
    </div>
    <router-view></router-view>
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
        padding: 3rem;
    }

    h4 {
        text-align: center;
    }

    .left_Side {
        width: fit-content;
        position : relative;
    }

    .profile_navbar {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: fit-content;
    }

    a {
        text-align: left;
        width: 100%;
        color: #ffffff;
        font-size: 18px;
        border-radius: 16px;
        padding: 16px 70px 16px 25px;
    }

    a:hover {
        color: #ffffff;
        background: linear-gradient(51deg, rgba(31,142,190,1) 0%, rgba(68,4,149,1) 39%, rgba(68,4,149,1) 69%, rgba(177,2,205,1) 100%);
    }

    .router-link-active, .router-link-exact-active {
        color: #ffffff;
        background: linear-gradient(51deg, rgba(31,142,190,1) 0%, rgba(68,4,149,1) 39%, rgba(68,4,149,1) 69%, rgba(177,2,205,1) 100%);
    } 

    .logout_form {
        position: absolute;
        bottom: 0;
    }

    .log_out {
        color: #DDDDDD;
        background: inherit;
        border: none;
        margin: auto 0;
    } 
</style>