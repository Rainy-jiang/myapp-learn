<template>
  <div class="sign">
      <div class="regsiter-right">
        <div class="phone">
          <router-link :to="item.url" class="phone-reg" v-for="(item, index) in list" :key="index" @click.native="change(index)" :class="isactive == index ? 'active' : ''">{{item.title}}</router-link>
          <form action>
            <div class="phone-list">
              <input type="text" placeholder="手机号" />
            </div>
            <div class="phone-list">
              <input type="password" placeholder="密码" />
            </div>
          </form>
          <a class="forget" href="javascript:;">忘记密码？</a>
          <router-link class="submits" to="/personal">登录啦！</router-link>
          <p class="apply-reg">
            <span>还没有账号，请</span>
            <router-link class="reg-item" to="/">注册</router-link>
          </p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "sign",
  data () {
    return{
      isactive:0,
      list:[{
        title:'账号登陆',
        url:'/sign'
      },{
        title:'手机验证码登录',
        url:'/coad'
      }]
    }
  },
  methods: {
    change:function(index){
      this.isactive = index;
    }
  },
};
</script>
<style lang="less">
.sign {
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
        }
        .active {
          color: #adc700;
          border-bottom: 3px solid #abc700;
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
        }
        .forget {
          float: right;
          margin-top: 15px;
          margin-right: 63px;
          color: #9ba1ae;
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
          margin-top: 92px;
          border-radius: 20px;
        }
        .apply-reg {
          width: 400px;
          margin: 0 auto;
          margin-top: 24px;
          color: #cccccc;
          .reg-item{
              color: #abc700;
          }
        }
      }
    }
}
</style>