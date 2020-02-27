<template>
  <b-card :header-class="headerclass" class="ml-2 mr-2">
    <template v-slot:header>
      <b class="text-danger">{{ title }}</b>
    </template>
    <b-card-text>
      <p
        class="news-item text-truncate"
        v-for="i in items.slice(0, 5)"
        :key="i.url"
      >
        <router-link
          class="text-danger"
          :to="'/article/news/' + url + '/' + i.url"
          >{{ i.title }}</router-link
        >
      </p>
    </b-card-text>
    <template v-slot:footer>
      <div class="text-right">
        <b-badge :to="'/catagory/news/' + url" variant="danger"
          >查看更多</b-badge
        >
      </div>
    </template>
  </b-card>
</template>
<script>
const chinesegen = require("chinesegen");
export default {
  methods: {
    genTitle() {
      return chinesegen({ count: Math.floor(Math.random() * (18 - 9)) + 9 })
        .text;
    }
  },
  props: ["headerclass", "title", "items", "url"]
};
</script>
<style lang="scss">
.news-item {
  line-height: 1 !important;
}
</style>
