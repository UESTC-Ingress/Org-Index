<template>
  <b-card no-body>
    <b-img :src="src" fluid />
  </b-card>
</template>
<script>
export default {
  props: ["src"]
};
</script>
