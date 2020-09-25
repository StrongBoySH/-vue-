
<template>
<div id="my">
    <div class="my-header" >
        <router-link to="/selfpage" class="my-info">
            <img :src="$route.query.user.icon" alt="" class="my-head-portrait fl">
            <span class="my-name fl">{{$route.query.user.nikename}}</span>
			
            
        </router-link>
        <ul class="info-bar clearfix">
            <router-link to="/selfpage" class="info-bar-item">
                <p>1</p>动态</router-link>
            <router-link to="/care" class="info-bar-item">
                <p>{{$route.query.user.follow}}</p>关注</router-link>
            <router-link to="/care" class="info-bar-item">
                <p>{{$route.query.user.fans}}</p>粉丝</router-link>
            <router-link to="/care" class="info-bar-item">
                <p>{{$route.query.user.follow1}}</p>7天访量</router-link>
        </ul>
    </div>
   <ul class="midBar">
        <li is="router-link" class="fl collect isLi" to="/column">
            <img src="../assets/img/1.png"/>
			 收藏
        </li>
        <li  class="fl history "   @click="$router.go(-1)">
            <img src="../assets/img/2.png"/>
			 历史
        </li>
    </ul>
   <div class="tipItems">
        消息通知
    </div>
    <router-link to="/setup" class="tipItems">
        系统设置
       
    </router-link>
  <div class="tipItems">
       <a @click="logout">注销</a>
   </div>
   
</div>
</template>

<script>
	import axios from '../plugins/axios.js'
  export default {
    name:'user',
    props:{},
    data(){
      return {
        
      }
    },
	beforeRouteEnter(to,from,next){
		axios({
			url:'api/user'
		}).then(
		res=>{
			if(res.data.err===0){
				to.query.user=res.data.data
				next()
			}else{
				next('/login')
			}
		}
		)
	},
    components:{ axios},
    mounted(){},
    updated(){},
    methods:{
		logout(){
			window.localStorage.removeItem('user');
			this.$router.push('./login')
		}
	}
  }
</script>

<style lang="less" scoped>
	@import  '../assets/css/border.less';
 
  
  .my-header {
      height: 3.2rem;
      width: 100%;
      background: rgba(51,51,51,1);
      .my-info {
          height: 2.4rem;
          display: block;
          .my-head-portrait {
              height: 1rem;
              width: 1rem;
              border-radius: 50%;
              margin-top: 0.8rem;
              margin-left: 0.8rem;
          }
          .my-name {
              font-size: 18px;
              font-weight: bold;
              color: #ffd;
              margin-top: 0.4rem;
              margin-left: 0.5rem;
          }
          .toMyself {
              margin-top: 1rem;
              margin-right: 0.5rem;
          }
      }
      .info-bar {
          height: 0.8rem;
          .info-bar-item {
              float: left;
              width: 25%;
              height: 0.5rem;
              box-sizing: border-box;
              border-left: 1px solid #666;
              text-align: center;
              font-size: 13px;
              color: #777;
              &:first-child {
                  border: 0;
              }
              p {
                  font-size: 16px;
                  color: #ffd;
              }
          }
      }
  }
 
 
  .midBar{
	  position: relative;
	  width: 100%;
	  height: 0.5rem;
  }
  .midBar .isLi{
	  // display: flex;
	  // flex-direction: column;
	  
	  position: fixed;
	  top: 3.8rem;
	  left: 0.5rem;
	  display: block;
	  width: 50%;
	  height: 0.5rem;
	  text-align: center;
	  font-size: 0.3rem;
  }
  .midBar .history{
  	  position: fixed;
  	  top: 3.8rem;
  	  right: 0.5rem;
  	  display: block;
  	  width: 50%;
  	  height: 0.5rem;
  	  text-align: center;
  	  font-size: 0.3rem;
  }
   .midBar img{
	   width: 0.4rem;
	   height: 0.4rem;
   }
  .tipItems {
      display: block;
      height: 1.1rem;
      width: 100%;
      margin-top: 0.3rem;
      color: #000;
      font-size: 16px;
      line-height: 1.1rem;
      font-weight: bold;
      position: relative;
      padding-left: 0.3rem;
      .verticalBorder(1px,#ccc);
      .toSetup{
          margin-right: .3rem;
          margin-top: .2rem;
      }
  }
  .tipItems a{
	  display:block;
	  color: #000;
  }
</style>
