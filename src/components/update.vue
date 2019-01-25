<template>
  <div class="cover1">
    <div class="window">
      <p>修改成功</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.cover1{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 5;
  .window{
    position: fixed;
    top:45%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:3.78rem;
    height: 3.82rem;
    border-radius:0.14rem;
    z-index:1;
    background: #fff url('../assets/image/toast-y.png') 0.32rem 0.32rem/3.14rem 2.24rem no-repeat;
    text-align: center;
    p{
      margin-top: 2.8rem; 
      font-size: 0.3rem;
      line-height: 0.42rem;
      color: rgb(51,51,51);
    }
  }
}

</style>
