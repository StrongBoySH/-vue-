<template>
	<div class="nav" :style="{background:bgColor,'border-width':borderWidth+'px'}">
		<ul>
			<li
			:class="arrow==='gray'?'gray':'default'"
			@click="$router.go(-1)"
			>
				
			</li>
			
		</ul>
		<span>设置</span>
	</div>
</template>

<script>
	export default{
		name:'uc-nav',
		props:{
			//背景颜色
			bgColor:{
				type:String,
				default:'#fff'
			},
			//边框的粗细
			borderWidth:{
				type:Number,
				default:1
			},
			//箭头
			arrow:{
				type:String,
				default:'default'
			},
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.nav {
	  width: 100%;
	 position: fixed;
	  top: 0;
	  left: 0;
	  background: #fff;
	  border-bottom: 1px solid #e8eaec;
	  z-index: 99;
	}
	.nav ul {
	 float: left;
	  width: 0.29rem;
	  height: 0.45rem;
	  padding-top: 0.15rem;
	  margin: 0 auto;
	}
	.nav  span{
		float: right;
		font-size: 0.29rem;
		font-weight: 600;
		padding-top: 0.15rem;
		margin-right: 2.5rem;
	}
	.nav ul li {
	  width: 0.29rem;
	  height: 0.31rem;
	  background-size: 100%;
	  margin: 0 0 0 0.38rem;
	}
	.nav ul li.gray {
	  background: url(./assets/img/history1.png) no-repeat 0 0;
	  width: 0.29rem;
	  height: 0.31rem;
	  background-size: 100%;
	  margin: 0 0 0 0.38rem;
	}
	.nav ul li.default {
	  background: url(./assets/img/history1.png) no-repeat 0 0;
	  width: 0.29rem;
	  height: 0.31rem;
	  background-size: 100%;
	  margin: 0 0 0 0.38rem;
	}
</style>
