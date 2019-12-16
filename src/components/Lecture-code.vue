<template>
  <div class="lecturecode">
    <div class="regsiter-right">
      <div class="phone">
        <router-link
          :to="item.url"
          class="phone-reg"
          v-for="(item, index) in list"
          :key="index"
          @click.native="change(index)"
          :class="isactive == index ? 'active' : ''"
        >{{item.title}}</router-link>
        <form action>
          <div class="phone-list">
            <input type="text" placeholder="手机号" />
            <a class="codes" href="javascript:;">获取验证码</a>
          </div>
          <div class="phone-list">
            <input type="text" placeholder="验证码" />
          </div>
        </form>
        <router-link class="submits" to="/personal">登录啦！</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lecturecode",
  data() {
    return {
      isactive: 1,
      list: [
        {
          title: "账号登陆",
          url: "/sign"
        },
        {
          title: "手机验证码登录",
          url: "/coad"
        }
      ]
    };
  },
  methods: {
    change: function(index) {
      this.isactive = index;
    }
  }
};
</script>
<style lang="less">
.lecturecode {
  width: 527px;
  height: 462px;
  box-shadow: 0px 0px 5px #e8e8e8;
  position: absolute;
  top: 225px;
  left: 512px;
  .regsiter-right {
    float: left;
    width: 527px;
    height: 462px;
    background: #fff;
    .phone {
      text-align: center;
      margin-top: 50px;
      .phone-reg {
        display: inline-block;
        width: 200px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        font-weight: bold;
        border-bottom: 3px solid #eeeeee;
        &.active {
          color: #adc700;
          border-bottom: 3px solid #abc700;
        }
      }

      .phone-list {
        position: relative;
        width: 400px;
        margin: 0 auto;
        height: 72px;
        border-bottom: 1px solid #eeeeee;
        input {
          outline: none;
          border: none;
          width: 400px;
          height: 20px;
          margin-top: 50px;
        }
        .codes {
          position: absolute;
          right: 0px;
          bottom: 0px;
          color: #adc700;
        }
      }
      .submits {
        display: block;
        width: 400px;
        height: 44px;
        line-height: 44px;
        background: #adc700;
        color: #fff;
        text-align: center;
        margin: 0 auto;
        margin-top: 95px;
        border-radius: 20px;
      }
    }
  }
}
</style>