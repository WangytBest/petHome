<template>
  <div class="category" :style="deviceHeight">
    <ul>
      <li class="categoryList" :class="['dog'+index,{categoryChoose:index == curr}]"  v-for="(item,index) in dogList" v-on:click="chooseDog(index,item.name)">
        <p>{{item.name}}</p>
        <i class="icon" :class="'icon'+index" v-if="iconShow == index"></i>
      </li>
    </ul>
    <div class="categoryMore">
      <router-link class="linkMore" :to="{name:'index'}">没找到爱宠品种？看看更多选择吧<i class="more"></i></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      deviceHeight:{'min-height': `${deviceHeight}px`},
      dogList:[
        {'name':'边境牧羊犬'},{'name':'比熊犬'},{'name':'柴犬'},{'name':'哈士奇'},
        {'name':'金毛寻回犬'},{'name':'拉布拉多犬'},{'name':'秋田犬'},{'name':'萨摩耶'},{'name':'苏格兰牧羊犬'},
      ],
      iconShow:-1,
      curr:-1
    }
  },
  created() {

  },
  methods: {
    chooseDog: function(index,name) {
      this.iconShow = index;
      this.curr = index;
      setTimeout(() => {
        this.$emit("chooseDog",name);
      }, 300);
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.category{
  position: absolute;
  z-index: 10;
  width: 100%;
  background: rgb(250,250,250) url('../assets/image/record-bg.png') bottom center/7.5rem 4.77rem no-repeat;
  padding:0.46rem 0 0 0.45rem;
  .categoryList{
    position: relative;
    float:left;
    margin:0 0.3rem 0.24rem 0;
    width:2rem;
    height: 2.54rem;
    .kind{
      display: inline-block;
      width:2rem;
      height: 2.54rem;
    }
    p{
      margin-top:2rem;
      font-size:0.28rem;
      color:rgb(51,51,51);
      text-align: center;
    }
    .icon{
      position: absolute;
      bottom: 0;
      right: 0;
      width:0.48rem;
      height: 0.48rem;
      background: url('../assets/image/category-choose.png') no-repeat;
      background-size: 0.48rem 0.48rem;
    }
  }
  .dog0{
    background:#fff url("../assets/image/dog1.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog1{
    background:#fff url("../assets/image/dog2.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog2{
    background:#fff url("../assets/image/dog3.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog3{
    background:#fff url("../assets/image/dog4.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog4{
    background:#fff url("../assets/image/dog5.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog5{
    background:#fff url("../assets/image/dog6.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog6{
    background:#fff url("../assets/image/dog7.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog7{
    background:#fff url("../assets/image/dog8.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .dog8{
    background:#fff url("../assets/image/dog9.png") 0.3rem 0.3rem/1.4rem 1.4rem no-repeat;
  }
  .categoryChoose{
    border:0.03rem solid rgb(255,208,67);
    border-radius:0.2rem;
  }
  .categoryMore{
    display: flex;
    align-items: center;
    float: right;
    margin-top:0.24rem;
    font-size: 0.28rem;
    .linkMore{
      color:rgb(153,153,153);
    }
    .more{
      float:right;
      margin:0 0.4rem 0 0.1rem;
      width:0.16rem;
      height: 0.28rem;
      background: url('../assets/image/category-more.png') no-repeat;
      background-size: 0.16rem 0.28rem;
    }
  }

}
</style>
