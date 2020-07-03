<template>
  <b-card header-class="danger" class="ml-2 mr-2">
    <template v-slot:header>
      <b class="text-danger">重定向</b>
    </template>
    <b-card-text>
      您即将离开本站，前往: {{ re_url }} <br />网站安全评级为：
      <b-badge :variant="sec_level">{{
        sec_level == "success" ? "安全" : "未知"
      }}</b-badge>
    </b-card-text>
    <template v-slot:footer>
      <b-btn class="btn-danger" :href="re_url">前往</b-btn>
    </template>
  </b-card>
</template>

<script>
import navlinks from "@/assets/data/nav.json";

export default {
  data: () => ({}),
  computed: {
    sec_level: function() {
      if (/^https:\/\/.*.nia.ac.cn.*/.test(this.re_url)) {
        return "success";
      }
      return "warning";
    },
    re_url: function() {
      return navlinks
        .find(x => x.link === this.$route.params.catagory)
        .sub.find(x => x.link === this.$route.params.item).url;
    }
  }
};
</script>

<style></style>
