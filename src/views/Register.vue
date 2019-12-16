<template>
  <div class="register">
    <Ehead></Ehead>
    <LectureReg></LectureReg>
    <router-view></router-view>
  </div>
</template>
<script>
import Ehead from "@/components/Ehead.vue";
import LectureReg from "@/components/Lecture-reg.vue";

export default {
  name: "register",
  components: {
    Ehead,
    LectureReg
  }
};
</script>
<style>
.register{
  position: relative;
}
</style>