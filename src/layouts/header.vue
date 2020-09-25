<template>
	<div class="nav">
		
		
		<headerBar>
		    <div slot="home" class="home-header-bar">
		        <img src="../assets/img/信封.png"  id="ww" />
		        <span class="logo">
		            今日头条
		            
		        </span>
		        <router-link to="/search" class="search fr">
		            <img  id="search1" src="../assets/img/搜索(1).png" />
		        </router-link>
		        
		    </div>
		</headerBar>
		
		<ul class="homeNav">
		    <li v-for="(item,index) in navbar" :key="index" class="navBarLi">
		        <router-link :to="{path:item.url,query:{type:item.type}}">{{item.text}}</router-link>
		    </li>
		</ul>
		
	</div>
</template>

<script>
	import headerBar from '../components/Header-bar.vue'
	export default {
		
		props:{},
		data(){
			return{
				navbar: [{
				        text: '推荐',
				        url: '/column',
				        type: '__all__'
				    },
				    {
				        text: '热点',
				        url: '/follow',
				        type: 'news_hot'
				    },
				    {
				        text: '社会',
				        url: '/column',
				        type: 'news_society'
				    },
				    {
				        text: '娱乐',
				        url: '/follow',
				        type: 'news_entertainment'
				    },
				    {
				        text: '科技',
				        url: '/column',
				        type: 'news_tech'
				    },
				    {
				        text: '汽车',
				        url: '/follow',
				        type: 'news_car'
				    },
				    {
				        text: '体育',
				        url: '/column',
				        type: 'news_sports'
				    },
				    {
				        text: '财经',
				        url: '/follow',
				        type: 'news_finance'
				    },
				    {
				        text: '军事',
				        url: '/column',
				        type: 'news_military'
				    },
				    {
				        text: '国际',
				        url: '/follow',
				        type: 'news_world'
				    },
				    {
				        text: '时尚',
				        url: '/column',
				        type: 'news_fashion'
				    },
				],
			}
		},
		components:{headerBar},
		mounted(){},
		updated(){},
		methods:{}
		
	}
</script>

<style lang="less" scoped rel="styleheet/less">
	@import "../assets/css/border.less";
	.nav{width:100%; position:fixed; top:0;left:0; z-index:2; }
	.home-header-bar {
	    & > i {
	        margin-top: 0.1rem;
	    }
	    .logo {
	        color: #fff;
	        font-size: 18px;
	        vertical-align: middle;
	        i {
	            vertical-align: middle;
	        }
	    }
	    .homeEmail {
	        margin-left: 0.22rem;
	    }
	    .search{
	        display: inline-block;
	       .homeSearch {
	            margin-right: 0.22rem;
	            margin-top: 0.2rem;
	        } 
	    }
	    
	}
	#ww{
		width: 0.4rem;
		height: 0.4rem;
		position: fixed;
		left: 0.2rem;
		top: 0.1rem;
		display: block;
		z-index: 100000;
		background: #fff;
	}
	#search1{
		width: 0.4rem;
		height: 0.4rem;
		position: fixed;
		right: 0.2rem;
		top: 0.1rem;
		display: block;
		z-index: 100000;
		
	}
	.homeNav {
	    width: 100%;
	    overflow: hidden;
	    overflow-x: auto;
	    text-align: center;
	    position: fixed;
	    left: 0;
	    font-size: 0;
	    top: 0.6rem;
	    background: #f4f5f6;
	    font-family: '微软雅黑';
	    white-space: nowrap;
	    z-index: 999;
	    .navBarLi {
	        display: inline-block;
	        height: 0.5rem;
	        line-height: 0.5rem;
	        width: 1.4rem;
	        font-size: 16px;
	        a {
	            color: #000;
	        }
	        .router-link-active {
	            color: #d43d3d;
	            font-size: 17px;
	            font-weight: bold;
	        }
	    }
	}
</style>
