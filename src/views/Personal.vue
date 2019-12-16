<template>
  <div class="personal">
    <Eheader></Eheader>
    <Enav></Enav>
    <div class="jobs-wrappers">
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>

    <Efooter></Efooter>
  </div>
</template>
<script>
import Eheader from "@/components/Eheader.vue";
import Enav from "@/components/Enav.vue";
import Efooter from "@/components/Efooter.vue";

export default {
  name: "personal",
  components: {
    Eheader,
    Enav,
    Efooter
  },
  mounted() {
    this.axios.get("/api/getList").then(function(res) {
      window.console.log(res);
    });
  }
};
</script>
<style>
.jobs-wrappers {
  width: 100%;
  background-color: #f4f4f4;
  box-shadow: 0px 5px 5px #e9e9e9 inset;
}
.jobs-wrappers .wrapper {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>