<template>
  <div class="column pd-top">
    <uc-cell
      v-for="(item,index) of list"
      :key="item._id"
     :data="item" 
     collectionName="column"
     />
  </div>
</template>

<script>
   import UcCell from '../components/uc-cell/uc-cell.vue'
  export default {
    name:'column',
    props:{},
    data(){
      return {
        list:[]
      }
    },
     components:{UcCell},
    mounted(){
		this.$axios({
			url:'/api/column',
			params:{_limit:8,page:1}
		}).then(
		 res=> {
			
		 this.list=res.data.data;
		 console.log(res.data.data)
		 },
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style>
   .column{padding-left: 0.34rem;padding-right: 0.68rem;}
</style>
