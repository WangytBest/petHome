<template>
<div class="feedCard">
  <div class="feedBg">
    <div class="feedCon">        
      <div class="feedRate" v-bind:style="{width:barwidth+'%'}">
       {{feedCount}}g<i class="fish"></i>
      </div>
      <div class="feedTotal">{{total}}g</div>          
    </div> 
  </div>
  <div class="feedBtn">
      <i class="icon"></i>
      <p v-on:click="feeding">投食</p>
  </div>
  <div class="feedToast" v-if="showToast">+25g</div>
</div>
</template>
<script>
export default {
  props:['petFood'],
  data () {
    return {
      total:1000,
      feedCount:0,
      barwidth:0,
      showToast:false
    }
  },
  methods: {
    feeding:function(){
      if(this.feedCount < 1000 && this.petFood != 0){
          this.feedCount+=25;
          this.showToast = true;
          setTimeout(() => {
            this.showToast = false;
          }, 1000);
          this.barwidth = Math.round(this.feedCount/this.total*100);
          this.$emit('feedCount');
      }else if(this.feedCount < 1000 && this.petFood == 0){
        alert('没有口粮了？？');
      }else{
        this.feedCount = 1000;
        alert('进度条满了？？');
      }     
    }

  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.feedCard{
  position: relative;
  margin: 0.3rem 0 0 0.47rem;
}
.feedBg{
  float:left;
  display: flex;
  align-items: center;
  width: 4.46rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  background: #fffaec;
  .feedCon{
    height: 0.24rem;
    width: 3.9rem;
    background-color: #fff0c6;
    border-radius: 0.12rem;
    margin-left:0.18rem;
    font-size: 0.16rem;
    line-height: 0.24rem;
    .feedRate{
     position: relative;
     float: left;
     height: 0.24rem;
     color:rgb(255,255,255);
     border-radius: 0.12rem;
     background-image: linear-gradient(left, rgb(255,230,94),rgb(255,151,90));
     /*text-align: left;*/
     .fish{
      position: absolute;
      top:-0.05rem;
      right: -0.1rem;
      width:0.54rem;
      height: 0.4rem;
      background: url('../assets/image/feed-fish.png');
      background-size:0.54rem 0.4rem;
      background-repeat: no-repeat;
      z-index: 2;
     }
    }
    .feedTotal{
      position: absolute;
      left:3.4rem;
      z-index:0;
      color:rgb(255,208,67);
    }
  }
}
.feedBtn{
  float: left;
  margin-left:-0.47rem;
  width: 1.77rem;
  height: 100%;
  background: rgb(255,208,67);
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .icon{
    float: left;
    margin: 0.1rem 0 0 0.2rem;
    width: 0.53rem;
    height: 0.43rem;
    background: url('../assets/image/list-invite.png') no-repeat;
    background-size: 0.53rem 0.43rem;
  }
  p{
    float: left;
    margin-left: 0.1rem;
    font-size: 0.3rem;
    font-weight: bold;
    line-height: 0.6rem;
    color:rgb(52,25,18);
  }
}
.feedToast{
  animation:sliderUp 1s;
  position: absolute;
  top: -0.65rem;
  right: 0.9rem;
  width:1.05rem;
  height: 0.43rem;
  font-size: 0.28rem;
  line-height: 0.43rem;
  border:0.01rem solid rgb(255,208,67);
  border-radius: 0.22rem;
  background: rgba(255,199,35,0.1);
  color:rgb(255,208,67);
  text-align: center;
}
@keyframes sliderUp{
  0%{
    top: -0.3rem;
    opacity: 1;
  }
  90%{
    top: -0.65rem;
    opacity: 0.3;
  }
  100%{
    top: -0.65rem;
    opacity: 0;
  }
}
</style>
