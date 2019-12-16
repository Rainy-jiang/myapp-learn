<template>
  <div class="cyrrency">
    <Emiddle></Emiddle>
    <Econtent></Econtent>
    <Estudent></Estudent>
  </div>
</template>
<script>
import Emiddle from "@/components/Emiddle.vue";
import Econtent from "@/components/Econtent.vue";
import Estudent from "@/components/Estudent.vue";

export default {
  name: "currency",
  components: {
    Emiddle,
    Econtent,
    Estudent
  }
};
</script>
<style>
.jobs-wrapper {
  width: 100%;
  background-color: #f4f4f4;
  box-shadow: 0px 5px 5px #e9e9e9 inset;
}
.jobs-wrapper .wrapper {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>