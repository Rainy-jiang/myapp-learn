<template>
  <div class="activityPass">
    <div class="lecture-list">
      <a class="lecture-pick" href="javascript:;">
        <img src="../assets/lecture01.jpg" alt />
      </a>
      <div class="lecture-item">
        <h3>显露你实力的一面</h3>
        <p class="time">上传时间: 3月23日 15:43</p>
        <p class="free">失败原因:内容包含反动性质，请修改</p>
      </div>
      <div class="revision-list">
        <a class="revision" href="javascript:;">修改课程</a>
        <a class="delete" href="javascript:;">删除课程</a>
      </div>
    </div>
    <div class="lecture-list">
      <a class="lecture-pick" href="javascript:;">
        <img src="../assets/lecture02.jpg" alt />
      </a>
      <div class="lecture-item">
        <h3>显露你实力的一面</h3>
        <p class="time">上传时间: 3月23日 15:43</p>
        <p class="free">失败原因:内容包含反动性质，请修改</p>
      </div>
      <div class="revision-list">
        <a class="revision" href="javascript:;">修改课程</a>
        <a class="delete" href="javascript:;">删除课程</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "activityPass"
};
</script>
<style lang="less">
.activityPass {
  float: right;
  width: 900px;
  height: 481px;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .lecture-list {
    height: 203px;
    box-sizing: border-box;
    border-top: 1px solid #eeeeee;
    .lecture-pick {
      float: left;
      display: block;
      width: 188px;
      height: 116px;
      margin-top: 47px;
      margin-left: 30px;
      img {
        width: 188px;
      }
    }
    .lecture-item {
      float: left;
      height: 85px;
      color: #666666;
      margin-top: 65px;
      margin-left: 25px;
      .time {
        color: #a0a0a0;
        margin-top: 10px;
      }
      .free {
        font-size: 20px;
        color: #00aaff;
        margin-top: 10px;
      }
    }
    .revision-list {
      float: left;
      text-align: center;
      width: 161px;
      margin-top: 65px;
      margin-right: 43px;
      .revision {
        display: block;
        float: right;
        width: 161px;
        height: 33px;
        line-height: 33px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
        border-radius: 20px;
        color: #00aaff;
        margin-bottom: 10px;
      }
      .delete {
          color:#cccccc;
      }
    }
  }
}
</style>