<template>
  <div class="cover">
    <div class="window">
      <div class="head">
        <img src="../assets/image/cat1.png">
        <i class="close" v-on:click="cancelCover()"></i>
      </div>
      <div class="deleteText">放弃领取100g口粮奖励？</span></div>
      <div class="deleteBtn"> 
        <span class="btn cancel" v-on:click="cancelCover()">再想想</span>
        <span class="btn delete">
        <router-link class="giveUpLink"
          :to="{name:'listCard'}">放弃领取</router-link></span>
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
    cancelCover: function() {
      this.$emit('closeCover');
    },
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
    top:45%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:5.6rem;
    height: 3.36rem;
    border-radius:0.14rem;
    z-index:1;
    background: #fff;
    color: rgb(51,51,51);
    .head{

      img{
        width: 1.5rem;
        height:1.5rem;
        margin:-0.56rem 0 0 2rem;
        border:0.1rem solid #fff;
        border-radius:0.75rem;
      }
      .close{
        float: right;
        margin:0.32rem 0.32rem 0 0;
        width:0.3rem;
        height: 0.3rem;
        background: url('../assets/image/cover-close.png') no-repeat;
        background-size: 0.3rem 0.3rem;
      }
    }
    .deleteText{
      margin-top:0.48rem;
      font-size:0.3rem;
      font-weight: bold;
      text-align: center;
    }
    .deleteBtn{
      margin-top:0.6rem;
      text-align: center;
      .btn{
        width: 2.44rem;
        height: 0.72rem;
        font-size: 0.36rem;
        line-height: 0.72rem;
        .giveUpLink{
          color: rgb(51,51,51);
        }
      }
      .cancel{      
        background: rgb(221,221,221);
        border-top-left-radius: 0.36rem;
        border-bottom-left-radius: 0.36rem;
        border-top-right-radius: 0.06rem;
        border-bottom-right-radius: 0.06rem;   
      }
      .delete{
        background: rgb(255,215,0);
        border-top-left-radius: 0.06rem;
        border-bottom-left-radius: 0.06rem;
        border-top-right-radius: 0.36rem;
        border-bottom-right-radius: 0.36rem;
      }
    }
  }

}

</style>
