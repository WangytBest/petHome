<template>
<div class="fileDetails" :style="deviceHeight">
<foodDetails v-if="showFoodDetail" v-on:closeFoodDetail="closeFoodDetails" :petKind="petKind" :petImg="petImg"></foodDetails>
	<div class="filebg">
		<div class="fileCard">
			<div class="cardHead">
				<img class="headPic" :src="this.petImg">
				<div class="headCon">
					<p class="edit" v-on:click="completeFile()">编辑</p>
					<p class="name">{{this.petName}}</p>
					<p class="num">NO.{{this.petNum}}</p>
				</div>
				<div class="tipsEdit"></div>
				<div class="tipsFeed" v-if="tipsFeedShow"></div>
			</div>
			<div class="cardList">
				<p class="text" :class="this.petKind == 'cat' ? 'petCat' : 'petDog'">{{this.petCategory}}</p>
				<p class="text" :class="this.petSex == 'male' ? 'petMale' : 'petFemale'">1.25岁</p>
				<p class="text" :class="this.petKind == 'cat' ? 'catFood' : 'dogFood'">口粮{{this.petFood}}g<i class="details" v-on:click="showFoodDetails()"></i></p>
			</div>
			<feed v-on:feedCount="feedCount" :petFood="petFood"></feed>
		</div>
	</div>
	<div class="fileCalendar">
		<div class="birthDay">
			<span class="date">24</span><i class="line"></i><span class="month">4月</span>我成功入住喵星球啦!
		</div>
		<div class="firstDay">
			<span class="date">23</span><i class="line"></i><span class="month">4月</span>今天是我来到世界的第一天!
		</div>
	</div>
	<div class="cardShare">
      <div class="qrcode"></div>
      <div class="shareHelp">
        <p class="text1">玩转宠Ta</p>
        <p class="text2">打开微信&gt;扫描二维码进入宠Ta小程序</p>
      </div>
      <div class="downLoad" v-on:click="shareCard()"><i class="icon"></i></div>
    </div>
    <div class="fileInvite" v-on:click="callmpshare()">
    	<span>邀请好友来投食</span><i class="icon"></i>
    </div>
