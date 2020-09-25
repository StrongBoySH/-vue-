<template>
	<div class="app">
		<h3>banner测试</h3>
		<!-- list 存放图片的地址，id和信息 -->
		<banner
		:data="list"
		collectionName="detail"
		/>
	</div>
</template>

<script>
	import banner from '../components/banner/uc-banner.vue'
	export default {
		name:'App',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			setTimeout(()=>{
				this.list=[
					{_id:1,image:'/images/img1.jpg',title:'xxx1',sub_title:'xxxx2'},
					{_id:2,image:'/images/img2.jpg',title:'xxx2',sub_title:'xxxx2'},
					{_id:3,image:'/images/img3.jpg',title:'xxx3',sub_title:'xxxx2'},
					{_id:4,image:'/images/img4.jpg',title:'xxx4',sub_title:'xxxx2'},
				];
			},1000)
		},
		components:{
			banner
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
