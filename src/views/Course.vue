<template>
    <div class="course">
        <Coursemanage></Coursemanage>
        <router-view></router-view>
    </div>
</template>
<script> 
import Coursemanage from "@/components/Course-manage.vue";
export default {
    name:'course',
    components:{
        Coursemanage,
    }
}
</script>