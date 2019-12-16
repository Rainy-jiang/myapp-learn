<template>
  <div class="answerquiz">
      <div class="answerquiz-list">
          <div class="answerquiz-item">
              <p class="address">中午在凡客打客服电话退货了，下午可以到吗？我在北京</p>
              <span class="time">提问时间: 3月23日 15:43</span>
              <span class="time">回答: &nbsp; 0 &nbsp;| &nbsp; 91人看过</span>
          </div>
         <a class="del" href="javascript">查看并处理</a>
      </div>
      <div class="answerquiz-list">
           <div class="answerquiz-item">
              <p class="address">想买电脑 不懂配置求各位大神给一套3000-4000的配置 急求配置 谢谢</p>
              <span class="time">提问时间: 3月23日 15:43</span>
              <span class="time">回答: &nbsp; 0 &nbsp;| &nbsp; 91人看过</span>
          </div>
          <a class="delete" href="javascript:;">删除问题</a>
      </div>
  </div>
</template>
<script>
export default {
  name: "answerquiz"
};
</script>
<style lang="less">
.answerquiz {
  float: right;
  width: 900px;
  height: 481px;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .answerquiz-list{
      height: 129px;
      box-sizing: border-box;
      border-bottom: 1px solid #eeeeee;
      .answerquiz-item{
          float: left;
          width: 650px;
          margin-top: 38px;
          margin-left: 30px;
          .address{
              font-size: 18px;
              color: #666666;
              margin-bottom: 15px;
          }
          .time{
              color: #999999;
              margin-right: 30px;
          }
      }
      .del{
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
          margin: 48px 40px 0px 0px;
      }
      .delete{
          float: right;
          margin: 60px 95px 0px 0px;
          color: #cccccc;
      }
  }
}
</style>