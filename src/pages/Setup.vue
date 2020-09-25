<template>
<div id="setup">
   <headerBar>
   </headerBar>
    <div class="item">
        <router-link to="/editprofile" class="setup_item" > 编辑资料
        
        </router-link>
        <div class="setup_item">账号和绑定设置</div>
        <div class="setup_item">黑名单</div>
    </div>
    <div class="item lingwai">
        <div class="setup_item">清除缓存</div>
        <div class="setup_item">字体大小</div>
        <div class="setup_item hasSwith">列表显示摘要
       <van-switch v-model="checked" size="25px"/>
        </div>
        <div class="setup_item">非WIFI网络流量</div>
        <div class="setup_item">非WIFI网络播放提醒</div>
        <div class="setup_item hasSwith">推送通知
       <van-switch v-model="checked1" size="25px"/>
        </div>
    </div>
     <div class="log_off" @click="logout">退出登录</div>
</div>
</template>
<script>
import axios from 'axios'
import headerBar from '../components/uc-nav/uc-nav3.vue'

import vanSwitch from 'vant/lib/switch';
import 'vant/lib/switch/style';
export default {
    components: {
       axios,headerBar,vanSwitch
    },
    methods: {
        logout(){
			alert('退出当前账号，将不能同步收藏，发布评论和云端分享等');
        	window.localStorage.removeItem('user');
        	this.$router.push('./login')
        }
    },
    data() {
        return { 
                checked: true,
				checked1:true
        }
    },
    computed: {
        
        
    }
}
</script>
<style lang="less" scoped>@import '../assets/css/border.less';
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
#setup {
    .setup-header {
        font-size: 18px;
        font-weight: bold;
        background: #fff;
        color: #000;
        position: relative;
		padding-right: 0.3rem;
        .borderBottom(1px,#ccc);
        .back {
            line-height: 1.2rem;
            margin-left: 0.3rem;
        }
    }
    .item {
        width: 100%;
        margin-top: 0.5rem;
        position: relative;
        .borderTop(1px,#ccc);
        .setup_item {
            display: block;
            height:0.7rem;
            width: 100%;
            line-height: 0.5rem;
            color: #000;
            position: relative;
            padding-left: 0.3rem;
            font-weight: bold;
            font-size: 16px;
            .borderBottom(1px,#ccc);
            .toeditprofile{
                margin-right: .3rem;
                margin-top: .2rem;
            }
        }
       
    }
    .lingwai {
        margin-top: 1rem;
    }
    .log_off {
        margin-top: 1rem;
        height: 1.1rem;
        width: 100%;
        line-height: 1.1rem;
        color: #d43d3d;
        padding-left: 0;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        position: relative;
        .verticalBorder(1px,#d43d3d);
    }
}
.hasSwith{
	position: relative;
}
.van-switch{
	position: absolute;
	right: 1rem;
	top:5px;
}
</style>
