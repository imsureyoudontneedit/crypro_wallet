<template>
    <div class="token_wrapper">
        <div class="bg">
        </div>
        <div class="form-bg">
            <form class="form">
                <div class="form-group"> 
                    <input type="value" class="form-control" required id="amount" placeholder="Amount"> 
                </div>
                <div>
                    <img src="@/assets/image/test_qr.png" alt="">
                </div>
                <div class="form-group"> 
                    <input type="value" class="form-control" required id="to" placeholder="Account ID"> 
                </div>
                <div class="desc">
                    <span>This transaction will not be aprove imideatly. This may take a while we check you transcactions.</span>
                </div>
                <button type="submit" class="btn text-center" @click="sendMoney()">REQUEST TOKEN</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>

    .token_wrapper {
        margin: auto auto;
        position: relative;
    }

    .btn {
        color: #ffffff;
        background: linear-gradient(78deg, rgba(24,200,255,1) 0%, rgba(147,63,254,1) 100%);
        padding: 10px 30px;
        font-size: 20px;
        font-family: "Montserrat SemiBold";
    }

    .bg {
        border-radius: 16px;
        background-color: rgba(28, 28, 28, .6);
        opacity: 0.6; 
        filter: blur(20px);
        width: 80vh;
        height: 80vh;
    }
    
    .form-bg {
        width: 90%;
        mix-blend-mode: normal;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .form {
        margin: 0 auto;
    }
</style>