<template>
  <div class="content">
    <div class="lecture content-item">
      <div class="lecture-list">
        <p class="course">我上传的课程</p>
        <p class="number indiv">3</p>
        <p class="indiv">个</p>
        <a class="see" href="javascript:;">查看详情></a>
      </div>
    </div>
    <div class="answer content-item">
      <div class="lecture-list">
        <p class="course">我的问答</p>
        <p class="number indiv">3</p>
        <p class="indiv">个</p>
        <a class="see" href="javascript:;">查看详情></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Econtent",
  data() {
    return {};
  }
};
</script>
<style lang="less">
.content {
  float: right;
  .content-item {
    width: 355px;
    height: 266px;
    float: left;
    border-radius: 5px;
    .lecture-list {
      margin-top: 35px;
      margin-left: 50px;
      .course {
        font-size: 18px;
      }
      .number {
        font-size: 32px;
        color: #333333;
        margin-right: 5px;
      }
      .indiv {
        display: inline-block;
        color: #666666;
        margin-top: 35px;
      }
      .see {
        display: block;
        color: #999999;
        margin-top: 30px;
      }
    }
  }
  .lecture {
    margin-right: 20px;
    background: url(../assets/lecture.jpg) no-repeat bottom right;
    background-size: 50%;
    background-color: #fff;
  }
  .answer {
    background: url(../assets/answer.jpg) no-repeat bottom right;
    background-size: 50%;
    background-color: #fff;
  }
}
</style>