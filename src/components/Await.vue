<template>
  <div class="await">
    <div class="await-header">
      <p class="await-item">全民股东_201610241223.MP4</p>
      <div class="await-list">
        <span class="await-item-list"></span>
        <span class="icon iconfont">&#xe61a;</span>
      </div>
      <p class="await-success">上传成功 100%</p>
    </div>
    <div class="await-center">
      <span class="icon iconfont">&#xe61a;</span>
      <p class="await-save">保存成功，等待审核</p>
      <p class="await-upload">
        课件身上传成功，正在进行人工审核，我们会在24小
        <br />时后告知您审核结果，请耐心等候。
      </p>
      <router-link class="continue-upload" to="/personal/course/uploadmessage">继续上传</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "await",
  data() {
    return {};
  }
};
</script>
<style lang="less">
.await {
  float: right;
  width: 900px;
  height: 585px;
  background: #fff;
  border-radius: 5px;
  .await-header {
    width: 100%;
    height: 157px;
    background: #fafeff;
    border: 1px solid #f6f6f6;
    .await-item {
      margin-top: 44px;
      margin-left: 40px;
      color: #333333;
    }
    .await-list {
      margin-left: 40px;
      margin-top: 10px;
      .await-item-list {
        display: inline-block;
        width: 800px;
        height: 8px;
        background: #00aaff;
        border-radius: 8px;
      }
      .iconfont {
        color: #00aaff;
        margin-left: 10px;
      }
    }
    .await-success {
      margin-left: 40px;
      margin-top: 10px;
      color: #999999;
    }
  }
  .await-center {
    width: 900px;
    text-align: center;
    .iconfont {
      display: block;
      font-size: 80px;
      color: #00aaff;
      margin-top: 80px;
    }
    .await-save {
      margin-top: 2px;
      font-size: 24px;
    }
    .await-upload {
      margin-top: 10px;
      color: #888888;
      margin-bottom: 23px;
    }
    .continue-upload {
      display: block;
      width: 160px;
      height: 44px;
      line-height: 44px;
      background: #00aaff;
      border-radius: 10px;
      margin: 0 auto;
    }
  }
}
</style>