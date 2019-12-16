<template>
  <div class="edit">
  <AuthenticEdit></AuthenticEdit>
  <router-view></router-view>
  </div>
</template>
<script>
import AuthenticEdit from "@/components/Authentic-edit.vue";
export default {
  name: "edit",
  components: {
    AuthenticEdit,
  }
};
</script>
<style>

</style>