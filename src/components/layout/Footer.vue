<template>
  <div class="row mt-2 footer no-gutters">
    <div class="col-10 offset-1 mt-4">
      <b-navbar type="dark">
        <div class="col-6">
          <b-navbar-nav class="row">
            <b-nav-item class="col-12 col-md-3" href="admin@nia.ac.cn">
              负责人信箱
            </b-nav-item>
            <b-nav-item class="col-12 col-md-3">
              网站地图
            </b-nav-item>
            <b-nav-item class="col-12 col-md-3">
              留言反馈
            </b-nav-item>
            <b-nav-item class="col-12 col-md-3" to="/page/info/contact">
              联系我们
            </b-nav-item>
          </b-navbar-nav>
        </div>
        <div class="ml-auto">
          <b-form-select
            v-model="linkSelected"
            :value="null"
            :options="extLinks"
          ></b-form-select>
        </div>
      </b-navbar>
      <hr />
    </div>
    <div class="col-10 offset-1 mb-4 mt-4">
      <div class="row mb-4">
        <div class="col-12 col-md-5">
          <b-img class="whitelogo" src="@/assets/logo_long_new.png" fluid />
        </div>
        <div class="col-12 col-md-6 text-light mt-4 mt-md-0">
          <small>
            Copyright &copy; 2020 奈安提克计划中国奇异物质研究所 <br />
            地址:成都市高新区（西区）西源大道2006号 <br />
            邮编:611731 电话:1331-13313113-0100 NIACNET备1331-02号
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background-image: url("~@/assets/footer-bg.png");
}
.whitelogo {
  filter: brightness(0) invert(1);
}
</style>
<script>
export default {
  data: () => ({
    linkSelected: null,
    extLinks: [
      {
        text: "友情链接",
        value: null
      },
      {
        text: "奈安提克计划首页",
        value: "https://nianticproject.com"
      }
    ]
  }),
  watch: {
    linkSelected: function(i) {
      if (i != null) window.location.href = i;
    }
  }
};
</script>
