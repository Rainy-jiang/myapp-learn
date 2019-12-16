<template>
  <div class="answertop">
    <router-link
      class="activity-list"
      :to="item.url"
      v-for="(item,index) in list"
      :key="index"
      @click.native="change(index)"
    >
      <div class="icon-list">
        <span class="icon iconfont" v-html="count == index ? (item.icon) : ''"></span>
      </div>
      <span>{{item.title}}</span>
    </router-link>
    <a class="answertop-list" href="javascript:;">我要提问</a>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "answertop",
  data() {
    return {
      count: 0,
      list: [
        {
          title: "全部",
          icon: "&#xe61a;",
          url:''
        },
        {
          title: "处理",
          icon: "&#xe61a;",
          url:''
        }
      ]
    };
  },
  methods: {
    change: function(index) {
      this.count = index;
    }
  }
};
</script>
<style lang="less">
.answertop {
  float: right;
  width: 900px;
  height: 104px;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  .activity-list {
    position: relative;
    display: inline-block;
    line-height: 104px;
    margin-left: 30px;
    padding-left: 35px;
    margin-right: 25px;
    .icon-list {
      position: absolute;
      top: 40px;
      left: 0px;
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid #eeeeee;
      .iconfont {
        position: absolute;
        top: -39px;
        font-size: 26px;
        color: #00aaff;
      }
    }
  }
  .answertop-list {
    float: right;
    display: block;
    width: 160px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #00aaff;
    color: #fff;
    border-radius: 5px;
    margin: 36px 44px 0px 0px;
  }
}
</style>