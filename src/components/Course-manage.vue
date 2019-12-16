<template>
  <div class="manage">
    <div class="personal-pick">
      <img src="../assets/E-image.jpg" alt />
      <a href="javascript:;">编辑</a>
    </div>
    <router-link
      class="personal-item"
      :class="currentIndex === index ? 'active':''"
      @click.native="change(index)"
      v-for="(item,index) in arr"
      :key="index"
      :to="item.url"
    >
      <span class="icon iconfont" v-html="item.icon"></span>
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "manage",
  data() {
    return {
      currentIndex: 0,
      arr: [
        {
          title: "我的课程",
          icon: "&#xe6bb;",
          url: "/personal/course"
        },
        {
          title: "我的活动",
          icon: "&#xe603;",
          url: "/personal/course/activity"
        }]
    };
  },
  methods: {
    change:function(index){
      this.currentIndex = index;
    }
  },
};
</script>
<style lang="less">
.manage {
  float: left;
  width: 280px;
  height: 585px;
  background: #fff;
  border-radius: 5px;
  .personal-pick {
    position: relative;
    height: 100px;
    margin-top: 50px;
    text-align: center;
    margin-bottom: 10px;
    img {
      width: 100px;
      border-radius: 50%;
    }
    a {
      display: block;
      position: absolute;
      line-height: 50px;
      left: 90px;
      top: 50px;
      background: rgba(0, 0, 0, 0.4);
      height: 50px;
      width: 100px;
      color: #fff;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
  .personal-item {
    display: block;
    height: 25px;
    line-height: 25px;
    text-align: center;
    margin-top: 35px;
    font-size: 16px;
    color: #666666;
    .iconfont {
      margin-right: 8px;
      font-size: 20px;
    }
  }
  .active {
    color: #00aaff;
  }
}
</style>