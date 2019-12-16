<template>
  <div class="upload">
    <router-link class="upload-pick" to="/personal/course/await">
      <img src="../assets/course-msage.jpg" alt />
    </router-link>
    <div class="upload-content">
      <p class="upload-list">1、不得上传未经授权的他人作品，以及色青、反动等违法视频。</p>
      <p class="upload-list">2、视频大小限制：不支持断点续传，视频文件最大200M</p>
      <p class="upload-list">3、支持视频音频格式:mp4、flv、f4v、webm</p>
      <p class="upload-list">4、不支持时长小于1秒或大于10小时的视频文件，上传后将不能成功转码</p>
      <p class="upload-list">5、高清（360p）:视频分辨率>=640x360,视频码率>=800kbsp</p>
      <p class="upload-list">6、超清（720p）:视频分辨率>=960x540,视频码率>=1500kbsp</p>
      <p class="upload-list">7、蓝光（1080p）:视频分辨率>=1920x1080,视频码率>=2500kbsp</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "upload"
};
</script>
<style lang="less">
.upload {
  float: right;
  width: 900px;
  height: 585px;
  background: #fff;
  border-radius: 5px;
  .upload-pick {
    display: block;
    width: 128px;
    height: 112px;
    margin: 0 auto;
    margin-top: 108px;
    margin-bottom: 8px;
    img {
      width: 128px;
    }
  }
  .upload-content {
    width: 395px;
    font-size: 12px;
    color: #dbdbdb;
    margin: 0 auto;
    .upload-list{
        margin-top: 25px;
    }
  }
}
</style>