<template>
     <footer>
        <div class="foot down">中国领先大学生成长平台@2019e学聘</div>
        <div class="foot">ICP备16500007 | <a href="javascript:;">联系我们</a> jiang@jiang.com | 
        <a  href="javascript:;">关于我们</a>
        </div>
    </footer>
</template>
<script>
export default {
    name:'Efooter',
    data(){
        return {};
    }
}
</script>
<style lang="less">
    footer {
    height: 120px;
    box-sizing: border-box;
    background: #fff;
}
footer .foot{
    color:#999999;
    text-align: center;
    a{
        color:#999999;
    }
}
footer .foot.down{
    padding:40px 0px 15px 0px;
}
</style>