<template>
	<div class="app">
		<h3>button测试</h3>
		<UcButton/>
		<uc-button/>
		<!-- 用属性传递数据时，带冒号可以自定义子里面接收的类型，不带冒号，只能默认为字符 -->
		<uc-button text="登录"/>
		<!-- 传递数据是考肉串，接收就为小驼峰 -->
		<uc-button bg-color="#d43d3d"/>
		<uc-button>注册</uc-button>
		<uc-button @click="show">点击</uc-button>
		
	</div>
</template>

<script>
	import UcButton from '../components/uc-button/uc-button.vue'
	export default {
		name:'App',
		components:{
			UcButton
		},
		methods:{
			show(ev){
				console.log(ev)
			}
		}
	}
</script>

<style>
</style>
