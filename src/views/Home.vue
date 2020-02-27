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
    <div class="row justify-content-around">
      <div class="col-12 mb-2"><ImgCard :src="anni" /></div>
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col-10 offset-1 offset-md-0 col-md-6 mb-2">
            <SecondaryNews
              headerclass="subnews1"
              :title="news[0].title"
              :items="news[0].items"
              url="research"
            />
          </div>
          <div class="col-10 offset-1 offset-md-0 col-md-6 mb-2">
            <SecondaryNews
              headerclass="subnews2"
              :title="news[1].title"
              :items="news[1].items"
              url="projects"
            />
          </div>
          <div class="col-10 offset-1 offset-md-0 col-md-6 mb-2">
            <SecondaryNews
              headerclass="subnews3"
              :title="news[2].title"
              :items="news[2].items"
              url="generic"
            />
          </div>
          <div class="col-10 offset-1 offset-md-0 col-md-6 mb-2">
            <SecondaryNews
              headerclass="subnews4"
              :title="news[3].title"
              :items="news[3].items"
              url="conference"
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
        items: news_research
      },
      {
        title: "项目进展",
        items: news_projects
      },
      {
        title: "综合新闻",
        items: news_generic
      },
      {
        title: "会议信息",
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
