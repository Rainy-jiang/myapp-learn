<template>
  <div class="mymessage">
    <div class="mymessage-left">
      <p class="mymessage-list">姓名</p>
      <p class="mymessage-list">出生日期</p>
      <p class="mymessage-list">性别</p>
      <p class="mymessage-list">手机号</p>
      <p class="mymessage-list">邮箱</p>
      <p class="mymessage-list">身份证</p>
      <p class="mymessage-list">微信号</p>
      <p class="mymessage-list">QQ号</p>
    </div>
    <div class="mymessage-right">
      <p class="mymessage-item">刘子熙</p>
      <p class="mymessage-item">1990年3月2日</p>
      <p class="mymessage-item">男</p>
      <p class="mymessage-item">15910578034 <span class="yyz">√ 已验证</span></p>
      <p class="mymessage-item">xuepin@admin.com</p>
      <p class="mymessage-item">110324199003024357</p>
      <p class="mymessage-item">13810194417</p>
      <p class="mymessage-item">367722645</p>
    </div>
    <router-link class="edit-list" to="/personal/basic/modify">
      <span class="icon iconfont">&#xe505;</span>
      <span>编辑</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "mymessage"
};
</script>
<style lang="less">
.mymessage {
  float: right;
  width: 900px;
  height: 585px;
  background: #fff;
  border-radius: 5px;
  padding-top: 30px;
  box-sizing: border-box;
  .mymessage-left {
    float: left;
     width: 88px;
    text-align: right;
    .mymessage-list{
      line-height: 60px;
      color: #999999;
    }
  }
  .mymessage-right {
    float: left;
    width: 650px;
    margin-left: 35px;
   .mymessage-item{
     line-height: 60px;
     color: #333333;
     .yyz{
       margin-left: 15px;
       font-weight: bold;
       color: #9bc604;
     }
   }
  }
  .edit-list {
    float: right;
    line-height: 60px;
    margin-right: 40px;
    color: #00aaff;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>