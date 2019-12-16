<template>
  <div class="nav-wrapper wrapper">
    <div class="center">My Center</div>
    <div class="navigator">
      <router-link
        v-show="current != index "
        @click.native="chang(index)"
        :class="currentIndex == index ? 'active':''"
        v-for="(item,index) in arr"
        :key="index"
        :to="item.url"
      >{{item.title}}</router-link>
    </div>
    <a class="nav-item" href="javascript:;">
      <span class="icon iconfont">&#xe509;</span>
      <span>添加课程</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "Enav",
  data() {
    return {
      currentIndex: 3,
      current: 3,
      arr: [
        {
          title: "基本信息",
          url: "/personal/basic"
        },
        {
          title: "课程管理",
          url: "/personal/course"
        },
        {
          title: "我的问答",
          url: "/personal/answer"
        },
        {
          title: "我的收入",
          url: "/personal"
        }
      ],
    };
  },
  methods: {
    chang: function(index) {
      this.currentIndex = index;
      this.current = -1;
      if (index == 3) {
        this.current = 3;
      }
    }
  },

};
</script>
<style lang="less">
.nav-wrapper {
  height: 90px;
  .center {
    float: left;
    font-size: 22px;
    color: #00aaff;
    line-height: 90px;
    margin-right: 15px;
  }
  .navigator {
    float: left;
    line-height: 90px;
    a {
      float: left;
      width: 65px;
      height: 70px;
      font-size: 16px;
      margin-left: 80px;
    }
    .active {
      color: #00aaff;
      border-bottom: 2px solid #00aaff;
    }
  }
  .nav-item {
    text-align: center;
    float: right;
    display: block;
    width: 160px;
    height: 33px;
    box-sizing: border-box;
    margin-top: 23px;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    span {
      color: #00aaff;
      font-size: 16px;
      line-height: 33px;
    }
    .iconfont {
      margin-right: 10px;
    }
  }
}
</style>