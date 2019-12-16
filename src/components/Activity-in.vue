<template>
  <div class="activityIn">
    <div class="lecture-list">
      <a class="lecture-pick" href="javascript:;">
        <img src="../assets/lecture01.jpg" alt />
      </a>
      <div class="lecture-item">
        <h3>显露你实力的一面</h3>
        <p class="time">上传时间: 3月23日 15:43</p>
        <p class="free">免费</p>
      </div>
      <a class="revision" href="javascript:;">修改课程</a>
    </div>
    <div class="lecture-list">
      <a class="lecture-pick" href="javascript:;">
        <img src="../assets/lecture02.jpg" alt />
      </a>
      <div class="lecture-item">
        <h3>显露你实力的一面</h3>
        <p class="time">上传时间: 3月23日 15:43</p>
        <p class="free">￥199</p>
      </div>
      <a class="revision" href="javascript:;">修改课程</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "activityIn"
};
</script>
<style lang="less">
.activityIn {
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
    .revision{
        display: block;
        float: right;
        width: 161px;
        height: 33px;
        text-align: center;
        line-height: 33px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
        border-radius: 20px;
        color:#00aaff;
        margin-top: 65px;
        margin-right: 43px;
    }
  }
}
</style>