<template>
  <div class="cover">
    <div class="window">
      <div class="head">
        <img :src="successPetImg">
        <i class="close" v-on:click="closeSuccess()"></i>
      </div>
      <div class="successTip">成功入驻</div>
      <div class="successText">
        <p class="textTitle"><span>鸽子飞飞飞815</span>接旨：</p>
        <p class="textCon">我已成功入住喵星球，记得来铲屎~</p>
        <p class="textSign">{{successPetName}}</p>
        <p class="textData">2018.04.23</p>
      </div>
      <div class="successBag"><span>欢迎礼包</span></div>
      <div class="successFood">
        <p class="food">口粮100g</p>
        <p class="tip">口粮可在小程序兑换萌宠喜欢的玩具哦~</p>
      </div>
      <div class="successCoupon">
        <div class="coupon coupon1">
          <p class="name">全品类券</p>
          <p class="price">&yen;<span>200</span></p>
          <p class="term">满<span>1999</span>可用</p>
        </div>
        <div class="coupon coupon2">
          <p class="name">全品类券</p>
          <p class="price">&yen;<span>200</span></p>
          <p class="term">满<span>1999</span>可用</p>
        </div>
      </div>
      <div class="successBTN" v-on:click="closeSuccess()">
        <span class="btn">谨遵圣旨</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['successPetName','successPetImg'],
  data () {
    return {
      
    }
  },
  methods: {
    closeSuccess: function() {
      this.$emit('closeSuccessCover');
    }
    //获取优惠劵接口

  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.cover{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 2;
  .window{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:5.6rem;
    height: 8.37rem;
    border-radius:0.14rem;
    padding: 0 0.3rem;
    z-index:1;
    background: #fff;
    color: rgb(102,102,102);
    .head{
      img{
        width: 1.5rem;
        height:1.5rem;
        margin:-0.56rem 0 0 0.4rem;
        border:0.1rem solid #fff;
        border-radius:0.75rem;
      }
      .close{
        float: right;
        margin-top: 0.32rem;
        width:0.3rem;
        height: 0.3rem;
        background: url('../assets/image/cover-close.png') no-repeat;
        background-size: 0.3rem 0.3rem;
      }
    }
    .successTip{
      margin-top:0.24rem;
      font-size: 0.3rem;
      color: rgb(51,51,51);
      text-align: center;
    }
    .successText{
      margin-top: 0.16rem;
      padding:0.15rem 0.18rem;
      width: 5rem;
      height: 2.05rem;
      font-size:0.28rem;
      background: rgb(255,252,243);
      .textTitle{
        text-align: left;
        span{
          color:rgb(51,51,51);
        }
      }
      .textCon{
        line-height: 0.7rem;
        text-align: left;
      }
      .textSign,.textData{
        text-align: right;
        line-height: 0.35rem;
      }
    }
    .successBag{
      height: 0.31rem;
      margin-top:0.34rem;
      background: url('../assets/image/bg-bag.png') 0.75rem 0/3.48rem 0.31rem no-repeat;
      text-align: center;
      font-size:0.28rem;
      color: rgb(221,168,80);
    }
    .successFood{
      font-size:0.28rem;
      color:rgb(102,102,102);
      margin-top:0.32rem;
      .food{
        padding-left:0.32rem;
        color:rgb(51,51,51);
        text-align: left;
        background: url('../assets/image/list-cat-food.png') 0.01rem 0.04rem/0.24rem 0.24rem no-repeat;
      }
      .tip{
        line-height: 0.4rem;
      }
    }
    .successCoupon{
      margin:0.16rem 0 0 -0.2rem;
      color:rgb(221,168,80);
      .coupon{
        float: left;
        margin-left: 0.2rem;
        width: 2.4rem;
        height: 1.37rem;
        background: url('../assets/image/coupon-success.png') no-repeat;
        background-size:2.4rem 1.37rem;
        
        text-align: center;
        .name{
          font-size: 0.24rem;
          line-height: 0.6rem;          
        }
        .price{
          font-size: 0.28rem;
          span{
            font-size: 0.42rem;
          line-height: 0.5rem;
          }
        }
        .term{
          font-size:0.2rem;
        }
      }
    }
    .successBTN{
      margin-top:1.98rem;
      width: 4.96rem;
      height: 0.72rem;
      border-radius:0.36rem;
      background: linear-gradient(left, rgb(255,208,67),rgb(255,215,0));
      text-align: center;
      span{
        font-size:0.36rem;
        line-height: 0.72rem;
        color: rgb(51,51,51);
      }
    }

  }

}

</style>
