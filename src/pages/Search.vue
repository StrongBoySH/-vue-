<template>
	<div id="search">
		<headerBar>
			<div slot="search" class="search_header">
				<Icon type="ios-arrow-back" size="28" color="#fff" class="fl back" @click.native="$router.go(-1)">
				</Icon>
				搜索
			</div>
		</headerBar>
		
		<input placeholder="请输入内容" />
	</div>
</template>
<script>
	import axios from 'axios'
	import headerBar from '../components/uc-nav/uc-nav2.vue'
	import UcInput from '../components/uc-input/uc-input.vue'
export default{
	components:{
		headerBar,UcInput
	},
	// filters:{
	// 	high: function(title,inp){
	// 		const reg = new RegExp(''+inp+'','gim');
	// 		if(title){
	// 			return title.replace(reg,'<span class="red">'+inp+'</span>')
	// 		}else{
	// 			return title;
	// 		}
			
	// 	}
	// },
	data(){
		return {
			
		}
	},
	
}
</script>
<style lang="less" scoped>
@import '../assets/css/border.less';
.red{
	color: red;
}
#search{
	.search_header{
		font-size: 20px;
		font-weight: bold;
		color: #fff;
		.back{
			line-height: 1.2rem;
	        margin-left: 0.3rem;
		}
	}
	
}
input{width: 5.6rem;height: 0.5rem;border: 1px solid thistle;border-radius: 0.5;position: fixed;top: 0.68rem;}
</style>