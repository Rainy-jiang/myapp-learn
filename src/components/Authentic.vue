<template>
  <div class="authentic">
    <div class="authentic-wrapper-left">
      <div class="authentic-list bor">
        <div class="positive">
          <a class="positive-list" href="javascript:;">
            <img src="../assets/uncertified01.jpg" alt />
          </a>
          <span class="positive-item">身份证(正面)</span>
          <span class="positive-item red">【未认证】</span>
        </div>
        <div class="positive item">
          <a class="positive-list" href="javascript:;">
            <img src="../assets/uncertified02.jpg" alt />
          </a>
          <span class="positive-item">身份证(反面)</span>
          <span class="positive-item red">【未认证】</span>
        </div>
        <div class="idpick">
          <p>请上传真实的身份证信息（正反面）</p>
          <p>照片要死角对其，如有模糊、反光、太暗、有遮挡、则不予认证</p>
        </div>
      </div>
      <div class="authentic-list">
        <a class="positive-list-item" href="javascript:;">
          <img src="../assets/uncertified01.jpg" alt />
        </a>
        <span class="positive-item">身份证(正面)</span>
        <span class="positive-item red">【未认证】</span>
        <div class="idpick">
          <p>请上传能证明您专业技能的图片</p>
          <p>如 : 职业资格证书、加盖公章的材料证明、获奖证明等</p>
        </div>
      </div>
    </div>
    <div class="authentic-wrapper-right">
        <h3>个人简介</h3>
        <router-link class="edit-list" to="/personal/basic/edit" >
            <span class="icon iconfont">&#xe505;</span>
            <span>编辑</span>
        </router-link>
        <p class="content">涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，毕业于南方之金学院（现江西理工大学）计算机系1996级。<br>2004年，担任长沙人民广播电台星沙之声频道（FM105）的支持人。2006年，转战电视节目，随后主持了长沙晚间法律节目《方圆调查》。2010年，担任青海卫视新闻脱口秀节目《嘎蹦爆米花》的嘎嘣观察员[1]
        2011年，主持浙江钱江频道电视新闻时平类节目《九点半》[2]。2012年，主持江西卫视新闻评论类节目《深度观察》[3]。2013年，担任河北卫视情感谈话节目《情感大裁判》的主持人[4]。2014年，担任天津卫视职场招聘节目《非你莫属》的主持人[5]。同年，在在天津卫视感情综艺类节目《爱情保卫战》中担任情感导师[6]。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "authentic"
};
</script>
<style lang="less">
.authentic {
  float: right;
  width: 900px;
  height: 585px;
  background: #fff;
  border-radius: 5px;
  .authentic-wrapper-left {
    float: left;
    width: 450px;
    box-sizing: border-box;
    border-right: 1px solid #f6f6f6;
    .authentic-list {
      text-align: center;
      height: 292px;
      .positive {
        float: left;
        text-align: center;
        width: 170px;
        margin-top: 49px;
        margin-left: 43px;
        .positive-list {
          display: block;
          width: 170px;
          height: 120px;
          box-sizing: border-box;
          border: 1px dashed #eeeeee;
          img {
            width: 168px;
          }
        }
        &.item {
          margin-left: 20px;
        }
        .positive-item {
          display: inline-block;
          margin-top: 19px;
          font-size: 12px;
          color: #7a8fac;
          &.red {
            color: #da4e23;
            padding-left: 10px;
          }
        }
      }
      &.bor {
        border-bottom: 1px solid #f6f6f6;
      }
      .idpick {
        width: 450px;
        float: left;
        text-align: center;
        margin-top: 27px;
        font-size: 12px;
        color: #cccccc;
      }
      .positive-list-item {
        display: block;
        margin: 0 auto;
        margin-top: 47px;
        width: 170px;
        height: 120px;
        box-sizing: border-box;
        border: 1px dashed #eeeeee;
        img {
          width: 168px;
        }
      }
      .positive-item {
        display: inline-block;
        margin-top: 19px;
        font-size: 12px;
        color: #7a8fac;
        &.red {
          color: #da4e23;
          padding-left: 10px;
        }
      }
    }
  }
  .authentic-wrapper-right{
      float: right;
      width: 450px;
    h3{
        float: left;
        margin-top: 50px;
        margin-left: 37px;
    }
    .edit-list{
        float: right;
        margin-top: 50px;
        margin-right: 40px;
        color: #00aaff;
        font-size: 16px;
    }
    .content{
        float: left;
        padding: 44px 50px 30px 36px;
        font-size: 14px;
        color: #666666;
    }
  }
}
</style>