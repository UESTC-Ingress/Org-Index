<template>
  <div class="row">
    <div class="col-3 d-none d-md-block">
      <SideCatagory :nav="nav" />
    </div>
    <div class="col-md-9 col-10 offset-1 offset-md-0">
      <b-media>
        <h5 class="mt-0">
          {{ this.$route.params.article ? "正文" : navitem.title }}
        </h5>
        <hr />
        <VueShowdown :markdown="mdtext" />
      </b-media>
    </div>
  </div>
</template>

<script>
import SideCatagory from "@/components/layout/SideCatagory";
import navlinks from "@/assets/data/nav.json";

export default {
  components: {
    SideCatagory
  },
  data: () => ({
    mdtext: ""
  }),
  computed: {
    nav() {
      return navlinks.find(x => x.link === this.$route.params.catagory);
    },
    navitem() {
      return navlinks
        .find(x => x.link === this.$route.params.catagory)
        .sub.find(x => x.link === this.$route.params.item);
    }
  },
  methods: {
    refreshHTML() {
      this.$ajax
        .get(
          "doc/" +
            this.nav.link +
            "/" +
            this.navitem.link +
            (this.$route.params.article
              ? "/" + this.$route.params.article
              : "") +
            ".md"
        )
        .then(response => (this.mdtext = response.data))
        .catch(() => {
          this.mdtext = "暂无内容";
        });
    }
  },
  watch: {
    navitem() {
      this.refreshHTML();
    }
  },
  mounted() {
    this.refreshHTML();
  }
};
</script>

<style></style>
