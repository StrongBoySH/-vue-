<template>
	<div class="app">
		<h3>输入框测试</h3>
		<UcInput />
		<!-- 下面一和二相等-->
		<!-- <组件 :value="父数据" @input="父函数" /> -->
		<uc-input v-model="ipt"></uc-input>
		<uc-input v-model="ipt2" type="password" label="密码"></uc-input>
		
	</div>
</template>

<script>
	import UcInput from '../components/uc-input/uc-input.vue'
	export default {
		name:'App',
		data(){
			return {
				ipt:'qqq',
				ipt2:'kkk'
			}
		},
		components:{
			UcInput
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
