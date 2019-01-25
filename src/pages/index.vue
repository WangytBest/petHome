<template>
  <div class="record" :style="deviceHeight">
    <mt-datetime-picker
      ref="picker"
      type="date"
      @confirm="handleConfirm"
      :endDate="endDate"
      >
    </mt-datetime-picker>
    <div class="recordHead">
      <div class="headCon">
        <div class="leftIcon"></div>
        <div class="rightCon">
          <p class="nickName">XXXXXX</p>
          <p class="tips">XXXXXXXXXX&yen;<span>XXX</span>XXX</p>
        </div>
      </div>
    </div>
    <div class="recordCon">
      <div class="photo" v-on:click="chooseImage()">
        <img :src="this.imgBefore" class="headPhoto" v-if="showImgBefore">
        <img :src="this.imgChoose" class="headPhoto" v-if="showImgChoose">
        <i></i>
      </div>
      <div class="info">
        <input type="text" class="name" placeholder="输入萌宠的名字" v-model="petName"/>
        <ul class="choose sex">性别:
          <li class="item" v-for="(item,index) in selectedValue" 
          :class="{selected:index == curr1}" 
          v-on:click="changeSex(index)">{{item.sex}}</li>
        </ul>
        <ul class="choose kind">品种:
          <li class="item" v-for="(item,index) in selectedValue" 
          :class="{selected:index == curr2}" 
          v-on:click="changeCate(index)">{{item.kind}}</li>
        </ul>
        <div class="choose birth">生日: 
          <span class="birthUnit" v-on:click="openPicker()"><i>{{year}}</i>年<i>{{month}}</i>月<i>{{date}}</i>日</span>
        </div>
      </div>
      <div class="btn">
        <p class="error" v-if="showTips"><i></i>宠物昵称请不要超过10个中文字符哦~</p>
        <div class="join" :class="[styles]" v-on:click="savePetInfo()">
          <span class="link">一键加入</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { DatetimePicker } from 'mint-ui';
import { osJudge } from '../config/common';

