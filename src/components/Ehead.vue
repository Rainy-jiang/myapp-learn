<template>
  <div class="ehead">
    <div class="head-wrapper wrapper">
      <div class="logo">
        <a href="javascript:;">
          <img src="../assets/logo.jpg" alt="网站logo" title="易学聘" />
        </a>
      </div>
      <div class="login">
        <router-link class="login-reg" to="/sign">登录</router-link>|
        <router-link class="login-reg" to="/">注册</router-link>
      </div>
    </div>
    <div class="jobs-wrapper">
      <div class="jobs-wrapper-list">
        <div class="lecture-pick">
          <img src="../assets/background.jpg" alt />
          <span class="shadow"></span>
        </div>
        <div class="regsiter-left">
          <a
            class="regsiter-left-list"
            href="javascript:;"
            v-for="(item,index) in list"
            :key="index"
            :class="count == index ? 'active' : ''"
            @click="change(index)"
          >
            <div class="regsiter-list">
              <span class="icon iconfont" v-html="item.icon"></span>
              <p>{{item.title}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ehead",
  data() {
    return {
      count: 1,
      list: [
        {
          title: "我是学生",
          icon: "&#xe61e;"
        },
        {
          title: "我是讲师",
          icon: "&#xe63c;"
        },
        {
          title: "我是HR",
          icon: "&#xe645;"
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
.head-wrapper {
  height: 88px;
  .logo {
    height: 54px;
    float: left;
    margin-top: 17px;
  }
  .login {
    float: right;
    line-height: 88px;
    padding-right: 28px;
    color: #999;
    .login-reg {
      margin: 0 12px;
      color: #999;
    }
  }
}
.jobs-wrapper-list {
  position: relative;
  height: 810px;
  .lecture-pick {
    position: relative;
    float: left;
    width: 512px;
    height: 810px;
    img {
      width: 512px;
      height: 810px;
    }
    .shadow {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: rgba(0, 0, 0, 0.6);
    }
  }
  .regsiter-left {
    width: 110px;
    height: 462px;
    box-shadow: 0px 0px 5px #e8e8e8;
    position: absolute;
    top: 137px;
    left: 402px;
    .regsiter-left-list {
      height: 115px;
      width: 110px;
      color: #fff;
      text-align: center;
      display: table;
      .regsiter-list {
        display: table-cell;
        vertical-align: middle;
        .iconfont {
          font-size: 20px;
        }
      }
      &.active {
        height: 230px;
        background: #adc700;
      }
    }
  }
}
</style>