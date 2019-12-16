<template>
  <div class="modify">
    <div class="modify-left">
      <p class="modify-list">姓名</p>
      <p class="modify-list">出生日期</p>
      <p class="modify-list">性别</p>
      <p class="modify-list">手机号</p>
      <p class="modify-list">邮箱</p>
      <p class="modify-list">身份证</p>
      <p class="modify-list">微信号</p>
      <p class="modify-list">QQ号</p>
    </div>
    <form class="modify-right">
      <input type="text" class="modify-item" value="刘子熙" />
      <input type="text" class="modify-item" placeholder="本项不可输入，填写完身份证信息后自动同步出生日期" />
      <select class="modify-item">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
      <div class="phone">
        <input type="text" class="modify-item" value="15910578034" />
        <span class="yyz">√ 已验证</span>
        <button class="btn" disabled>获取验证码</button>
      </div>
      <input type="text" class="modify-item" value="xuepin@admin.com" />
      <input type="text" class="modify-item" value="110324199003024357" />
      <input type="text" class="modify-item" value="13810194417" />
      <input type="text" class="modify-item" value="367722645" />
      <router-link class="modify-save canael" to="/personal/basic/message">保存信息</router-link>
      <router-link class="modify-save" to="/personal/basic/message">取消修改</router-link>
    </form>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "modify"
};
</script>
<style lang="less">
.modify {
  float: right;
  width: 900px;
  height: 585px;
  background: #fff;
  border-radius: 5px;
  padding-top: 30px;
  box-sizing: border-box;
  .modify-left {
    float: left;
    width: 88px;
    text-align: right;
    .modify-list {
      line-height: 60px;
      color: #999999;
    }
  }
  .modify-right {
    float: left;
    margin-left: 20px;
    .phone {
      position: relative;
      .yyz {
        position: absolute;
        top: 13px;
        left: 160px;
        font-weight: bold;
        color: #9bc604;
      }
      .btn {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 160px;
        height: 44px;
        outline: none;
        border: 1px solid #cccccc;
        background: #fff;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .modify-item {
      display: block;
      width: 400px;
      height: 44px;
      margin-bottom: 17px;
      outline: none;
      padding-left: 15px;
      border: 1px solid #dddddd;
      border-radius: 5px;
      box-sizing: border-box;
    }
    input::-webkit-input-placeholder {
      color: #cccccc;
    }
    .modify-save {
      display: inline-block;
      width: 160px;
      height: 44px;
      border: 1px solid #dddddd;
      text-align: center;
      line-height: 44px;
      border-radius: 10px;
      &.canael{
          border: none;
          background: #00aaff;
          color: #fff;
          margin-right: 20px;
      }
    }
  }
}
</style>