</div>
</template>
<script>
import foodDetails from '../components/foodDetails';
import feed from '../components/feed';
import jdshare from '@jmfe/jm-jdshare';

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
		birthYear: this.$route.params.birthYear,
        birthMonth: this.$route.params.birthMonth,
        birthDate: this.$route.params.birthDate,
		showFoodDetail:false,
		tipsFeedShow:false
    }
  },
  created() {
  	this.init();

  },
  methods: {
  	init() {

  	},
    showFoodDetails: function() {
      this.showFoodDetail = true;
    },
    closeFoodDetails: function() {
      this.showFoodDetail = false;
    },
    feedCount: function() {
    	this.tipsFeedShow = true;
    	setTimeout(() => {
	        this.tipsFeedShow = false;
	    }, 1000);
    	if(this.petFood >= 25){
    		this.petFood -= 25;
    	}else{
    		alert('没有口粮了')
    	}
    },
    completeFile: function() {
    	this.$router.push({
    		name:'complete',
    		params:{
	    		petName: this.petName,
	            petImg: this.petImg,
	            petKind: this.petKind,
	            petSex: this.petSex,
	            birthYear: this.birthYear,
	            birthMonth: this.birthMonth,
	            birthDate: this.birthDate,
            }
    	});
    },
    shareCard: function() {
    	this.$router.push({
    		name:'shareCard',
    		params:{
	    		petName: this.petName,
	            petImg: this.petImg,
	            petNum: this.petNum,
	            petKind: this.petKind,
	            petCategory: this.petCategory,
	            petSex: this.petSex,
	            petFood: this.petFood
            }
    	});
    },
    //唤起分享功能
    callmpshare:function() {
    	var that = this;
	    jdshare.callSharePane({
	      title: '萌宠小程序',
	      content: '萌宠小程序啦啦啦~',
	      url: 'https://h5.m.jd.com/dev/3RHnwBxhfMvhdSWwCeUX6aYAxmP7/index.html',
	      img: 'https:'+'//img20.360buyimg.com/uba/jfs/t19051/65/1065840220/4217/f50d586/5ab9b77eNc0f3a787.png',
	      channel: '',
	      callback: function() {
	      	that.showShareSuccess();
	      }
	    });
    },
    showShareSuccess() {
    	this.$router.push({
    		name:'listCard',
    		params:{
	    		showShareSuccess: true,
            }
    	}); 	
    }
  },
  components: {
    foodDetails,
    feed
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
.fileDetails{
	background: rgb(250,250,250);
	text-align: center;
	overflow: hidden;
	.filebg{
		width:100%;
		height: 5rem;
		background: rgb(255,208,67);
		.fileCard{
			position: relative;
			display: inline-block;
		    margin-top:2.12rem;
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
		        width: 1.8rem;
		        height: 1.8rem;
		        margin-top:-0.3rem;
		        border-radius: 0.9rem;
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
		      .tipsEdit{
		      	position: absolute;
		      	top: -1.4rem;
    			right: -0.7rem;
		      	width: 2.49rem;
		      	height: 1.72rem;
		      	background:url('../assets/image/tips-edit.png') no-repeat;
		      	background-size: 2.49rem 1.72rem; 
		      }
		      .tipsFeed{
		      	position: absolute;
		      	top: -1.2rem;
    			left: 2rem;
		      	width: 3.44rem;
		      	height: 1.12rem;
		      	background:url('../assets/image/tips-feed.png') no-repeat;
		      	background-size: 3.44rem 1.12rem; 
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
	.fileCalendar{
		height: 1.63rem;
		margin:1.66rem 0 0 0.52rem;
		padding: 0.18rem 0 0 0.18rem;
		background: url('../assets/image/file-calendar.png') no-repeat;
		background-size: 0.29rem 1.61rem;
		text-align: left;
		.birthDay,.firstDay{
			display: flex;
			align-items: center;
			height: 0.59rem;
			font-size: 0.28rem;
			color:rgb(153,153,153);
			.date{
				font-size:0.42rem;
				font-weight: bold;
				color:rgb(102,102,102);
			}
			.line{
				width: 0.08rem;
				height: 0.22rem;
				margin: 0 0.1rem;
				background: url('../assets/image/file-line.png') no-repeat;
				background-size: 0.08rem 0.22rem;
			}
			.month{
				font-size:0.24rem;
				font-weight: bold;
				margin-right:0.15rem;
				color:rgb(102,102,102);
			}
		}
	}
	.cardShare{
	    margin:0.8rem 0 1.8rem 0.4rem;
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
	      color:rgb(51,51,51);
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
	      border:0.01rem solid rgb(187,187,187);
	      border-radius:0.43rem;
	      .icon{
	        display: inline-block;
	        margin-top:0.1rem;
	        width:0.36rem;
	        height:0.32rem;
	        background: url('../assets/image/list-download-p.png') no-repeat;
	        background-size: 0.36rem 0.32rem;
	      }
	      .icon-p{
	        background: url('../assets/image/list-download-p.png') no-repeat;
	        background-size: 0.36rem 0.32rem;
	      }
	    }
	}
	.fileInvite{
		display: flex;
		align-items: center;
		justify-content:center;
		position: fixed;
		bottom:0;
		width:100%;
		height:1.49rem;
		/*background: rgb(255,208,67);*/
		background: rgb(255,208,67) url('../assets/image/record-bg.png') bottom center/7.5rem 4.77rem no-repeat;
		span{
			font-size: 0.42rem;
			color: rgb(52,25,18);
			font-weight: bold;
		}
		.icon{
			width:0.43rem;
			height: 0.42rem;
			background: url('../assets/image/file-share.png') no-repeat;
			background-size: 0.43rem 0.42rem;
		}
	}
}

</style>
