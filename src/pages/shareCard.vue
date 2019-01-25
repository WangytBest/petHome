<template>
<div class="fileDetails" :style="deviceHeight">
  <div class="filebg">
    <div class="cardSlogan">
      <p>我就是饿死</p>
      <p>也不能让Ta挨饿受冻！</p>
    </div> 
    <div class="fileCard">
      <div class="cardHead">
        <img class="headPic" :src="this.petImg">
        <div class="headCon">
          <p class="edit">编辑</p>
          <p class="name">{{this.petName}}</p>
          <p class="num">NO.{{this.petNum}}</p>
        </div>
      </div>
      <div class="cardList">
        <p class="text" :class="this.petKind == 'cat' ? 'petCat' : 'petDog'">{{this.petCategory}}</p>
        <p class="text" :class="this.petSex == 'male' ? 'petMale' : 'petFemale'">1.25岁</p>
        <p class="text" :class="this.petKind == 'cat' ? 'catFood' : 'dogFood'">口粮{{this.petFood}}g<i class="details"></i></p>
      </div>
    </div>
  </div>
  <div class="fileInvite">
      <img class="qrcode" src="../assets/image/qrcode.jpg">
      <div class="qrText">
        <p class="tips1">长按保存, 微信扫码</p>
        <p class="tips2">云撸猫也要记得送猫粮~</p>
      </div>   
  </div>
  <div class="bgCover"></div>
</div>
</template>
<script>
import foodDetails from '../components/foodDetails';
import feed from '../components/feed';

export default {
  data () {
    return {
      deviceHeight:{'min-height': `${deviceHeight}px`},
      petKind: this.$route.params.petKind,
      petSex: this.$route.params.petSex,
      petName: this.$route.params.petName,
      petImg: this.$route.params.petImg,
      petNum: this.$route.params.petNum,
      petCategory: this.$route.params.petCategory,
      petFood: this.$route.params.petFood,
    }
  },
  created() {


  },
  methods: {

  },
  components: {

  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.fileDetails{
  /*background: rgb(255,208,67) url('../assets/image/record-bg.png') 0 4rem/7.5rem 4.77rem no-repeat;*/
  background-image: linear-gradient(top,rgb(255,208,67),rgb(255,215,96));
  overflow: hidden;
  .filebg{
    margin-top: 2.46rem;
    text-align: center; 
    .cardSlogan{
      font-size:0.33rem;
      color:rgb(222,178,50);
      line-height: 0.5rem;
      margin-left:0.65rem;
      text-align: left;
    }
    .fileCard{
      position: relative;
      display: inline-block;
        margin-top:0.65rem;
        width:6.7rem;
        height: 4.22rem;
        background: #fff;
        border-radius: 0.14rem;
        box-shadow: 0px 1px 40px 1px #d8d3dac4;
        .cardHead{
          height: 1.5rem;
          margin: 0 0.4rem;
          .headPic{
            float:left;
            width: 2rem;
            height: 2rem;
            margin-top:-0.4rem;
            border-radius: 1rem;
            border:0.1rem solid #fff;
          }
          .headCon{
            float:right;
            text-align: right;
            margin-top:0.42rem;
            .edit{
              font-size:0.28rem;
              line-height: 0.3rem;
              color:rgb(173,173,173);
            }
            .name{
              margin-top:0.16rem;
              font-size:0.36rem;
              line-height: 0.36rem;
              font-weight: bold;
              color:rgb(51,51,51);
            }
            .num{
              margin-top:0.08rem;
              font-size:0.22rem;
              line-height: 0.22rem;
              color:rgb(204,204,204);
            }
          }

        }
        .cardList{
          margin: 0.26rem 0.4rem 0 0.4rem;
          text-align: left;
          .text{
            padding-left:0.3rem;
            font-size: 0.26rem;
            line-height: 0.4rem;
            color:rgb(51,51,51);
            .details{
              margin-left: 0.05rem;
              width: 0.24rem;
              height: 0.24rem;
              background: url('../assets/image/list-details.png') no-repeat;
              background-size: 0.24rem 0.24rem;
            }
          }
        .petCat{
          background: url('../assets/image/list-cat.png') no-repeat;
          background-size: 0.24rem 0.24rem;
          background-position-y: 0.08rem;
        }
        .petDog{
          background: url('../assets/image/list-dog.png') no-repeat;
          background-size: 0.24rem 0.24rem;
          background-position-y: 0.08rem;
        }
        .petMale{
          background: url('../assets/image/list-male.png') no-repeat;
          background-size: 0.24rem 0.24rem;
          background-position-y: 0.08rem;
        }
        .petFemale{
          background: url('../assets/image/list-female.png') no-repeat;
          background-size: 0.24rem 0.24rem;
          background-position-y: 0.08rem;
        }
        .catFood{
          display: flex;
          align-items: center;
          background: url('../assets/image/list-cat-food.png') no-repeat;
          background-size: 0.24rem 0.24rem;
          background-position-y: 0.08rem;
        }
        .dogFood{
          display: flex;
          align-items: center;
          background: url('../assets/image/list-dog-food.png') no-repeat;
          background-size: 0.24rem 0.24rem;
          background-position-y: 0.08rem;
        }
      }
    }
  }
  .fileInvite{
    position: absolute;
    bottom:0;
    width:100%;
    padding:0.45rem 0 0 0.45rem;
    height:2.4rem;
    background: #fff;
    .qrcode{
      float:left;
      width: 1.5rem;
      height: 1.5rem;
    }
    .qrText{
      float:left;
      margin:0.67rem 0 0 0.16rem;
      .tips1{
        font-size:0.36rem;
        line-height: 0.42rem;
        color:rgb(51,51,51);
      }
      .tips2{
        font-size:0.24rem;
        line-height: 0.54rem;
        color:rgb(102,102,102);
      }
    }
  }
  .bgCover{
    width:7.5rem;
    height: 4.77rem;
    background: url('../assets/image/record-bg.png') no-repeat;
    background-size:7.5rem 4.77rem;
    position: absolute;
    bottom:2.4rem;
  }
}

</style>
