<template>
  <div class="container-page profile-page">
      <div class="container-profile-main">
          
          <div class="profile_navbar ">
                <a href="/"><h4 class="mb-3 page-title">Crypto Wallet</h4></a>
                <router-link class="btn mb-4 profile-link" to="/profile/dashboard"><img src="@/assets/icons/dasboard.png" alt="dashbord icon" title="dashboard icon" class="me-2"> Dashboard</router-link>
                <router-link class="btn mb-4 profile-link" to="/profile/withdraw"><img src="@/assets/icons/trade.png" alt="send token icon" title="send token icon" class="me-2"> Send token</router-link>
                <router-link class="btn mb-4 profile-link" to="/profile/deposit"><img src="@/assets/icons/donate.png" alt="request icon" title="request icon" class="me-2"> Request</router-link>
                <router-link class="btn mb-4 profile-link" to="/profile/user"><img src="@/assets/icons/user.png" alt="profile icon" title="profile icon" class="me-2"> Profile</router-link>
                <form action="" class="logout_form">
                    <button type="submit" class="log_out"> 
                        <img src="@/assets/icons/logout.png" alt="logout icon" title="logout icon">
                        Log Out
                    </button>
                </form>
            </div>

            <router-view></router-view>
        
        </div>

        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .profile-page{
        background:  #0B0B0F url('../assets/backgrounds/profile_bg.png') no-repeat center / cover;
        padding: 100px 45px;
        color: white;
        min-height: 75dvh;
    }

    .container-profile-main {
        display: flex;
        gap: 30px;
        position: relative;
        min-height: 75dvh;
        max-height: 110dvh;
    }

    
    
    .profile_navbar {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: fit-content;
        position: relative;
    }
    
    .page-title{
        position: absolute;
        width: max-content;
        left: 50%;
        transform: translateX(-50%);
        top: -60px;
    }
    .profile-link {
        text-align: left;
        width: 100%;
        min-width: max-content;
        color: #ffffff;
        font-size: 18px;
        border-radius: 16px;
        padding: 16px 70px 16px 25px;

        display: flex;
        gap: 20px;
        align-items: center;
    }

    .profile-link:hover {
        color: #ffffff;
        background: linear-gradient(51deg, rgba(31,142,190,1) 0%, rgba(68,4,149,1) 39%, rgba(68,4,149,1) 69%, rgba(177,2,205,1) 100%);
    }

    .router-link-active, .router-link-exact-active {
        color: #ffffff;
        background: linear-gradient(51deg, rgba(31,142,190,1) 0%, rgba(68,4,149,1) 39%, rgba(68,4,149,1) 69%, rgba(177,2,205,1) 100%);
    } 

    .logout_form {
        margin-top: auto;
    }

    .log_out {
        padding: 16px 70px 16px 25px;
        color: #DDDDDD;
        background: inherit;
        border: none;
    } 
</style>