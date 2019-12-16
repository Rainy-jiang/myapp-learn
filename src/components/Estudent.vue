<template>
  <div class="newCadets">
    <div class="cadets-list">
      <p class="cadets">最新学员</p>
      <p class="newly">一周内新增25位学员</p>
    </div>
    <ul class="student">
      <li class="student-item">
        <img src="../assets/E-image.jpg" alt />
        <p class="student-name">杨志</p>
      </li>
      <li class="student-item">
        <img src="../assets/E-image.jpg" alt />
        <p class="student-name">杨晶晶</p>
      </li>
      <li class="student-item">
        <img src="../assets/E-image.jpg" alt />
        <p class="student-name">吕子秋</p>
      </li>
      <li class="student-item">
        <img src="../assets/E-image.jpg" alt />
        <p class="student-name">闫强</p>
      </li>
      <li class="student-item">
        <img src="../assets/E-image.jpg" alt />
        <p class="student-name">郭小怡</p>
      </li>
    </ul>
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
.newCadets {
  float: right;
  width: 730px;
  height: 265px;
  background-color: #fff;
  margin-top: 20px;
  .cadets-list {
    margin-top: 35px;
    float: left;
    width: 100%;
    .cadets {
      float: left;
      font-size: 18px;
      margin-left: 48px;
    }
    .newly {
      float: right;
      margin-right: 55px;
      color: #999999;
    }
  }
  .student {
    margin-top: 44px;
    float: left;
    .student-item {
      float: left;
      margin-left: 50px;
      img {
        width: 88px;
      }
      .student-name {
        text-align: center;
        margin-top: 18px;
        color: #999999;
      }
    }
  }
}
</style>