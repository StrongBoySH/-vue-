<template>
	<!-- <van-loading size="24px">拼命加载中...</van-loading> -->
	<div id="Ld">
	 <van-loading size="30px" color="#455673" vertical>拼命加载中...</van-loading>
	 </div>
</template>

<script>
	import vanLoading from 'vant/lib/loading';
	import 'vant/lib/loading/style';
	export default{
		components:{
			vanLoading 
		}
	}
</script>

<style scoped>
	#Ld{
		position: fixed;
		top: 50%;
	     left: 50%;
		 transform: translate(-50%,-50%);
	}
</style>
