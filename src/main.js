import Vue from 'vue'
import App from './layouts/App.vue'
import vantUI from 'vant-ui';
import { Switch } from 'vant';

Vue.config.productionTip = false

import './assets/css/base.css';// ~~ src
import './assets/js/font.js';//字体比值控制
// import el from './assets/css/el.css';
//引入路由
import router from './plugins/router.js';
//引入拦截器
import './plugins/axios';

//引入全局过滤器
import './filters';



let vm = new Vue({
  
  render: h => h(App),
  router,
  vantUI,
  Switch,
  // el,
  data:{
    bNav:false,
    bFoot:false,
    bLoading:true
  }
}).$mount('#app')


export default vm;