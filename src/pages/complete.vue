<template>
  <div class="record" :style="deviceHeight">
    <mt-datetime-picker
      ref="picker"
      type="date"
      @confirm="handleConfirm"
      :endDate="endDate"
      >
    </mt-datetime-picker>   
    <update v-if="showUpdate"></update>
    <giveUp v-if="showgiveUp" v-on:closeCover="closeCover"></giveUp>
    <deleteInfo v-if="showDelete" v-on:closeCover="closeCover"></deleteInfo>
    <netToast v-if="showError"></netToast>
    <catCategory v-if="showCatCategory" v-on:chooseCat="chooseCat" v-on:moreCat="moreCat"></catCategory>
    <dogCategory v-if="showDogCategory" v-on:chooseDog="chooseDog"></dogCategory>
    <catList  v-if="showCatList" v-on:moreCatList="moreCatList"></catList>
    <div class="recordHead">
      <div class="headCon">完善萌宠资料可获得100g口粮哦~</div>
    </div>
    <div class="recordCon" v-if="showCon">
      <div class="photo"><img :src="this.petImg"><i></i></div>
      <div class="info">
        <input type="text" class="name" placeholder="" v-model="petName"/>
        <ul class="choose sex"><span class="title">性别:</span>
          <li class="item" v-for="(item,index) in initPetInfo" 
          :class="{selected:index == curr1}" 
          v-on:click="changeSex(index)">{{item.sex}}</li>
        </ul>
        <div class="choose kind"><span class="title">品种:</span>
          <div class="item chooses selected" v-if="this.petKind == 'cat'" v-on:click="chooseCatKind()">{{cat}}
            <span class="toCategoryList">{{text}}></span>
          </div>
          <div class="item chooses selected" v-if="this.petKind == 'dog'" v-on:click="chooseDogKind()">{{dog}}
            <span class="toCategoryList">{{text}}></span>
          </div>
        </div>
        <div class="choose birth"><span class="title">生日:</span>
          <span class="birthUnit" v-on:click="openPicker()"><i>{{birthYear}}</i>年<i>{{birthMonth}}</i>月<i>{{birthDate}}</i>日</span>
        </div>
        <ul class="choose cate"><span class="title">免疫状态:</span>
          <li class="item" v-for="(item,index) in initPetInfo" 
          :class="{selected:index == curr2}" 
          v-on:click="changeImmune(index)">{{item.immune}}</li>
        </ul>
        <ul class="choose cate"><span class="title">绝育状态:</span>
          <li class="item" v-for="(item,index) in initPetInfo" 
          :class="{selected:index == curr3}" 
          v-on:click="changeSter(index)">{{item.ster}}</li>
        </ul>
        <ul class="choose cate"><span class="title">体检状态:</span>
          <li class="item" v-for="(item,index) in initPetInfo" 
          :class="{selected:index == curr4}" 
          v-on:click="changeHealth(index)">{{item.health}}</li>
        </ul>
      </div>
      <div class="btn">
        <p class="btnTips" v-if="showTips"><i></i>宠物昵称请不要超过10个中文字符哦~</p>
        <div class="join">
          <p class="complete" :class="[styles]"><span  v-on:click="updataPetInfo()">{{btn1}}</span></p>
          <p class="unComplete"><span v-on:click="cancelPetInfo()">{{btn2}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import giveUp from '../components/giveUp';
import update from '../components/update';
import netToast from '../components/netToast';
import deleteInfo from '../components/deleteInfo';
import catCategory from '../components/catCategory';
import dogCategory from '../components/dogCategory';
import catList from '../components/catList';
import { DatetimePicker } from 'mint-ui';

export default {
  data () {
    return {
      deviceHeight:{'min-height': `${deviceHeight}px`},
      cat:'猫咪',
      dog:'狗狗',
      text:'点击确认具体品种',
      btn1:'完善资料',
      btn2:'暂不完善',
      year:'2017',
      month:'04',
      date:'23',
      petKind: this.$route.params.petKind,
      petSex: this.$route.params.petSex,
      petName: this.$route.params.petName,
      petImg: this.$route.params.petImg,
      birthYear: this.$route.params.birthYear,
      birthMonth: this.$route.params.birthMonth,
      birthDate: this.$route.params.birthDate,
      initPetInfo:[
        { 
           petimg : require("../assets/image/cat.png") ,
           name : "汤姆·汉克斯·包",
           sex : "美女",
           kind : "猫咪",
           category : "斯芬克斯无毛猫",
           birthday : "",
           food : "500",
           immune: "已免疫",
           ster: "已绝育",
           health: "定期体检"
        },
        {
           petimg : require("../assets/image/cat.png") ,
           name : "汤姆·汉克斯·包",
           sex : "帅哥",
           kind : "狗狗",
           category : "西班牙斗牛犬",
           birthday : "",
           food : "500",
           immune: "未免疫",
           ster: "未绝育",
           health: "自由生长"
        }
      ],
      curr1:this.$route.params.petSex == 'female' ? 0 : 1,
      curr2:-1,
      curr3:-1,
      curr4:-1,
      showCon:true,
      firstComplete:false,
      showUpdate:false,
      showgiveUp:false,
      showDelete:false,
      showError:false,
      showTips:false,
      showCatCategory:false,
      showDogCategory:false,
      showCatList:false
    }
  },
  computed:{
    styles:function() {
      if(this.petName != '' && this.curr1 != -1 && this.curr2 != -1 && this.curr3 != -1 && this.curr4 != -1 && this.text == ''){
        return 'curr';
      }else{
        return '';
      }
    },
    endDate:function() {
      var myDate = new Date();
      myDate.getFullYear();
      return myDate;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      //判断是否是第一次完善资料
      if(!this.firstComplete){
        this.btn1 = '确认修改';
        this.btn2 = '删除资料';
      }
    },
    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(value) {
      //返回格式Tue Jan 01 2008 00:00:00 GMT+0800 (中国标准时间)
      value = value + "";
      var date = "";
      var month = new Array();
      month["Jan"] = "01"; month["Feb"] = "02"; month["Mar"] = "03"; month["Apr"] = "04"; month["May"] = "05";
      month["Jun"] = "06";month["Jul"] = "07"; month["Aug"] = "08"; month["Sep"] = "09"; month["Oct"] = "10"; 
      month["Nov"] = "11"; month["Dec"] = "12";
      var str = value.split(" ");
      this.year = str[3];
      this.month =  month[str[1]];
      this.date = str[2];
    },
    chooseCatKind(){   
      this.showCon = false;
      this.showCatCategory = true;   
    },
    chooseCat: function(name) {
      this.showCon = true;
      this.showCatCategory = false;
      this.text = '';
      this.cat = name;
    },
    chooseDogKind(){
      this.showCon = false;
    this.showDogCategory = true;    
    },
    chooseDog: function(name) {
      this.showCon = true;
      this.showDogCategory = false;
      this.text = '';
      this.dog = name;
    },
    moreCat: function() {
      this.showCon = true;
      this.showCatCategory = false;
      this.showCatList = true;
    },
    moreCatList: function(category) {
      this.showCatList = false;
      this.text = '';
      this.cat = category;
    },
    changeSex: function(index) {
      this.curr1 = index;
    },
    changeImmune: function(index) {
      this.curr2 = index;
    },
    changeSter: function(index) {
      this.curr3 = index;
    },
    changeHealth: function(index) {
      this.curr4 = index;
    },
    //获取更新宠物信息接口
    updataPetInfo: function() {
      //校验表单
      if(/^[a-zA-Z\u4e00-\u9fa5]{1,10}$/.test(this.petName)) {
         this.showTips = false;
         //判断是否信息完整
         if(this.styles == 'curr'){
            // this.styles = 'curr';
            //先获取接口返回firstComplete，判断是第一次完善，还是修改信息  
            if(this.firstComplete) {
              this.$router.push({
                name:'listCard',
                params:{
                  successPetImg:this.petImg,
                  successPetName:this.petName,
                  firstComplete:this.firstComplete
                }
              });
            } else {
              this.showUpdate = true;
              setTimeout(() => {
                  this.showUpdate = false;
                  this.$router.push({
                    name:'listCard'
                  });
              }, 1000);
            }
         }
      } else {
        this.showTips= true;
      }       
    },
    cancelPetInfo: function() {
      if(this.firstComplete){
        this.showgiveUp = true;
      }else{
        //删除宠物信息接口？
        //
        this.showDelete = true;
        
      }  
    },
    closeCover: function() {
          this.showgiveUp = false;
          this.showDelete = false;
    }
  },
  components: {
    giveUp,
    update,
    deleteInfo,
    netToast,
    catCategory,
    dogCategory,
    catList
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.record{
  background: rgb(250,250,250) url('../assets/image/record-bg.png') bottom center/7.5rem 4.77rem no-repeat;
}
.recordHead{
  width:100%;
  height:2.4rem;
  padding:0.45rem 0 0 1.04rem;
  background: rgb(255,208,67) url('../assets/image/record-cover.png') 0.7rem -1.5rem/5.19rem 3.89rem no-repeat;
  .headCon{
      width:100%;
      height:0.67rem;
      padding-left:0.8rem;     
      background:url('../assets/image/complete-hi.png') no-repeat;
      background-size: 0.66rem 0.67rem;
      font-size:0.3rem;
      line-height: 0.67rem;
      color:rgb(184,142,19);
  }
}
.recordCon{
  padding-top: 1rem;
  .photo{
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    margin:-2rem 0 0 1.04rem;
    border-radius: 0.8rem;
    background: url("../assets/image/record-photo.png") no-repeat;
    background-size: 1.6rem 1.6rem;
    i{
      position: absolute;
      top: 1.15rem;
      right: 0;
      width: 0.48rem;
      height: 0.48rem;
      background:url("../assets/image/record-icon.png") no-repeat;
      background-size: 0.48rem 0.48rem;
    }
  }
  .info{
    margin:0.56rem 0 0 1.04rem;
    color:rgb(51,51,51);
    .name{
      width:4rem;
      height: 0.36rem;
      font-size: 0.36rem;
      line-height: 0.36rem;
      margin-bottom: 0.16rem;
      background: rgb(250,250,250);
    }
    .choose{
      width: 100%;
      height:0.56rem;
      line-height: 0.56rem;
      margin-top:0.32rem;
      font-size: 0.3rem;
      .title{
        width:1.35rem;
      }
      .item{
        display: inline-block;
        width:1.68rem;
        height: 0.56rem;
        line-height: 0.56rem;
        margin-left:0.24rem;
        border:0.01rem solid rgb(221,221,221);
        border-radius:0.3rem;
        text-align: center;
        color: rgb(102,102,102);
      }
      .chooses{
        width:3.6rem;
        height: 0.56rem;
        .toCategoryList{
          font-size: 0.24rem;
          margin-left: 0.1rem;
          color: rgb(52,25,28);
        }
      }
      .selected{
        background: rgb(255,208,67);
        color: rgb(52,25,28);
        border:0;
      }
      .birthUnit{
        margin-left:0.24rem;
        font-size: 0.3rem;
        color: rgb(102,102,102);
      }
    }
    .birth{
      margin-top: 0.25rem;
      margin-bottom: -0.1rem;
    }
  }
  .btn{
    position: relative;
    margin-top:1rem;
    text-align:center;
    .btnTips{
      position: absolute;
      top:0;
      left:1.5rem;
      width:4.38rem;
      font-size:0.24rem;
      line-height:0.33rem;
      color:rgb(230,67,64);
      i{
        float:left;
        margin:0.03rem 0.05rem 0 0;
        width:0.24rem;
        height: 0.24rem;
        background: url('../assets/image/record-err.png') no-repeat;
        background-size: 0.24rem 0.24rem;
      }
    }
    .complete{
      display: inline-block;
      margin-top:0.45rem;
      width:5.05rem;
      height:0.8rem;
      line-height: 0.8rem;
      font-size: 0.36rem;
      background: rgb(238,238,238);
      border-radius:0.4rem;
      color:rgb(204,204,204);
      .completeLink{
        color:rgb(51,51,51);
      }
    }
    .unComplete{     
      font-size:0.28rem;
      line-height: 0.76rem;
      color:rgb(153,153,153);
    }
    .curr{
        background: rgb(255,208,67);
        color: rgb(52,25,28);
    }
  }
}
</style>
