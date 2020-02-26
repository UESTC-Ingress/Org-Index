<template>
  <div>
    <div class="header-header mb-4 text-muted">
      <div class="d-none d-md-block">
        <div class="row headerheaderbar pb-2 pt-1 no-gutters">
          <div class="col offset-1">
            <small>{{ Date() }}</small>
          </div>
          <div class="col ml-auto text-right">
            <small>
              <a class="text-muted" href="mailto:admin@nia.ac.cn">联系我们</a> |
              <a class="text-muted" href="https://net.nia.ac.cn">内部资源</a> |
              <a class="text-muted" href="http://mail.nia.ac.cn">邮件系统</a> |
              <a class="text-muted" href="mailto:coop@nia.ac.cn">申请合作</a>
            </small>
          </div>
          <div class="col-1" />
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-10 offset-1 mt-4 mb-4 col-md-6">
          <b-img class="headerimg" :src="logo_long" fluid />
        </div>
        <div class="w-100">
          <b-navbar toggleable="lg" type="dark" variant="danger">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <div class="col-12">
              <b-collapse id="nav-collapse " is-nav>
                <b-navbar-nav>
                  <div v-for="link in links" :key="link.title">
                    <b-nav-item
                      :to="'/' + link.link"
                      v-if="typeof link.sub === 'undefined'"
                    >
                      {{ link.title }}
                    </b-nav-item>
                    <b-nav-item-dropdown v-else :text="link.title">
                      <b-dropdown-item
                        :to="
                          '/' +
                            (typeof subitem.type != 'undefined'
                              ? subitem.type + '/'
                              : '') +
                            link.link +
                            '/' +
                            subitem.link
                        "
                        v-for="subitem in link.sub"
                        :key="subitem.title"
                        >{{ subitem.title }}</b-dropdown-item
                      >
                    </b-nav-item-dropdown>
                  </div>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto d-none d-xl-block">
                  <b-input-group right>
                    <b-form-input
                      class="mr-sm-1 barsearch"
                      placeholder="输入搜索内容"
                    ></b-form-input>
                    <b-button
                      variant="outline-light"
                      class="my-sm-0"
                      type="submit"
                      >搜索</b-button
                    >
                  </b-input-group>
                </b-navbar-nav>
              </b-collapse>
            </div>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo_long from "@/assets/logo_long_new.png";
import navlinks from "@/assets/data/nav.json";
export default {
  data: () => ({
    logo_long: logo_long,
    links: navlinks
  })
};
</script>
<style lang="scss" scoped>
.headerimg {
  filter: drop-shadow(5px 5px 5px #fff);
}
.headerheaderbar {
  background-color: rgba($color: #ffffff, $alpha: 0.2);
}
.header-header {
  background-image: url("~@/assets/header_bg.png");
}
.barsearch {
  &::placeholder {
    color: white;
  }
  background-color: transparent;
}
</style>
