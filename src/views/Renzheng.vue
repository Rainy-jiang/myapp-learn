<template>
  <div class="renzheng">
  <Authentic></Authentic>
  <router-view></router-view>
  </div>
</template>
<script>
import Authentic from "@/components/Authentic.vue";

export default {
  name: "renzheng",
  components: {
    Authentic,
  }
};
</script>
<style>

</style>