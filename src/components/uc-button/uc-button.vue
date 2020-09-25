<template>
	<div class="uc-button">
		<button class="login-btn" :style="{background:bgColor}" @click="$emit('click',$event)">
		<template v-if="text!=='按钮'">
			{{text}}
		</template>
		<slot v-if="text==='按钮'">按钮</slot>
		</button>
	</div>
</template>

<script>
	export default{
		name:'uc-button',
		props:{
			text:{//按钮文本的类型和默认值
				type:String,
				default:'按钮'
			},
			bgColor:{//背景颜色的类型和默认值
				type:String,
				default:'#d43d3d'
			}
		},
		data(){
			return {};
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	.uc-button {
	}
	.login-btn {
	  width: 2.65rem;
	  height: 0.65rem;
	  background: #4c4f50;
	  color: #fff;
	  text-align: center;
	  line-height: 0.65rem;
	  border-radius: 8px;
	  display: block;
	  /* margin-top: 0.62rem; */
	  font-size: 0.28rem;
	  border:none;
	  outline: none;
	}
</style>
