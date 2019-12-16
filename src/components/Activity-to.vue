<template>
  <div class="activityTo">
    <div class="lecture-list">
      <a class="lecture-pick" href="javascript:;">
        <img src="../assets/lecture01.jpg" alt />
      </a>
      <div class="lecture-item">
        <h3>
          显露你实力的一面
          <span class="lecturing">「进行中」</span>
        </h3>
        <p class="time">上传时间: 3月23日 15:43</p>
        <div class="lec-list">
          <span class="icon iconfont">&#xe507;</span>
          <span class="student">128位学员</span>
          <span class="icon iconfont">&#xe760;</span>
          <span>18条评论</span>
        </div>
        <p class="free">免费</p>
      </div>
    </div>
    <div class="lecture-list">
      <a class="lecture-pick" href="javascript:;">
        <img src="../assets/lecture02.jpg" alt />
      </a>
      <div class="lecture-item">
        <h3>
          显露你实力的一面
          <span class="lectured">「已结束」</span>
        </h3>
        <p class="time">上传时间: 3月23日 15:43</p>
        <div class="lec-list">
          <span class="icon iconfont">&#xe507;</span>
          <span class="student">128位学员</span>
          <span class="icon iconfont">&#xe760;</span>
          <span>18条评论</span>
        </div>
        <p class="free">￥199</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "activityTo"
};
</script>
<style lang="less">
.activityTo {
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
      height: 116px;
      color: #666666;
      margin-top: 47px;
      margin-left: 25px;
      .lecturing {
        color: #00aaff;
      }
      .lectured{
          color: #cccccc;
      }
      .time {
        color: #a0a0a0;
        margin-top: 10px;
      }
      .lec-list {
        margin-top: 10px;
        color: #cccccc;
        .student {
          margin-right: 15px;
        }
      }
      .free {
        font-size: 20px;
        color: #00aaff;
        margin-top: 10px;
      }
    }
  }
}
</style>