export default {
  data () {
    return {
      deviceHeight:{'min-height': `${deviceHeight}px`},
      selectedValue:[
        { sex : "帅哥", kind : "猫咪"},
        { sex : "美女", kind : "狗狗"}
      ],
      year:'2008',
      month:'01',
      date:'01',
      curr1:-1,
      curr2:-1,
      petImg:'',
      petName:'',
      petSex:0, //未知0, 1公 ,2 母
      petKind:0,  //1猫 , 2狗
      petBirth:'',
      showTips:false,
      imgBefore:require("../assets/image/record-photo.png"),
      imgBase64:null,
      imgChoose:'',
      showImgBefore:true,
      showImgChoose:false
    }
  },
  created() {
    this.init();
  },
  computed:{
    styles:function() {
      if(this.petName != '' && this.curr1 != -1 && this.curr2 != -1){
        return 'curr';
      }
    },
    endDate:function() {
      var myDate = new Date();
      myDate.getFullYear();
      return myDate;
    }
  },
  methods: {
    init(){
      // window.getComputedStyle(this.$refs.headHeight).height;
    },
    chooseImage() {
      var that = this;
      JSSDK.Native.Sys.showChooseImage(function(res){
        setTimeout(function() {
          that.showImgBefore = false;
          that.showImgChoose = true;
          that.imgBase64 = res;
           //判断机型
          const os = osJudge();
          if (os[1] == 'android') {
            alert("1")
            that.imgChoose = 'data:image/gif;base64,'+ that.imgBase64;
          } else {
            alert("2")
            that.imgChoose = 'https://m.360buyimg.com/mobilecms/'+ that.imgBase64;
          }
        }, 0);
      });
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
    changeSex: function(index) {
      this.curr1 = index;
      this.petSex = index + 1;
    },
    changeCate: function(index) {
      this.curr2 = index;
      this.petKind = index + 1;
    },
    //输入表单校验
    savePetInfo: function() {  
      if(/^[a-zA-Z\u4e00-\u9fa5]{1,10}$/.test(this.petName)) {
         this.showTips= false;
         if(this.curr1!= -1 && this.curr2 != -1){
            
            this.$router.push({
              name:'listCard'
            });
         }
      } else {
        this.showTips= true;
      }

      //上传宠物图片
      
      //添加宠物信息
       this.axios.post('/petplan/pet/petlist').then((res) => {
          alert(res);
        },(e) => {
          console.log('1111网络异常，请重试', e);
        });
      // this.axios.post('http://www.mocky.io/v2/5b18de893000009b00da1402?petName='+ this.petName +'&petSex='+this.petSex+'&petKind='+this.petKind+'&petBirth='+this.petBirth).then((res) => {
      //     console.log(res);
      //   },() => {
      //     alert('网络异常，请重试');
      //   });
    }
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
  height:4.33rem;
  background: rgb(255,208,67) url('../assets/image/record-cover.png') 1.1rem 0.4rem/5.19rem 3.89rem no-repeat;
  .headCon{
    padding:0.91rem 0 0 0.49rem;
    overflow:hidden;
    .leftIcon{
      float:left;
      width:1.07rem;
      height:1.08rem;
      background:url('../assets/image/record-hi.png') no-repeat;
      background-size: 1.07rem 1.08rem;
    }
    .rightCon{
      float:left;
      margin-left:0.14rem;
      color:rgb(184,142,19);
      .nickName{
        font-size: 0.4rem;
        line-height: 0.4rem;
      }
      .tips{
        width:5.6rem;
        margin-top:0.14rem;
        font-size: 0.3rem;
        line-height: 0.45rem;
        span{
          font-size:0.4rem;
        }
      }
    }
  }
}
.recordCon{
  padding-top: 1rem;
  .photo{
    position: relative;
    width: 1.6rem;
    margin:-2rem 0 0 1.45rem;
    border-radius: 0.8rem;
    .headPhoto{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 0.8rem;
    }
    i{
      position: absolute;
      right: 0px;
      bottom: 0.01rem;
      width: 0.48rem;
      height: 0.48rem;
      margin:1.12rem 0 0 1.12rem;
      background:url("../assets/image/record-icon.png") no-repeat;
      background-size: 0.48rem 0.48rem;
    }
  }

  .info{
    margin:0.56rem 0 0 1.45rem;
    color:rgb(51,51,51);
    .name{
      width:4rem;
      height: 0.36rem;
      font-size: 0.36rem;
      line-height: 0.36rem;
      margin-bottom: 0.16rem;
      background: rgb(250,250,250);
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
      color: rgb(221,221,221);
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: rgb(221,221,221);
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: rgb(221,221,221);
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: rgb(221,221,221);
    }
    .choose{
      width: 100%;
      height:0.56rem;
      margin-top:0.32rem;
      font-size: 0.3rem;
      .item{
        display: inline-block;
        width:1.68rem;
        height: 0.56rem;
        line-height: 0.56rem;
        margin-right:0.24rem;
        border:0.01rem solid rgb(221,221,221);
        border-radius:0.3rem;
        text-align: center;
        color: rgb(102,102,102);
      }
      .selected{
        background: rgb(255,208,67);
        color: rgb(52,25,28);
        border:0;
      }
      .birthUnit{
        margin-left:0.1rem;
        font-size: 0.3rem;
        color: rgb(102,102,102);
      }
    }
  }
  .btn{
    position: relative;
    margin-top:0.15rem;
    text-align:center;
    p{
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
    .join{
      display: inline-block;
      margin-top:0.45rem;
      width:5.05rem;
      height:0.8rem;
      line-height: 0.8rem;
      font-size: 0.36rem;
      background: rgb(238,238,238);
      border-radius:0.4rem;
      color: rgb(204,204,204);
    }
    .link{
      display: inline-block;
      width:5.05rem;
      height:0.8rem;
      color:rgb(52,25,18);
    }
    .curr{

        background: rgb(255,208,67);
        color: rgb(52,25,28);
    }
  }
}
</style>
