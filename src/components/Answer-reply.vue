<template>
  <div class="answerply">
    <div class="answerply-list">
      <div class="answerply-item">
        <p class="address">中午在凡客打客服电话退货了，下午可以到吗？我在北京</p>
        <div class="configure">
          <p
            class="peizhi"
          >CPU     AMD   Athlon || X4 （速龙||四核）640盒装CPU（Socket AM3/3GHz/2M二级缓存/ 45纳米）主板华硕()ASUSM5A88...</p>
        </div>
        <span class="time">提问时间: 3月23日 15:43</span>
        <span class="time">回答: &nbsp; 0 &nbsp;| &nbsp; 91人看过</span>
        <span class="time">提问者: 浪羁猫</span>
      </div>
      <a class="chase" href="javascript:;">有追问</a>
    </div>
    <div class="answerply-list">
      <div class="answerply-item">
        <p class="address">中午在凡客打客服电话退货了，下午可以到吗？我在北京</p>
        <div class="configure">
          <p
            class="peizhi"
          >CPU &nbsp;&nbsp;AMD Athlon || X4 （速龙||四核）640盒装CPU（Socket AM3/3GHz/2M二级缓存/45纳米）主板华硕()ASUSM5A88...</p>
        </div>
        <span class="time">提问时间: 3月23日 15:43</span>
        <span class="time">回答: &nbsp; 0 &nbsp;| &nbsp; 91人看过</span>
        <span class="time">提问者: 浪羁猫</span>
      </div>
      <a class="delete" href="javascript:;">删除回答</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "answerply"
};
</script>
<style lang="less">
.answerply {
  float: right;
  width: 900px;
  height: 481px;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .answerply-list {
    height: 210px;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
    .answerply-item {
      float: left;
      width: 630px;
      margin-top: 38px;
      margin-left: 30px;
      .address {
        font-size: 18px;
        color: #666666;
        margin-bottom: 25px;
      }
      .configure {
        position: relative;
        height: 60px;
        background: #f8f8f8;
        border-radius: 5px;
        margin-bottom: 20px;
        &::after {
          position: absolute;
          top: -20px;
          left: 18px;
          content: "";
          display: block;
          width: 0px;
          height: 0px;
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #f8f8f8 transparent;
        }
        .peizhi {
          padding: 12px 20px;
          color: #a4a4a4;
        }
      }
      .time {
        color: #999999;
        margin-right: 30px;
      }
    }
    .chase {
      float: right;
      display: block;
      width: 161px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      color: #00aaff;
      box-sizing: border-box;
      border: 1px solid #eeeeee;
      border-radius: 20px;
      margin-top: 48px;
      margin-right: 42px;
    }
    .delete {
      float: right;
      margin: 60px 95px 0px 0px;
      color: #cccccc;
    }
  }
}
</style>