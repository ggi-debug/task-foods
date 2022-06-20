<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.FooterGuide"></FooterGuide>
  </div>
</template>

<script>

import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style>

</style>
