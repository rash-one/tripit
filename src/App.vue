<template>
  <navbar v-if="!isLoading && !$route.meta.hideNavBar" />
  <VuePreloader
    :is-showing="isLoading"
    :transition-speed="2000"
    :color="'#ffb830'"
    :background-color="'#f9f9f9'"
    :transition-type="'fade-up'"
    
  />
  <loadingPage v-if="isLoading && !$route.meta.hideLoading" />
  <router-view v-if="!isLoading || $route.meta.hideLoading" />
  <footerComponent v-if="!isLoading && !$route.meta.hideFooter"/>
</template>

<script>
import navbar from "./components/navbar.vue";
import footerComponent from "./components/footerComponent.vue";
import { VuePreloader } from "vue-preloader";
import '../node_modules/vue-preloader/dist/style.css'
import { mapState } from "vuex";
import loadingPage from "./pages/loadingPage.vue";
import { onMounted } from 'vue';




export default {
  name: "App",
  components: {
    navbar,
    footerComponent,
    VuePreloader,
    loadingPage,
    
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  mounted(){
    document.cookie= 'locale=EN';
  }

};
</script>
<style>

</style>