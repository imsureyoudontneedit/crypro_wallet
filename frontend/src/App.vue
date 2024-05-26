<template>
  <div class="wrapper">
    <reg-page></reg-page>
  </div>
</template>

<script>
import RegPage from './components/RegPage.vue'

export default {
  components: {
    RegPage
  },
  data() {
    
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
  font-family: 'Montserrat Mediumr';
  src: url('@/assets/fonts/Montserrat-Medium.ttf');
}

#app {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
