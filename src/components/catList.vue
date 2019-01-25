<template>
  <div id="search" ref="element">
    <div class="searchBox">
      <div class="box">
        <input type="text" class="searchInput" placeholder="搜索" v-model="petCategory"/>
        <div class="btn" v-on:click="inputSearch()">搜索</div>
      </div>
    </div>
    <ul class="list">
      <li :id="'searchList-'+index" v-for="(item,index) in searchList">
        <div class="searchTitle">{{item.title}}</div>
        <div class="searchCon">
          <p class="con" v-for="(item1,index) in item.con" v-on:click="chooseCategory(item1.subCon)">{{item1.subCon}}</p>
        </div>
      </li>
    </ul>
    <ul class="searchBtn">
      <li class="btn" :class="{selected:index == curr}" 
      v-for="(item,index) in searchList" v-on:click="chooseTab('#searchList-'+index,index,item.title)">
        {{item.title}}
      </li>
    </ul>
    <p class="showBtn" v-if="showBtn" v-text="showText"></p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result:[
          {
            title:"A",
            value:[
                {subCon:"f阿拉伯长毛猫1"},
                {subCon:"阿拉伯长毛猫2"},
                {subCon:"阿拉伯长毛猫3"}
            ]
          },
          {
            title:"B",
            value:[
                {subCon:"阿拉伯长毛猫1"},
                {subCon:"阿拉伯长毛猫2"},
                {subCon:"阿拉伯长毛猫3"}
              ]
          },
          {
            title:"C",
            value:[]
          }
      ],
      curr:0,
      searchList:[
        {
          title:"A",
          con:[
            {subCon:"阿拉伯长毛猫1"},
            {subCon:"阿拉伯长毛猫2"},
            {subCon:"阿拉伯长毛猫3"}
          ]
        },
        {
          title:"B",
          con:[
            {subCon:"波斯猫"},
            {subCon:"博漫猫"}
          ]
        },
        {
          title:"C",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫1"}
          ]
        },
        {
          title:"D",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫2"}
          ]
        },
        {
          title:"E",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫3"}
          ]
        },
        {
          title:"F",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫1"}
          ]
        },
        {
          title:"G",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"},
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"},
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"},
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"},
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"H",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"I",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"J",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"K",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"L",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"M",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"N",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"O",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"P",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"Q",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"R",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"S",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"T",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"U",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"V",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"W",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"X",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"Y",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        },
        {
          title:"Z",
          con:[
            {subCon:"C英国短毛猫"},
            {subCon:"咖啡猫"}
          ]
        }
      ],
      topList:[],
      showBtn:false,
      showText:'',
      petCategory:''
    }
  },
  created() {
    this.init();
  },
  mounted() { 
    // window.onscroll = this.scrollEvent();
    window.onscroll = this.throttle(this, this.scrollEvent, 50);
    for (let j = 0; j < 26; j ++) {
      this.$set(this.topList, j, document.getElementById(`searchList-${j}`).offsetTop);
    } 
  },
  methods: {
    init() {     
    },
    inputSearch:function() {
      var arrCate = [];
      for (var i =0; i < this.searchList.length; i++) {
        for(var j = 0;j < this.searchList[i].con.length;j++){
          if(this.searchList[i].con[j].subCon.search(this.petCategory) != -1) {
            var anchor =  this.$el.querySelector('#searchList-'+i)
            document.documentElement.scrollTop = anchor.offsetTop;
          }
        }    
      }
    },
    // 节流函数
    throttle:function(context, method, delay){
      let timer = null;
      return function a() {
        clearTimeout(timer);
        timer = setTimeout(() => {
          method.call(context);
        }, delay);
      };
    },
    //通过滚动条高度显示不同tab
    scrollEvent:function() {
      const scrollTop = (window.pageYOffset || document.documentElement.scrollTop
       || document.body.scrollTop || 0);
        if (scrollTop == 0) {
          this.curr = 0;
        } else if(scrollTop > this.topList[0] && scrollTop <= this.topList[1]) {
          this.curr = 1;
        } else if (scrollTop > this.topList[1] && scrollTop <= this.topList[2]) {
          this.curr = 2;
        } else if (scrollTop > this.topList[2] && scrollTop <= this.topList[3]) {
          this.curr = 3;
        } else if (scrollTop > this.topList[3] && scrollTop <= this.topList[4]) {
          this.curr = 4;
        } else if (scrollTop > this.topList[4] && scrollTop <= this.topList[5]) {
          this.curr = 5;
        } else if (scrollTop > this.topList[5] && scrollTop <= this.topList[6]) {
          this.curr = 6;
        } else if (scrollTop > this.topList[6] && scrollTop <= this.topList[7]) {
          this.curr = 7;
        } else if (scrollTop > this.topList[7] && scrollTop <= this.topList[8]) {
          this.curr = 8;
        } else if (scrollTop > this.topList[8] && scrollTop <= this.topList[9]) {
          this.curr = 9;
        } else if (scrollTop > this.topList[9] && scrollTop <= this.topList[10]) {
          this.curr = 10;
        } else if (scrollTop > this.topList[10] && scrollTop <= this.topList[11]) {
          this.curr = 11;
        } else if (scrollTop > this.topList[11] && scrollTop <= this.topList[12]) {
          this.curr = 12;
        } else if (scrollTop > this.topList[12] && scrollTop <= this.topList[13]) {
          this.curr = 13;
        } else if (scrollTop > this.topList[13] && scrollTop <= this.topList[14]) {
          this.curr = 14;
        } else if (scrollTop > this.topList[14] && scrollTop <= this.topList[15]) {
          this.curr = 15;
        } else if (scrollTop > this.topList[15] && scrollTop <= this.topList[16]) {
          this.curr = 16;
        } else if (scrollTop > this.topList[16] && scrollTop <= this.topList[17]) {
          this.curr = 17;
        } else if (scrollTop > this.topList[17] && scrollTop <= this.topList[18]) {
          this.curr = 18;
        } else if (scrollTop > this.topList[18] && scrollTop <= this.topList[19]) {
          this.curr = 19;
        } else if (scrollTop > this.topList[19] && scrollTop <= this.topList[20]) {
          this.curr = 20;
        } else if (scrollTop > this.topList[20] && scrollTop <= this.topList[21]) {
          this.curr = 21;
        } else if (scrollTop > this.topList[21] && scrollTop <= this.topList[22]) {
          this.curr = 22;
        } else if (scrollTop > this.topList[22] && scrollTop <= this.topList[23]) {
          this.curr = 23;
        } else if (scrollTop > this.topList[23] && scrollTop <= this.topList[24]) {
          this.curr = 24;
        } else if (scrollTop > this.topList[24] && scrollTop <= this.topList[25]) {
          this.curr = 25;
        } else {
          this.curr = 26;
        }
    },
    //选择不同tab，页面滚动至对应选项
    chooseTab: function(selector,index,text) {
      this.curr = index;
      this.showBtn = true;
      this.showText = text;
      setTimeout(() => {
          this.showBtn = false;
      }, 600);
      var anchor = this.$el.querySelector(selector);
      document.documentElement.scrollTop = anchor.offsetTop;
    },
    chooseCategory: function(category) {
      this.$emit("moreCatList",category);

    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../assets/css/mixin.scss';
#search{
  position: absolute;
  z-index:20;
  width: 100%;
  background: rgb(249,249,249);
  .searchBox{
    height:1.22rem;
    text-align: center;
    .box{
      display: inline-block;
      margin-top:0.25rem;
      padding-left:0.66rem;
      width:6.6rem;
      height:0.72rem;
      background: #fff;
      border-radius: 0.36rem;
      font-size:0.3rem;
      line-height: 0.72rem;
      overflow: hidden;
    }
    .searchInput{
      float: left;
      width:4.2rem;
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
    .btn{
      float: right;
      width:1.2rem;
      height:0.72rem;
      line-height: 0.72rem;
      color:#fff; 
      background:rgb(221,221,221); 
      
    }
  }
  .searchTitle{
    padding-left:0.32rem;
    font-size:0.36rem;
    line-height: 0.52rem;
    color:rgb(51,51,51);
  }
  .searchCon{
    background:#fff;
    .con{
      margin-left:0.32rem;
      font-size:0.3rem;
      line-height: 1.04rem;
      color:rgb(102,102,102);
      border-bottom: 0.01rem solid rgb(238,238,238); 
    }
  }
  .searchBtn{
    position: fixed;
    width:0.4rem;
    top:2rem;
    right:0.24rem;
    .btn{
      width:0.38rem;
      height: 0.38rem;
      border-radius: 0.19rem;
      font-size:0.24rem;
      line-height: 0.38rem;
      color:rgb(153,153,153);
      text-align: center;
      
    }
    .selected{
      background: rgb(255,208,67);
      color:rgb(51,51,51);
    }
  }
  .showBtn{
      position: fixed;
      top:40%;
      left:45%;
      width: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.5rem;
      background: rgba(51,51,51,0.3);
      text-align: center;
      border-radius: 0.1rem;
      color:#fff;
  }
}
</style>
