<template>
  <div class="cover">
    <div class="window">
      <div class="head">
        <img :src="this.petImg">
        <i class="close" v-on:click="closeFoodDetails()"></i>
      </div>
      <p class="foodTip">什么是口粮</p>
      <p class="foodText" v-if="this.petKind == 'cat' ">关于“猫粮”的品牌选择问题，我想大家和题主都有同样的感受，这确实是个比较头疼的问题。我这里做了一个猫粮选择的系统选择方法。
      </p>
      <p class="foodText" v-if="this.petKind == 'dog' ">关于“狗粮”的品牌选择问题，我想大家和题主都有同样的感受，这确实是个比较头疼的问题。我这里做了一个猫粮选择的系统选择方法。
      </p>
      <div class="closeBtn">
        <span class="btn" v-on:click="closeFoodDetails()">知道了</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
  'petImg','petKind'
  ],
  data () {
    return {

    }
  },
  methods: {
    init() {

    },
    closeFoodDetails: function() {
      this.$emit('closeFoodDetail');

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
  z-index: 5;
  .window{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:5.6rem;
    height: 4.8rem;
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
    .foodTip{
      margin-top:0.24rem;
      font-size: 0.3rem;
      color: rgb(51,51,51);
      text-align: center;
    }
    .foodText{
      margin-top:0.32rem;
      font-size:0.28rem;
      color:rgb(102,102,102);
      line-height: 0.4rem;
      text-align: justify;
    }
    .closeBtn{
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
