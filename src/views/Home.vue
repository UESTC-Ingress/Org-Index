<template>
  <div>
    <b-card class="mb-2" no-body>
      <div class="row justify-content-around no-gutters">
        <div class="col-12 col-md-7">
          <SliderView />
        </div>
        <div class="col-12 col-md-5">
          <PrimaryNews />
        </div>
      </div>
    </b-card>
    <div class="row justify-content-around no-gutters">
      <div class="col-12 mb-2"><ImgCard :src="anni" /></div>
      <div class="col-12 col-md-8">
        <div class="row no-gutters">
          <div
            class="col-10 offset-1 offset-md-0 col-md-6 mb-2"
            v-for="i in [1, 2, 3, 4]"
            :key="i"
          >
            <SecondaryNews
              :headerclass="'subnews' + i"
              :title="news[i - 1].title"
              :items="news[i - 1].items"
              :url="news[i - 1].url"
            />
          </div>
        </div>
      </div>
      <div class="col-10 col-md-4 mb-2">
        <Functions />
        <b-card header-class="topic" no-body>
          <template v-slot:header>
            <b class="text-danger">专题</b>
          </template>
          <Topic />
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import SliderView from "@/components/Home/SliderView";
import PrimaryNews from "@/components/Home/PrimaryNews";
import SecondaryNews from "@/components/Home/SecondaryNews";
import ImgCard from "@/components/Home/ImgCard";
import Functions from "@/components/Home/Functions";
import Topic from "@/components/Home/Topic";

import news_conference from "@/../public/doc/catagory/news/conference.json";
import news_research from "@/../public/doc/catagory/news/research.json";
import news_projects from "@/../public/doc/catagory/news/projects.json";
import news_generic from "@/../public/doc/catagory/news/generic.json";
import anni from "@/assets/anni.png";

export default {
  data: () => ({
    anni: anni,
    news: [
      {
        title: "科研动态",
        url: "research",
        items: news_research
      },
      {
        title: "项目进展",
        url: "projects",
        items: news_projects
      },
      {
        title: "综合新闻",
        url: "generic",
        items: news_generic
      },
      {
        title: "会议信息",
        url: "conference",
        items: news_conference
      }
    ]
  }),
  components: {
    SliderView,
    PrimaryNews,
    SecondaryNews,
    ImgCard,
    Functions,
    Topic
  }
};
</script>
<style lang="scss">
.subnews1 {
  background: url("~@/assets/header_1.png");
  background-size: cover;
}
.subnews2 {
  background: url("~@/assets/header_2.png");
  background-size: cover;
}
.subnews3 {
  background: url("~@/assets/header_3.png");
  background-size: cover;
}
.subnews4 {
  background: url("~@/assets/header_4.png");
  background-size: cover;
}
.topic {
  background: url("~@/assets/header_5.png");
  background-size: cover;
}
</style>
