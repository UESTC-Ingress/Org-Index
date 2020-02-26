<template>
  <div class="row mt-2 footer no-gutters">
    <div class="col-12 mt-4">
      <b-navbar type="dark">
        <div class="col-10 offset-1">
          <b-navbar-nav class="text-center">
            <b-nav-item>
              负责人信箱
            </b-nav-item>
            <b-nav-item>
              网站地图
            </b-nav-item>
            <b-nav-item>
              留言反馈
            </b-nav-item>
            <b-nav-item>
              联系我们
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar>
      <hr />
    </div>
    <div class="col-10 offset-1 mb-4 mt-4">
      <div class="row mb-4">
        <div class="col-5">
          <b-img class="whitelogo" src="@/assets/logo_long_new.png" fluid />
        </div>
        <div class="col-6 text-light">
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
