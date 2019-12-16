<template>
  <div class="basic">
    <Information></Information>
    <router-view></router-view>
  </div>
</template>
<script>
import Information from "@/components/Information.vue";

export default {
  name: "basic",
  components: {
    Information,
  }
};
</script>
<style>
</style>