<template>
  <div class="cover">
    <div class="window">
      <div class="head">
        <img src="../assets/image/cat1.png">
        <i class="close" v-on:click="closeFoodDetails()"></i>
      </div>
      <div class="successTip">分享成功</div>
      <div class="successFood">
        <p class="tip">店铺东券砸中你啦！</p>
      </div>
      <div class="successCoupon">
        <div class="coupon coupon1">
          <p class="price">&yen;<span>200</span></p>
          <p class="term">满<span>1999</span>可用</p>
        </div>
        <div class="coupon coupon2">
          <p class="name">全品类券</p>
          <p class="term">有效期至<span>2018.07.23</span></p>
        </div>
      </div>
      <div class="successBTN">
        <span class="btn">去逛逛</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    closeFoodDetails: function() {
     this.$emit('closeShareCard');

    }
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
  .window{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:5.6rem;
    height: 5.22rem;
    border-radius:0.14rem;
    padding: 0 0.3rem;
    background: #fff;
    color: rgb(102,102,102);
    .head{
      img{
        width: 1.5rem;
        height:1.5rem;
        margin:-0.56rem 0 0 0.2rem;
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
    .successFood{
      font-size:0.28rem;
      color:rgb(102,102,102);
      margin-top:0.32rem;
      text-align: center;
      .tip{
        line-height: 0.4rem;
      }
    }
    .successCoupon{
      width: 5rem;
      height: 1.5rem;
      margin-top:0.1rem;
      color:rgb(221,168,80);
      background: url('../assets/image/coupon-share.png') no-repeat;
      background-size:5rem 1.5rem;
      .coupon{
        float: left;
        text-align: center;
        .price{
          font-size: 0.32rem;
          margin-top:0.35rem;
          span{
            font-size: 0.48rem;
            line-height: 0.5rem;
          }
        }
        .name{
          margin-top:0.42rem;
          font-size: 0.32rem;
        }
        .term{
          margin-top:0.1rem;
          font-size:0.24rem;
        }
      }
      .coupon1{
        width: 2.14rem;
        height: 1.5rem;       
      }
      .coupon2{
        width:2.86rem;
        height: 1.5rem;
        .term{
          margin-top:0.2rem;
        }
      }
    }
    .successBTN{
      margin-top:0.4rem;
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
