<template>
  <div class="upload-message">
    <div class="await-header">
      <p class="await-item">全民股东_201610241223.MP4</p>
      <div class="await-list">
        <span class="await-item-list"></span>
        <span class="icon iconfont">&#xe61a;</span>
      </div>
      <p class="await-success">上传成功 100%</p>
      <a class="await-review" href="javascript:;">重新上传</a>
    </div>
    <div class="message-center">
      <div class="message-left">
        <p class="message-left-item">标题</p>
        <p class="message-left-item">分类</p>
        <p class="message-left-item">课程介绍</p>
      </div>
      <form class="message-right">
        <input class="message-right-item" type="text" placeholder="请输入课程标题" />
        <select class="message-right-item">
          <option value disabled>请选择课程分类</option>
          <option value>Javascript</option>
          <option value>Java</option>
          <option value>PHP</option>
        </select>
        <textarea class="message-right-item kcjs" placeholder="请输入课程介绍"></textarea>
        <button class="btn" disabled>保存信息</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "upload"
};
</script>
<style lang="less">
.upload-message {
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
    .await-review {
      float: right;
      font-size: 12px;
      color: #00aaff;
      margin-right: 50px;
    }
  }
  .message-center {
    width: 900px;
    padding-top: 30px;
    box-sizing: border-box;
    .message-left {
      float: left;
      width: 95px;
      text-align: right;
      .message-left-item {
        line-height: 60px;
        color: #999999;
      }
    }
    .message-right {
      float: left;
      margin-left: 20px;
      .message-right-item {
        display: block;
        width: 740px;
        height: 44px;
        margin-bottom: 20px;
        outline: none;
        padding-left: 15px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        box-sizing: border-box;
      }
      .kcjs {
        resize: none;
        height: 173px;
        padding-top: 10px;
      }
      .btn {
        width: 160px;
        height: 44px;
        background: #00aaff;
        color: #fff;
        border: none;
        border-radius: 10px;
      }
    }
  }
}
</style>
