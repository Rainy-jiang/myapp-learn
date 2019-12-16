<template>
  <div class="message">
    <Mymessage></Mymessage>
    <router-view></router-view>
  </div>
</template>
<script>
import Mymessage from "@/components/Mymessage.vue";


export default {
  name: "message",
  components:{
      Mymessage,
  }
};
</script>
<style>

</style>