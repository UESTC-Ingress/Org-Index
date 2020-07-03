<template>
  <div id="app">
    <NavBar />
    <div class="row no-gutters main-cont">
      <div class="col-12 col-md-10 offset-md-1">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default {
  components: { NavBar, Footer }
};
</script>
<style lang="scss" scoped>
.main-cont {
  min-height: 40vh;
}
</style>
