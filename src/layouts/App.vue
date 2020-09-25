<template>
	<div class="app pd-top">
	     <loading v-show="$root.bLoading" />
		<Header v-show="$root.bNav"/>
	    <router-view></router-view>
		<Footer v-show="$root.bFoot"/>
		
	</div>
</template>

<script>
	
	import Header from './header.vue';
	import loading from '../components/loading1.vue'
	import Footer from './Bottom-nav.vue';
	export default {
		name:'App',
		data(){
			return{
				
			}
		},
		watch:{
			$route:{
				handler(newVal){
				  let path = newVal.path;
				  if(/home|follow|column/.test(path)){
				    this.$root.bNav=true;
				    this.$root.bFoot=true;
				  }
				  if(/user/.test(path)){
				    this.$root.bNav=false;
				    this.$root.bFoot=true;
				  }
				  if(/login|reg|detail|search/.test(path)){
				    this.$root.bNav=false;
				    this.$root.bFoot=false;
				  }
				  if(/search/.test(path)){
				    this.$root.bNav=false;
				    this.$root.bFoot=true;
					this.$root.bLoading=false;
				  }
				  if(/setup|login|reg/.test(path)){
					  this.$root.bNav=false;
					  this.$root.bFoot=false;
					  this.$root.bLoading=false;
				  }
				 
			},
			immediate:true
		  }
		},
		mounted(){
		
		},
		components:{
			Header,Footer,loading
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
