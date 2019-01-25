<template>
  <div class="listCard" :style="deviceHeight">
    <foodDetails v-if="showFoodDetail" v-on:closeFoodDetail="closeFoodDetails" :petKind="petKind" :petImg="petImg"></foodDetails>
    <success v-if="showSuccess" v-on:closeSuccessCover="closeSuccessCover" :successPetName="successPetName" :successPetImg="successPetImg"></success>
    <shareSuccess v-if="showShareSuccess" v-on:closeShareCard="closeShareCard"></shareSuccess>
    <div class="listTitle">
      <div class="title"><span class="titlePic"></span></div>
      <div class="tips">
        <span class="icon tip1">宠物社区 /</span>
        <span class="icon tip2">专属定制 /</span>
        <span class="icon tip3">多重权益 /</span>
      </div>
    </div>
    <ul>
      <li class="card"
      v-for="(item,index) in petInfo" v-on:click="toFileDetails(index)">
        <div class="cardHead">
          <img class="headPic" :src="petInfo[index].petimg">
          <div class="headCon">
            <p class="edit">编辑</p>
            <p class="name">{{petInfo[index].name}}</p>
            <p class="num">NO.{{petInfo[index].petNum}}}</p>
          </div>
        </div>
        <div class="cardList">
          <p class="text" :class="petInfo[index].kind == 'cat' ? 'petCat' : 'petDog'">{{petInfo[index].category}}</p>
          <p class="text" :class="petInfo[index].sex == 'male' ? 'petMale' : 'petFemale'">1.25岁</p>
          <p class="text" :class="petInfo[index].kind == 'cat' ? 'catFood' : 'dogFood'">口粮{{petInfo[index].food}}g<i class="details" v-on:click="showFoodDetails(petInfo[index].kind,petInfo[index].petimg)"></i></p>
        </div>
        <div class="cardInvite">
          <div class="invite">
            <i class="icon"></i>
            <p>邀请好友来投食</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="cardAdd">
      <router-link class="add"
      :to="{name:'index'}">新增爱宠名片<i class="addIcon"></i></router-link>
    </div>
    <div class="cardShare">
      <div class="qrcode"></div>
      <div class="shareHelp">
        <p class="text1">玩转宠Ta</p>
        <p class="text2">打开微信&gt;扫描二维码进入宠Ta小程序</p>
      </div>
      <div class="downLoad"><i class="icon"></i></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import foodDetails from '../components/foodDetails';
import success from '../components/success';
import indexService from '../services/indexService';
import shareSuccess from '../components/shareSuccess';

