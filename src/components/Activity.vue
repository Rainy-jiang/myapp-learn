<template>
  <div class="activity">
    <router-link class="activity-list" :to="item.url" v-for="(item,index) in list" :key="index" @click.native="change(index)">
      <div class="icon-list"><span class="icon iconfont" v-html="count == index ? (item.icon) : ''" ></span></div>
      <span>{{item.title}}</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "activity",
  data() {
    return {
        count:0,
      list: [
        {
          title: "已发布课程",
          icon: "&#xe61a;",
          url:'/personal/course/activity'
        },
        {
          title: "审核中的课程",
          icon: "&#xe61a;",
          url:'/personal/course/activity/activityin'
        },
        {
          title: "未通过审核课程",
          icon: "&#xe61a;",
          url:'/personal/course/activity/activitypass'
        }
      ]
    };
  },
  methods: {
      change:function(index){
          this.count = index;
      }
  },
};
</script>
<style lang="less">
.activity {
  float: right;
  width: 900px;
  height: 104px;
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  .activity-list {
    position: relative;
    display: inline-block;
    line-height: 104px;
    margin-left: 30px;
    padding-left: 35px;
    .icon-list {
      position: absolute;
      top: 40px;
      left: 0px;
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid #eeeeee;
      .iconfont{
          position: absolute;
          top: -39px;
          font-size: 26px;
          color: #00aaff;
      }
    }
  }
}
</style>