<template>
  <div class="row">
    <div class="col-3">
      <SideCatagory :nav="nav" />
    </div>
    <div class="col-9">
      <b-list-group v-if="list.length > 0">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="item in list.slice(
            (currentPage - 1) * 10,
            currentPage * 10 - 1
          )"
          :to="
            '/article/' +
              $route.params.catagory +
              '/' +
              $route.params.item +
              '/' +
              item.url
          "
          :key="item.url"
        >
          {{ item.title }}
          <span>{{ item.time }}</span>
        </b-list-group-item>
      </b-list-group>
      <span v-else> 暂无内容 </span>
      <b-pagination
        class="mt-2"
        v-if="list.length > 0"
        v-model="currentPage"
        :total-rows="list.length"
        :per-page="10"
      ></b-pagination>
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
    list: [],
    currentPage: 1
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
    refreshList() {
      this.list = [];
      this.$ajax
        .get(
          "doc/catagory/" + this.nav.link + "/" + this.navitem.link + ".json"
        )
        .then(response => (this.list = response.data));
    }
  },
  watch: {
    navitem() {
      this.refreshList();
    }
  },
  mounted() {
    this.refreshList();
  }
};
</script>

<style></style>
