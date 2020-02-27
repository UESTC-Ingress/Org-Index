<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="600"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide caption="XM自旋的自抑制机制异常研究进展">
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="/doc/images/home_header_scroll_xm_new_char_1.jpg"
        />
      </template>
      <p>
        奈安提克研究所在 2020年1月 的 II 类异常态 XM
        粒子实验中发现了此类异常，成为世界第一家能够独立创造该种异常条件的实验机构。
      </p>
    </b-carousel-slide>
    <b-carousel-slide caption="奇异物质新的高维特性被发现">
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="/doc/images/home_header_scroll_high_dimension_breakthough_1.jpg"
        />
      </template>
      <p>
        2020年一月，本院成功实现了对博格达诺维奇现象的完整复现，成功证明了 XM
        存在一种新的高维特性。
      </p>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
