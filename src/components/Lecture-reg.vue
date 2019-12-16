<template>
  <div class="lecture-reg">
      <div class="regsiter-right">
        <div class="phone">
          <p class="phone-reg">通过手机号码注册</p>
          <form action>
            <div class="phone-list">
              <input type="text" placeholder="手机号" />
              <a class="codes" href="javascript:;">获取验证码</a>
            </div>
            <div class="phone-list">
              <input type="text" placeholder="验证码" />
            </div>
            <div class="phone-list">
              <input type="password" placeholder="密码" />
            </div>
          </form>
          <router-link class="submits" to="/sign">提交注册</router-link>
        </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.lecture-reg {
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
        width: 400px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        font-weight: bold;
        border-bottom: 3px solid #eeeeee;
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
        margin-top: 37px;
        border-radius: 20px;
      }
    }
  }
}
</style>