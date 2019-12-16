<template>
  <div class="password-login">
    <div class="password-list">
      <p class="pssword-list-in">登录密码</p>
    </div>
    <div class="password-page">
      <form action>
        <div class="password-item">
          <label for>原密码</label>
          <input class="list-in" type="text" placeholder="请输入原始密码" />
        </div>
        <div class="password-item">
          <label for>新密码</label>
          <input class="list-in" type="text" placeholder="请输入新密码" />
        </div>
        <div class="password-item">
          <label for>确认密码</label>
          <input type="text" placeholder="请再次输入新密码" />
        </div>
        <div class="btn">
          <button class="confirm" disabled>确认修改</button>
          <button class="cancel" disabled>取消修改</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.password-login {
  float: right;
  width: 900px;
  height: 585px;
  background: #fff;
  border-radius: 5px;
  .password-list {
    height: 110px;
    line-height: 110px;
    border-bottom: 1px solid #eeeeee;
    .pssword-list-in {
      font-size: 16px;
      margin-left: 46px;
    }
  }
  .password-page {
    margin-left: 46px;
    margin-top: 30px;
    color: #999999;
    font-size: 16px;
    .password-item {
      padding-top: 15px;
      input {
        padding-left: 10px;
        margin-left: 20px;
        height: 44px;
        width: 400px;
        box-sizing: border-box;
        border: 1px solid #dddddd;
        outline: none;
        border-radius: 5px;
      }
      .list-in {
        margin-left: 35px;
      }
    }
    .btn {
      margin-top: 20px;
      margin-left: 84px;
      button {
        width: 160px;
        height: 44px;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
      }
      .confirm {
        background: #00aaff;
        color: #fff;
        margin-right: 20px;
        border: none;
      }
      .cancel {
        background: #fff;
        color: #333333;
        border: 1px solid #cccccc;
      }
    }
  }
}
</style>