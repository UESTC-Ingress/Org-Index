<template>
  <div class="ml-2 h-100">
    <div class="row h-100 w-100 no-gutters">
      <b-card-text class="mt-2 ml-2 mr-2 mb-auto ">
        <small>头条新闻</small>
        <h5 class="text-truncate">
          <router-link
            class="text-danger"
            :to="'/article/news/headline/' + head_news.headline.url"
          >
            {{ head_news.headline.title }}
          </router-link>
        </h5>
        <p>
          <small>
            {{ head_news.headline.desc }}<br />
            <router-link
              class="text-danger"
              :to="'/article/news/headline/' + head_news.headline.url"
            >
              了解更多 >>
            </router-link>
          </small>
        </p>
        <hr />
        <div
          class="row news-item no-gutters"
          v-for="i in headline.slice(0, 5)"
          :key="i.title"
        >
          <div class="col col-auto">
            <router-link
              :to="'/article/news/headline/' + i.url"
              class="text-danger"
              >{{ i.title }}</router-link
            >
          </div>
          <div class="col">
            <p class="text-right">
              <small>{{ i.time }}</small>
            </p>
          </div>
        </div>
      </b-card-text>
      <b-card-footer class="align-self-end text-right w-100">
        <b-badge to="/catagory/news/headline" variant="danger"
          >查看更多</b-badge
        >
      </b-card-footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.news-item .col {
  line-height: 0.8 !important;
}
b-card-footer {
  margin: 5px;
}
</style>
<script>
import headline from "@/../public/doc/catagory/news/headline.json";
import head_news from "@/assets/data/head-news.json";
export default {
  data: () => ({
    headline: headline,
    head_news: head_news
  })
};
</script>
