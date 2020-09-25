<template>
	<div class="app">
		<h3>uc-toolbar</h3>
		<UcToolbar></UcToolbar>
		
	</div>
</template>

<script>
	import UcToolbar from '../components/uc-toolbar/uc-toolbar.vue'
	export default {
		name:'App',
		data(){
			return{
				
			}
		},
		mounted(){
		
		},
		components:{
			 UcToolbar
		},
		methods:{
		  show(ev){
		    console.log(ev)
		  }
		}
		
	}
</script>

<style scoped>
	
</style>
