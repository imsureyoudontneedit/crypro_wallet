<template>
    <div class="outer_wrapper">
        <div class="index_wrapper">
            <div class="header">
                <nav class="nav justify-content-around ">
                    <router-link class="nav-link logo" to="/">Crypto Wallet</router-link>
                    <div class="d-flex  my-auto">
                        <router-link class="nav-link" to="/">Buy / Sell</router-link>
                        <router-link class="nav-link" to="/">Grow</router-link>
                        <router-link class="nav-link" to="/">Markets</router-link>
                        <router-link class="nav-link" to="/">Business</router-link>
                        <router-link class="nav-link" to="/">Support</router-link>
                    </div>
                    <div class="d-flex my-auto">
                        <router-link to="/form/sign_in" class="btn_signIn me-3">Sign In</router-link>
                        <router-link to="/form/sign_up" class="btn">Sign Up</router-link>
                    </div>
                </nav>
                <div class="slogan">
                    We make crypto clear and simple
                </div>
            </div>
            <div class="cards d-flex justify-content-evenly">
                <div class="info_card container">
                    <img src="@/assets/icons/create.png" class="my-3" alt="Create icon" title="Create icon">
                    <h5 class="info_card_title">Create</h5>
                    <p class="info_card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos <br/> Lorem ipsum dolor</p>
                    <router-link to="/form/sign_up" class="info_card_href d-flex my-auto justify-content-center">
                        Get started <img src="@/assets/icons/arrow.png" class="my-auto" alt="">
                    </router-link>
                </div>
                <div class="info_card container">
                    <img src="@/assets/icons/login.png" class="my-3" alt="Create icon" title="Create icon">
                    <h5 class="info_card_title">Login</h5>
                    <p class="info_card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos <br/> Lorem ipsum dolor</p>
                    <router-link to="/form/sign_up" class="info_card_href d-flex my-auto justify-content-center">
                        Get started <img src="@/assets/icons/arrow.png" class="my-auto" alt="">
                    </router-link>
                </div>
                <div class="info_card container">
                    <img src="@/assets/icons/manage.png" class="my-3" alt="Create icon" title="Create icon">
                    <h5 class="info_card_title">Manage</h5>
                    <p class="info_card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos <br/> Lorem ipsum dolor</p>
                    <router-link to="/form/sign_up" class="info_card_href d-flex my-auto justify-content-center">
                        Get started <img src="@/assets/icons/arrow.png" class="my-auto" alt="">
                    </router-link>
                </div>

            </div>
            <div class="support d-flex justify-content">
                <img src="@/assets/image/support.png" alt="">
                <div class="support_text d-flex flex-column my-auto">
                    <span class="support_header">24/7 access to full service customer support</span>
                    <span class="support_desc mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur
                    </span>
                    <div class="mt-5">
                        <route-link class="btn_support">Get Started</route-link>
                    </div>
                </div>
            </div>
            <div class="support d-flex justify-content">
                <div class="support_text d-flex flex-column my-auto">
                    <span class="support_header">Take your first step into safe, secure crypto investing</span>
                    <span class="support_desc mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
                    </span>
                    <div class="mt-5">
                        <route-link class="btn">Get Started</route-link>
                    </div>
                </div>
                <img src="@/assets/image/firts_step.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .outer_wrapper {
        background-color: #0B0B0F;
    }

    .index_wrapper {
        background-color: #0B0B0F;
        max-width: 1440px;
        margin: 0 auto;
    }

    .header {
        background: url('@/assets/backgrounds/bg-img.png') no-repeat center / cover;

    }

    .nav-link {
        color: #fff;
        font-size: 14px;
    }

    .logo {
        font-family: "Montserrat Bold";
        font-size: 32px;
    }

    .btn {
        background: linear-gradient(70deg, rgba(24,200,255,1) 0%, rgba(147,63,254,1) 100%);
    }

    .btn:hover {
        color: #000
    }

    .btn_signIn {
        border: 1px solid #fff;
        background: inherit;
    }

    .btn_signIn:hover {
        background-color: #fff;
        color: #0B0B0F;
    }

    .btn, .btn_signIn {
        padding: 12px 18px;
        font-size: 16px;
        font-family: "Montserrat SemiBold";
        border-radius: 10px;
        color: #fff;
    }

    .slogan {
        text-align: center;
        margin: 0 auto;
        font-size: 85px;
        font-family: "Montserrat Bold";
        color: #fff;
        max-width: 780px;
        padding: clamp(40px, 10vw, 265px) 0;
    }

    .cards {
        background-image: url('@/assets/backgrounds/circles.png');
    }

    .info_card {
        background-color: #1A1B23;
        margin: 0 auto;
        text-align: center;
        width: 30%;
        border-radius: 25px;
    }

    .info_card .info_card_title {
        color: #fff;
        font-size: 32px;
        font-family: "Montserrat Bold";
    }

    .info_card .info_card_text {
        color: #898CA9 !important;
    }

    .info_card .info_card_href {
        color: #B982FF;
    }

    .support {
        height: fit-content;
    }

    .support_text {
        width: 40%;
    }

    .support_header {
        font-family: "Montserrat ExtraBold";
        font-size: 50px;
        color: #fff;
    }

    .support_desc {
        color: #898CA9;
        font-size: 16px;
    }

    .btn_support {
        border: 1px solid #fff;
        background: inherit;
        padding: 12px 18px;
        font-size: 16px;
        font-family: "Montserrat SemiBold";
        border-radius: 10px;
        color: #fff;
    }

</style>