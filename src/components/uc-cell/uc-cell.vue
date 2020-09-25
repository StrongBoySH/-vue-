<template>
	<div class="uc-cell">
		<!-- 点击跳转到详情页 -->
		<div @click="toDetail">
		  <h2><span v-show="index != null">{{index + 1}}.</span>{{data.title}}</h2>
		  <p>{{data.des}}</p>
		  <!-- click.stop 为事件修饰符阻止冒泡-->
		  <a class="cell__anchor" v-if="isAdd" href="javascript:;" @click.stop="$emit('add-item',$event)">+</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'uc-cell',
		props:{
			data:{//{_id:xx,,titlt:xx,des:xx},用来显示
				type:Object,
				required:true
			},
			//跳转需要的数据
			collectionName:{//集合名
				type:String,
				default:null
			},
			index:{//索引，可以显示也可以不显示
				type:Number,
				default:null
			},
			isAdd:{//插槽
				type:Boolean,
				default:false
			}
		},
		components:{},
		mounted(){},
		updated(){console.log(this.data)},
		methods:{
		  toDetail(){
			
		    if(this.collectionName){
				
		      this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
		    }
			
		  }
		}
	}
</script>

<style>
	.uc-cell{position: relative;}
	.uc-cell:active {background: #ccc;}
	.uc-cell div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
	.uc-cell div h2{max-height:2rem; font-size:0.33rem; overflow:hidden;}
	.uc-cell div p{max-height:2rem; margin-top:0.05rem;overflow:hidden;}
	.cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
</style>
