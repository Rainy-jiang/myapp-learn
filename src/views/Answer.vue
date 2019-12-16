<template>
    <div class="answer">
        <Answerqa></Answerqa>
        <router-view></router-view>
    </div>
</template>
<script> 
import Answerqa from "@/components/Answer-qa.vue";
export default {
    name:'answer',
    components:{
        Answerqa,
    }
}
</script>