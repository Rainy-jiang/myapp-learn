<template>
  <nav>
    <div class="wrapper">
      <div class="logo">
        <img src="../assets/e-logo.jpg" alt />
      </div>
      <div class="login">
        <a href="javascript:;">
          <img src="../assets/E-image.jpg" alt />
          <span class="nick-name">罗密欧</span>
        </a>
         <span class="arrow"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Eheader",
  data() {
    return {};
  }
};
</script>
<style lang="less">
.wrapper {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
nav {
  width: 100%;
  height: 40px;
  background-color: #333333;
  .logo {
    float: left;
    height: 40px;
    img {
      height: 30px;
      margin-top: 5px;
    }
  }
  .login {
    float: right;
    width: 103px;
    margin-right: 52px;

    a {
      display: inline-block;
      color: #fff;
      img {
        width: 25px;
        border-radius: 50%;
        margin-top: 6px;
      }
      .nick-name {
        margin-left: 10px;
        line-height: 40px;
        vertical-align: top;
      }
    }
    .arrow {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotateZ(-45deg);
        margin-left: 10px;
        vertical-align: 8px;
        cursor: pointer;
      }
  }
}
</style>