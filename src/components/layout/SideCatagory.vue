<template>
  <b-card no-body header-bg-variant="danger" header-text-variant="light">
    <template v-slot:header>
      {{ nav.title }}
    </template>
    <b-list-group flush>
      <b-list-group-item
        :to="
          '/' +
            (typeof sub.type != 'undefined' ? sub.type + '/' : '') +
            nav.link +
            '/' +
            sub.link
        "
        v-for="sub in nav.sub"
        :key="sub.title"
      >
        {{ sub.title }}
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  props: ["nav"]
};
</script>
