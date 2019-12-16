<template>
  <div class="jobs-left">
    <div class="jobs-list">
      <div class="jobs-pick">
        <img src="../assets/E-image.jpg" alt />
      </div>
      <div class="jobs-item">
        <p class="lmo">罗密欧</p>
        <div class="jobs-information">
          <span>信息完整度</span>
          <span class="strip"></span>
          <span class="high">高</span>
        </div>
        <div class="jobs-icon">
          <span class="icon iconfont active">&#xe602;</span>
          <span class="icon iconfont">&#xe674;</span>
          <span class="icon iconfont">&#xe66f;</span>
        </div>
      </div>
    </div>
    <div class="jobs-amount">
      <a class="apply" href="javascript:;">申请提现</a>
      <div class="balance">
        <p>账户余额</p>
        <span class="money">248</span>
        <span>元</span>
      </div>
    </div>
    <div class="real rz">
      <div class="real-list">
        <span class="icon iconfont">&#xe650;</span>
      </div>
      <div class="real-item">
        <span>实名认证</span>
        <span class="uncertified">【未认证】</span>
      </div>
    </div>
    <div class="natural rz">
      <div class="natural-list">
        <span class="icon iconfont">&#xe7ae;</span>
      </div>
      <div class="real-item">
        <span>资质认证</span>
        <span class="uncertified">【未认证】</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Emiddle",
  data() {
    return {};
  }
};
</script>
<style lang="less">
.jobs-left {
  float: left;
  width: 450px;
  height: 550px;
  background-color: #fff;
  .jobs-list {
    height: 150px;
    box-sizing: border-box;
    border-bottom: 1px solid #f6f6f6;
    .jobs-pick {
      float: left;
      width: 155px;
      text-align: center;
      img {
        margin-top: 30px;
        width: 88px;
      }
    }
    .jobs-item {
      float: left;
      width: 295px;
      .lmo {
        font-size: 18px;
        margin-top: 35px;
        background: url(../assets/xiaoren.jpg) no-repeat;
        background-position: 65px 0;
        background-size: 5%;
      }
      .jobs-information {
        margin-top: 10px;
        color: #666666;
        .strip {
          display: inline-block;
          width: 138px;
          height: 8px;
          background: #00aaff;
          border-radius: 10px;
          margin: 0px 10px;
        }
        .high {
          color: #00aaff;
        }
      }
      .jobs-icon {
        margin-top: 10px;
        color: #b7b7b7;
        .iconfont {
          margin-right: 5px;
        }
        .active {
          color: #00aaff;
        }
      }
    }
  }
  .jobs-amount {
    height: 115px;
    box-sizing: border-box;
    border-bottom: 1px solid #f6f6f6;
    .apply {
      float: left;
      display: block;
      width: 160px;
      height: 32%;
      border-radius: 30px;
      background: #00aaff;
      text-align: center;
      line-height: 32px;
      color: #fff;
      margin-left: 35px;
      margin-top: 43px;
    }
    .balance {
      float: left;
      margin-left: 55px;
      margin-top: 30px;
      color: #6a6a6a;
      font-size: 12px;
      p {
        margin-bottom: 10px;
      }
      .money {
        font-size: 32px;
        color: #333333;
        padding-right: 5px;
      }
    }
  }
  .rz {
    height: 150px;
    width: 170px;
    float: left;
    margin-top: 65px;
  }
  .real {
    margin-left: 40px;
    margin-right: 20px;
    .real-list {
      height: 120px;
      box-sizing: border-box;
      border: 1px dashed #eeeeee;
      .iconfont {
        text-align: center;
        color: #00aaff;
        display: block;
        line-height: 120px;
        font-size: 67px;
      }
    }
  }
  .real-item {
    text-align: center;
    margin-top: 20px;
    color: #8699b4;
    font-size: 12px;
    .uncertified {
      color: #da4e23;
    }
  }

  .natural-list {
    height: 120px;
    box-sizing: border-box;
    border: 1px dashed #eeeeee;
    .iconfont {
      text-align: center;
      color: #00aaff;
      display: block;
      line-height: 120px;
      font-size: 90px;
    }
  }
}
</style>