export default {
  data () {
    return {
      deviceHeight:{'min-height': `${deviceHeight}px`},
      petInfo:[
        { 
           kind : "cat",
           sex : "female",
           petimg : require("../assets/image/cat.png") ,
           name : "汤姆·汉克斯·包",
           petNum : "00680",
           category : "斯芬克斯无毛猫",
           birthday : "",
           food : "500", 
           year:'1992',
           month:'10',
           date:'26', 
        },
        {  
           kind : "dog",
           sex : "male",
           petimg : require("../assets/image/dog.png") ,
           name : "爱德华·嘟嘟",
           petNum : "00681",
           category : "西班牙斗牛犬",
           birthday : "",
           food : "500", 
           year:'1992',
           month:'10',
           date:'26',         
        }  
      ],
      showFoodDetail : false,
      petKind:'',
      petImg:'',
      successPetImg: this.$route.params.successPetImg,
      successPetName:this.$route.params.successPetName,
      firstComplete:this.$route.params.firstComplete,
      showSuccess:false,
      showShareSuccess:this.$route.params.showShareSuccess,
    }
  },
  created() {
    this.init();   
  },
  methods: {
    init() {
      this.firstCompletes();
      this.getPetById();
    },
    //根据宠物id获取宠物列表
    getPetById: function(){


    },
    //获取小程序码
    
    
    //获取优惠劵列表
    firstCompletes:function() {
      if(this.firstComplete){
        //调用优惠券接口
        
        this.showSuccess = true;
      }
    },
    showFoodDetails: function(kind,img) {
      this.showFoodDetail = true;
      this.petKind = kind;
      this.petImg = img;
    },
    closeFoodDetails: function() {
      this.showFoodDetail = false;
    },
    closeSuccessCover: function() {
      this.showSuccess = false;
    },
    toFileDetails:function (index) {
      this.$router.push({
        name: 'fileDetails',
        params: {
          petName: this.petInfo[index].name,
          petImg: this.petInfo[index].petimg,
          petNum: this.petInfo[index].petNum,
          petCategory: this.petInfo[index].category,
          petFood: this.petInfo[index].food,
          petKind: this.petInfo[index].kind,
          petSex: this.petInfo[index].sex,
          birthYear: this.petInfo[index].year,
          birthMonth: this.petInfo[index].month,
          birthDate: this.petInfo[index].date,
        }
      }); 
    },
    closeShareCard:function() {
      this.showShareSuccess = false;
    }

    
  },
  components: {
    foodDetails,
    success,
    shareSuccess
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.listCard{
  /*height: 14rem;*/
  text-align: center;
  background: rgb(255,211,80) url('../assets/image/record-bg.png') bottom center/7.5rem 4.77rem no-repeat;
  .listTitle{
    padding-top:0.3rem;
    width: 100%;
    .title{

      .titlePic{
        display: inline-block;
        width:1.1rem;
        height: 0.52rem;
        background: rgb(210,170,51);
      }
    }
    .tips{
      margin:0.22rem 0 0 1.11rem;
      .icon{
        padding-left:0.4rem;
        margin-right:0.05rem;
        font-size: 0.24rem;
        line-height: 0.32rem;
        color:rgb(218,179,64);
      }
      .tip1{
        background: url('../assets/image/list-tip1.png') 0 0/0.32rem 0.32rem no-repeat;

      }
      .tip2{
        background: url('../assets/image/list-tip2.png') 0 0/0.32rem 0.32rem no-repeat;

      }
      .tip3{
        background: url('../assets/image/list-tip3.png') 0 0/0.32rem 0.32rem no-repeat;

      }
    }
  }
  .card{
    display: inline-block;
    padding-top:0.4rem;
    width:6.7rem;
    height: 4.36rem;
    margin-top:0.19rem;
    background: #fff;
    border-radius: 0.14rem;
    overflow: hidden;
    .cardHead{
      overflow:hidden;
      margin: 0 0.4rem 0 0.4rem;
      .headPic{
        float:left;
        width: 1.26rem;
        height: 1.26rem;
      }
      .headCon{
        float:right;
        text-align: right;
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
    .cardInvite{
      height: 0.96rem;
      margin-top: 0.3rem;
      padding: 0.18rem 0 0 3.03rem;
      background: rgba(54,54,54,0.05);
      .invite{
        width:3.27rem;
        height: 0.6rem;
        background: rgb(255,208,67);
        border-radius: 0.3rem;
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
    }
  }
  .cardAdd{
    display: inline-block;
    margin-top:0.3rem;
    width:6.7rem;
    height: 1.08rem;
    background: #fff url('../assets/image/list-add.png') 0.4rem 0.13rem/2.35rem 0.99rem no-repeat;
    border-radius: 0.14rem;
    overflow: hidden;
    .add{
      display: flex;
      align-items: center;
      height: 1.08rem;
      padding-left: 3.4rem;
      font-size: 0.36rem;
      font-weight: bold;
      color: #341912;
      .addIcon{
        margin-left: 0.08rem;
        width: 0.54rem;
        height: 0.54rem;
        background: url('../assets/image/list-addCard.png') no-repeat;
        background-size: 0.54rem 0.54rem;
      }
    }
  }
  .cardShare{
    margin:1.22rem 0 0 0.4rem;
    padding-bottom: 0.4rem;
    overflow:hidden;
    .qrcode{
      float:left;
      width:1.07rem;
      height: 1.07rem;
      background: #fff;
    }
    .shareHelp{
      float: left;
      margin-left:0.1rem;
      color:rgb(141,110,17);
      .text1{
        font-size: 0.36rem;
        line-height: 0.8rem;
        text-align: left;
      }
      .text2{
        font-size: 0.24rem;
        line-height: 0.26rem;
      }
    }
    .downLoad{
      float: left;
      width: 1.3rem;
      height: 0.54rem;
      margin:0.5rem 0 0 0.3rem;
      background: #fff;
      border-radius:0.43rem;
      .icon{
        display: inline-block;
        margin-top:0.1rem;
        width:0.36rem;
        height:0.32rem;
        background: url('../assets/image/list-download.png') no-repeat;
        background-size: 0.36rem 0.32rem;
      }
      .icon-p{
        background: url('../assets/image/list-download-p.png') no-repeat;
        background-size: 0.36rem 0.32rem;
      }
    }
  }
}
</style>
